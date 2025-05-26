export type Student = {
    id: number
    name: string
    email: string
}

export type Subject = {
    id: number,
    title: string,
    description: string
}

export type Grade = {
    id: number;
    studentId: number;
    subjectId: number;
    value: number;
}
