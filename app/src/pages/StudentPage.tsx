import {useEffect, useState} from 'react'
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
} from 'react-bootstrap'
import {addStudent, deleteStudent, getStudents, updateStudent} from "../utils/studentApi.ts";
import type {Student} from "../utils/models.ts";

const PAGE_SIZE = 5

export default function StudentPage() {
    const [students, setStudents] = useState<Student[]>([])
    const [search, setSearch] = useState('')
    const [sortAsc, setSortAsc] = useState(true)
    const [page, setPage] = useState(1)
    const [totalCount, setTotalCount] = useState(0)

    const [showModal, setShowModal] = useState(false)
    const [editingStudent, setEditingStudent] = useState<Student | null>(null)

    const totalPages = Math.ceil(totalCount / PAGE_SIZE)

    const fetchStudents = async () => {
        getStudents(page, PAGE_SIZE, sortAsc? "asc":"desc", search)
            .then(resp => {
                setStudents(resp.data)
                setTotalCount(parseInt(resp.headers['x-total-count'], 0))
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        fetchStudents()
    }, [page, search, sortAsc])

    const handleDelete = async (id: number) => {
        deleteStudent(id)
            .then(() => {
                fetchStudents()
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleSave = async () => {
        if (!editingStudent) return

        if (editingStudent.id) {
            updateStudent(editingStudent.id, editingStudent)
                .then(() => {
                    setShowModal(false)
                    setEditingStudent(null)
                    fetchStudents()
                })
                .catch(err => {
                    console.log(err)
                })
            return
        }

        addStudent(editingStudent)
            .then(() => {
                setShowModal(false)
                setEditingStudent(null)
                fetchStudents()
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditingStudent({...editingStudent!, [e.target.name]: e.target.value})
    }

    const paginationItems = []
    for (let i = 1; i <= totalPages; i++) {
        paginationItems.push(
            <Pagination.Item
                key={i}
                active={i === page}
                onClick={() => setPage(i)}
            >
                {i}
            </Pagination.Item>,
        )
    }

    return (
        <Container className="mt-4">
            <Row className="align-items-center mb-3">
                <Col xs={12} md={6}>
                    <InputGroup>
                        <Form.Control
                            placeholder="Поиск по имени"
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value)
                                setPage(1)
                            }}
                        />
                    </InputGroup>
                </Col>
                <Col xs={12} md="auto" className="mt-2 mt-md-0">
                    <Button onClick={() => {
                        setEditingStudent({id: 0, name: '', email: ''})
                        setShowModal(true)
                    }}>
                        + Добавить студента
                    </Button>
                </Col>
            </Row>
            <Pagination>{paginationItems}</Pagination>

            <Table striped bordered hover responsive>
                <thead>
                <tr>
                    <th
                        style={{cursor: 'pointer'}}
                        onClick={() => setSortAsc(!sortAsc)}
                    >
                        Имя {sortAsc ? '↑' : '↓'}
                    </th>
                    <th>Email</th>
                    <th>Действия</th>
                </tr>
                </thead>
                <tbody>
                {students.map((s) => (
                    <tr key={s.id}>
                        <td>{s.name}</td>
                        <td>{s.email}</td>
                        <td>
                            <Button
                                variant="warning"
                                size="sm"
                                className="me-2 my-2"
                                onClick={() => {
                                    setEditingStudent(s)
                                    setShowModal(true)
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
                        {editingStudent?.id ? 'Редактировать' : 'Добавить'} студента
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-2">
                            <Form.Label>Имя</Form.Label>
                            <Form.Control
                                name="name"
                                value={editingStudent?.name || ''}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                name="email"
                                value={editingStudent?.email || ''}
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
    )
}
