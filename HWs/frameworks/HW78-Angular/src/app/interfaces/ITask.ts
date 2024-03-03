export interface ITask {
  id: String;
  title: String;
  date: Date;
  status: 'To Do' | 'In Progress' | 'Done';
}
