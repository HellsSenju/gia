import axios from 'axios';
import type {Student} from "./models.ts";


export const getStudents = async (_page = 1, _limit = 5, _order = 'asc', _search  = "") => {
    return await axios.get(`http://localhost:3000/students`, {
        params: {
            _page,
            _limit,
            _sort: "name",
            _order,
            name_like: _search ? _search : undefined ,
        },
    });
}

export const deleteStudent = async (id: number): Promise<void> => {
    return  axios.delete(`http://localhost:3000/students/${id}`)
}

export const addStudent = async (student: Student): Promise<void> => {
     return await axios.post("http://localhost:3000/students", {
         name: student.name,
         email: student.email
     })
}

export const updateStudent = async (id: number, student: Student): Promise<void> => {
    await axios.patch(`http://localhost:3000/students/${id}`, {
        name: student.name,
        email: student.email
    });
};