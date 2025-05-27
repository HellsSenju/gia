import axios from "axios";
import type { Contact } from "./models.ts";

export const getStudents = async (
  _page = 1,
  _limit = 5,
  _order = "asc",
  _search = ""
) => {
  return await axios.get(`http://localhost:3000/students`, {
    params: {
      _page,
      _limit,
      _sort: "name",
      _order,
      name_like: _search ? _search : undefined,
    },
  });
};

export const deleteStudent = async (id: number): Promise<void> => {
  return axios.delete(`http://localhost:3000/students/${id}`);
};

export const addStudent = async (student: Contact): Promise<void> => {
  return await axios.post("http://localhost:3000/students", {
    name: student.name,
    email: student.phone,
  });
};

export const updateStudent = async (
  id: number,
  student: Contact
): Promise<void> => {
  await axios.patch(`http://localhost:3000/students/${id}`, {
    name: student.name,
    email: student.phone,
  });
};
