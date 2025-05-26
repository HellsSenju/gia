import { useEffect, useState } from "react";
import axios from "axios";
import { Table, Button, Form, Modal } from "react-bootstrap";
import type {Grade, Student, Subject} from "../utils/models.ts";


export const GradesPage = () => {
    const [grades, setGrades] = useState<Grade[]>([]);
    const [students, setStudents] = useState<Student[]>([]);
    const [subjects, setSubjects] = useState<Subject[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedStudentId, setSelectedStudentId] = useState<number | "">("");
    const [newGrade, setNewGrade] = useState<Omit<Grade, "id">>({
        studentId: 0,
        subjectId: 0,
        value: 0,
    });

    const fetchGrades = async () => {
        const res = await axios.get("http://localhost:3000/grades");
        setGrades(res.data);
    };

    const fetchStudents = async () => {
        const res = await axios.get("http://localhost:3000/students");
        setStudents(res.data);
    };

    const fetchSubjects = async () => {
        const res = await axios.get("http://localhost:3000/subjects");
        setSubjects(res.data);
    };

    const handleAddGrade = async () => {
        await axios.post("http://localhost:3000/grades", {
            ...newGrade
        });
        setShowModal(false);
        setNewGrade({ studentId: 0, subjectId: 0, value: 0 });
        fetchGrades();
    };

    const handleDelete = async (id: number) => {
        await axios.delete(`http://localhost:3000/grades/${id}`);
        fetchGrades();
    };

    useEffect(() => {
        fetchGrades();
        fetchStudents();
        fetchSubjects();
    }, []);

    const getStudentName = (id: number) => {
        return students.find((s) => s.id === id)?.name || "—";
    };

    const getSubjectTitle = (id: number) => {
        return subjects.find((s) => s.id === id)?.title || "—";
    };

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2>Оценки</h2>
                <Button onClick={() => setShowModal(true)}>Добавить оценку</Button>
            </div>

            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Студент</th>
                    <th>Предмет</th>
                    <th>Оценка</th>
                    <th>Действия</th>
                </tr>
                </thead>
                <tbody>
                {grades.map((grade) => (
                    <tr key={grade.id}>
                        <td>{getStudentName(grade.studentId)}</td>
                        <td>{getSubjectTitle(grade.subjectId)}</td>
                        <td>{grade.value}</td>
                        <td>
                            <Button
                                variant="danger"
                                size="sm"
                                onClick={() => handleDelete(grade.id)}
                            >
                                Удалить
                            </Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>

            {/* Модальное окно */}
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Добавить оценку</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Студент</Form.Label>
                            <Form.Select
                                value={newGrade.studentId}
                                onChange={(e) =>
                                    setNewGrade({ ...newGrade, studentId: e.target.value })
                                }
                            >
                                <option value="">Выберите студента</option>
                                {students.map((student) => (
                                    <option key={student.id} value={student.id}>
                                        {student.name}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Предмет</Form.Label>
                            <Form.Select
                                value={newGrade.subjectId}
                                onChange={(e) =>
                                    setNewGrade({ ...newGrade, subjectId: e.target.value })
                                }
                            >
                                <option value="">Выберите предмет</option>
                                {subjects.map((subject) => (
                                    <option key={subject.id} value={subject.id}>
                                        {subject.title}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Оценка</Form.Label>
                            <Form.Control
                                type="number"
                                value={newGrade.value}
                                onChange={(e) =>
                                    setNewGrade({ ...newGrade, value: Number(e.target.value) })
                                }
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Отмена
                    </Button>
                    <Button variant="primary" onClick={handleAddGrade}>
                        Сохранить
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

