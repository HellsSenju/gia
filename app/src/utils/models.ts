export type Student = {
    id: number
    name: string
    email: string
}

export type StudentPromise ={
    data: Student[],
    first: number,
    items: number,
    last: number,
    next: number,
    pages:number,
    prev: number | null
}

export type Subject = {
    id: number,
    title: string,
    description: string
}

export type SubjectPromise = {
    data: Subject[];
    first: number,
    items: number,
    last: number,
    next: number,
    pages:number,
    prev: number | null
}