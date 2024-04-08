export interface ITask {
  id: number;
  description: string;
  isCompleted: boolean;
  isEdit?: boolean;
  user?: any;
}
