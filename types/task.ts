export type TaskParams = {
  id: string;
};

export type TaskList = {
  tasks: {
    id: number;
    title: string;
  }[];
};

export type TaskIds = {
  tasks: {
    id: number;
  }[];
};

export type TaskById = {
  task: Task;
};

export type Task = {
  id: number;
  title: string;
};

export type TaskError = Error;
