import { useEffect, useState } from "react";
import {
    Table,
    Button,
    Form,
    Modal,
    Pagination,
    InputGroup,
    Container,
    Row,
    Col,
} from "react-bootstrap";
import {
    addSubject,
    deleteSubject,
    getSubjects,
    updateSubject,
} from "../utils/subjectApi.ts";
import type { Subject } from "../utils/models.ts";

const PAGE_SIZE = 5;

export default function SubjectPage() {
    const [subjects, setSubjects] = useState<Subject[]>([]);
    const [search, setSearch] = useState("");
    const [sortAsc, setSortAsc] = useState(true);
    const [page, setPage] = useState(1);
    const [totalCount, setTotalCount] = useState(0);

    const [showModal, setShowModal] = useState(false);
    const [editingSubject, setEditingSubject] = useState<Subject | null>(null);

    const totalPages = Math.ceil(totalCount / PAGE_SIZE);

    const fetchSubjects = async () => {
        // Поиск можно реализовать, например, фильтром по title через q=search, если json-server поддерживает
        getSubjects(page, PAGE_SIZE, sortAsc ? "title" : "-title")
            .then((resp) => {
                setSubjects(resp.data);
                setTotalCount(resp.items);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        fetchSubjects();
    }, [page, search, sortAsc]);

    const handleDelete = async (id: number) => {
        deleteSubject(id)
            .then(() => fetchSubjects())
            .catch((err) => console.log(err));
    };

    const handleSave = async () => {
        if (!editingSubject) return;

        if (editingSubject.id) {
            updateSubject(editingSubject.id, editingSubject)
                .then(() => {
                    setShowModal(false);
                    setEditingSubject(null);
                    fetchSubjects();
                })
                .catch((err) => console.log(err));
            return;
        }

        addSubject(editingSubject)
            .then(() => {
                setShowModal(false);
                setEditingSubject(null);
                fetchSubjects();
            })
            .catch((err) => console.log(err));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setEditingSubject({ ...editingSubject!, [e.target.name]: e.target.value });
    };

    const paginationItems = [];
    for (let i = 1; i <= totalPages; i++) {
        paginationItems.push(
            <Pagination.Item key={i} active={i === page} onClick={() => setPage(i)}>
                {i}
            </Pagination.Item>
        );
    }

    return (
        <Container className="mt-4">
            <Row className="align-items-center mb-3">
                <Col xs={12} md={6}>
                    <InputGroup>
                        <Form.Control
                            placeholder="Поиск по названию"
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value);
                                setPage(1);
                            }}
                        />
                    </InputGroup>
                </Col>
                <Col xs={12} md="auto" className="mt-2 mt-md-0">
                    <Button
                        onClick={() => {
                            setEditingSubject({ id: 0, title: "", description: "" });
                            setShowModal(true);
                        }}
                    >
                        + Добавить предмет
                    </Button>
                </Col>
            </Row>
            <Pagination>{paginationItems}</Pagination>

            <Table striped bordered hover responsive>
                <thead>
                <tr>
                    <th
                        style={{ cursor: "pointer" }}
                        onClick={() => setSortAsc(!sortAsc)}
                    >
                        Название {sortAsc ? "↑" : "↓"}
                    </th>
                    <th>Описание</th>
                    <th>Действия</th>
                </tr>
                </thead>
                <tbody>
                {subjects.map((s) => (
                    <tr key={s.id}>
                        <td>{s.title}</td>
                        <td>{s.description}</td>
                        <td>
                            <Button
                                variant="warning"
                                size="sm"
                                className="me-2 my-2"
                                onClick={() => {
                                    setEditingSubject(s);
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
                        {editingSubject?.id ? "Редактировать" : "Добавить"} предмет
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-2">
                            <Form.Label>Название</Form.Label>
                            <Form.Control
                                name="title"
                                value={editingSubject?.title || ""}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Описание</Form.Label>
                            <Form.Control
                                name="description"
                                value={editingSubject?.description || ""}
                                onChange={handleChange}
                                as="textarea"
                                rows={3}
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
