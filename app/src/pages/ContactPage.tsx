import { useEffect, useState } from "react";
import {
  Table,
  Button,
  Form,
  Modal,
  Container,
  Row,
  Col,
} from "react-bootstrap";

import type { Contact } from "../utils/models.ts";
import axios from "axios";

const token = localStorage.getItem("accessToken");

export default function ContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);

  const [showModal, setShowModal] = useState(false);
  const [editingContact, setEditingContact] = useState<Contact | null>(null);

  const fetchContacts = async () => {
    try {
      const resp = await axios.get("http://localhost:3000/contacts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setContacts(resp.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3000/contacts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchContacts();
    } catch (err) {
      console.error(err);
    }
  };

  const handleSave = async () => {
    if (!editingContact) return;

    const trimmedName = editingContact.name.trim();
    const trimmedPhone = editingContact.phone.trim();

    if (!trimmedName || !trimmedPhone) {
      alert(
        "Поля 'Имя' и 'Телефон' не должны быть пустыми или содержать только пробелы."
      );
      return;
    }

    try {
      if (editingContact.id) {
        await axios.patch(
          `http://localhost:3000/contacts/${editingContact.id}`,
          {
            name: editingContact.name,
            phone: editingContact.phone,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      } else {
        await axios.post(
          "http://localhost:3000/contacts",
          {
            name: editingContact.name,
            phone: editingContact.phone,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      }

      setShowModal(false);
      setEditingContact(null);
      fetchContacts();
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditingContact({ ...editingContact!, [e.target.name]: e.target.value });
  };

  return (
    <Container className="mt-4">
      <Row className="align-items-center mb-3">
        <Col xs={12} md="auto" className="mt-2 mt-md-0">
          <Button
            onClick={() => {
              setEditingContact({ id: 0, name: "", phone: "" });
              setShowModal(true);
            }}
          >
            + Добавить контакт
          </Button>
        </Col>
      </Row>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Имя</th>
            <th>Телефон</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((s) => (
            <tr key={s.id}>
              <td>{s.name}</td>
              <td>{s.phone}</td>
              <td>
                <Button
                  variant="warning"
                  size="sm"
                  className="me-2 my-2"
                  onClick={() => {
                    setEditingContact(s);
                    setShowModal(true);
                  }}
                >
                  Изменить
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDelete(s.id)}
                >
                  Удалить
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal */}

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            {editingContact?.id ? "Редактировать" : "Добавить"} студента
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-2">
              <Form.Label>Имя</Form.Label>
              <Form.Control
                name="name"
                value={editingContact?.name || ""}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Phone</Form.Label>
              <Form.Control
                name="phone"
                value={editingContact?.phone || ""}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Отмена
          </Button>
          <Button onClick={handleSave}>Сохранить</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
