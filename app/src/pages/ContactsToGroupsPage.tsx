import { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Table,
  Alert,
} from "react-bootstrap";
import axios from "axios";

import type { Contact, ContactGroup, Group } from "../utils/models";

const token = localStorage.getItem("accessToken");

export default function AssignContactsToGroupsPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [groups, setGroups] = useState<Group[]>([]);
  const [contactGroups, setContactGroups] = useState<ContactGroup[]>([]);

  const [selectedContactId, setSelectedContactId] = useState<number | null>(
    null
  );
  const [selectedGroupId, setSelectedGroupId] = useState<number | null>(null);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    fetchAll();
  }, []);

  const fetchAll = async () => {
    try {
      const contactsRes = await axios.get("http://localhost:3000/contacts");
      setContacts(contactsRes.data);

      const groupsRes = await axios.get("http://localhost:3000/groups");
      setGroups(groupsRes.data);

      const cgRes = await axios.get("http://localhost:3000/contactGroup");
      setContactGroups(cgRes.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleAssign = async () => {
    if (!selectedContactId || !selectedGroupId) {
      setMessage("Выберите и контакт, и группу.");
      return;
    }

    // Проверка: уже существует такая связь?
    const exists = contactGroups.some(
      (cg) =>
        cg.contactId === selectedContactId && cg.groupId === selectedGroupId
    );

    if (exists) {
      setMessage("Эта связь уже существует.");
      return;
    }

    try {
      await axios.post("http://localhost:3000/contactGroup", {
        contactId: selectedContactId,
        groupId: selectedGroupId,
      });

      setMessage("Связь успешно добавлена!");
      setSelectedContactId(null);
      setSelectedGroupId(null);
      fetchAll();
    } catch (err) {
      setMessage("Ошибка при добавлении связи.");
      console.error(err);
    }
  };

  const getContactName = (id: number) =>
    contacts.find((c) => c.id === id)?.name || "";
  const getGroupName = (id: number) =>
    groups.find((g) => g.id === id)?.name || "";

  return (
    <Container className="mt-4">
      <h3>Добавить контакт в группу</h3>
      {message && <Alert variant="info">{message}</Alert>}

      <Row className="mb-3">
        <Col md={5}>
          <Form.Select
            value={selectedContactId ?? ""}
            onChange={(e) => setSelectedContactId(Number(e.target.value))}
          >
            <option value="">Выберите контакт</option>
            {contacts.map((contact) => (
              <option key={contact.id} value={contact.id}>
                {contact.name}
              </option>
            ))}
          </Form.Select>
        </Col>
        <Col md={5}>
          <Form.Select
            value={selectedGroupId ?? ""}
            onChange={(e) => setSelectedGroupId(Number(e.target.value))}
          >
            <option value="">Выберите группу</option>
            {groups.map((group) => (
              <option key={group.id} value={group.id}>
                {group.name}
              </option>
            ))}
          </Form.Select>
        </Col>
        <Col md={2}>
          <Button onClick={handleAssign}>Добавить</Button>
        </Col>
      </Row>

      <h5>Существующие связи</h5>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Контакт</th>
            <th>Группа</th>
          </tr>
        </thead>
        <tbody>
          {contactGroups.map((cg) => (
            <tr key={cg.id}>
              <td>{getContactName(cg.contactId)}</td>
              <td>{getGroupName(cg.groupId)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
