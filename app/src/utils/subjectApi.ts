// subjectApi.ts
import axios from "axios";
import type { Subject } from "./models.ts";

const API_URL = "http://localhost:3000/subjects";

export const getSubjects = async (
    _page = 1,
    _limit = 5,
    _order = 'asc',
    _search  = ""
) => {
    return await axios.get(API_URL, {
        params: {
            _page,
            _limit,
            _sort: "title",
            _order,
            title_like: _search ? _search : undefined ,
        },
    });
};

export const deleteSubject = async (id: number): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`);
};

export const addSubject = async (subject: Subject): Promise<void> => {
    await axios.post(API_URL, {
        title: subject.title,
        description: subject.description,
    });
};

export const updateSubject = async (
    id: number,
    subject: Subject
): Promise<void> => {
    await axios.patch(`${API_URL}/${id}`, {
        title: subject.title,
        description: subject.description,
    });
};
