export interface Task {
  _id: string;
  title: string;
  description: string;
  status: string;
  priority: 'low'| 'medium'| 'high';
  dueDate: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
