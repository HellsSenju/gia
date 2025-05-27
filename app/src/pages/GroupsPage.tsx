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
import axios from "axios";

import type { Group } from "../utils/models.ts";

export default function GroupsPage() {
  const [groups, setGroups] = useState<Group[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editingGroup, setEditingGroup] = useState<Group | null>(null);

  const fetchGroups = async () => {
    try {
      const resp = await axios.get("http://localhost:3000/groups");
      setGroups(resp.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchGroups();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3000/groups/${id}`);
      fetchGroups();
    } catch (err) {
      console.error(err);
    }
  };

  const handleSave = async () => {
    if (!editingGroup) return;

    try {
      if (editingGroup.id) {
        await axios.patch(`http://localhost:3000/groups/${editingGroup.id}`, {
          name: editingGroup.name,
        });
      } else {
        await axios.post("http://localhost:3000/groups", {
          name: editingGroup.name,
        });
      }

      setShowModal(false);
      setEditingGroup(null);
      fetchGroups();
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditingGroup({ ...editingGroup!, [e.target.name]: e.target.value });
  };

  return (
    <Container className="mt-4">
      <Row className="align-items-center mb-3">
        <Col xs={12} md="auto" className="mt-2 mt-md-0">
          <Button
            onClick={() => {
              setEditingGroup({ id: 0, name: "" });
              setShowModal(true);
            }}
          >
            + Добавить группу
          </Button>
        </Col>
      </Row>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Название группы</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {groups.map((group) => (
            <tr key={group.id}>
              <td>{group.name}</td>
              <td>
                <Button
                  variant="warning"
                  size="sm"
                  className="me-2 my-2"
                  onClick={() => {
                    setEditingGroup(group);
                    setShowModal(true);
                  }}
                >
                  Изменить
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDelete(group.id)}
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
            {editingGroup?.id ? "Редактировать группу" : "Добавить группу"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-2">
              <Form.Label>Название</Form.Label>
              <Form.Control
                name="name"
                value={editingGroup?.name || ""}
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
