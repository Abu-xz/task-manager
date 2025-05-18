export interface TaskData {
    title: string;
    description?: string;
    priority: "low" | "medium" | "high";
    dueDate: string;
}