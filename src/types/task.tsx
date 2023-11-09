export interface TaskType {
    title: string;
    from: string;
    urgent?: boolean;
    inprogress?: boolean;
    completed?: boolean;
}