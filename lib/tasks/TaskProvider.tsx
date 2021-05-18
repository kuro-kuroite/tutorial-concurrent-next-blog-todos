import React, { createContext, FC } from 'react';

import { TaskById, TaskList, TaskParams } from '../../types/task';

export const TaskContext = createContext<Props>({} as Props);

export const TaskProvider: FC<Props> = ({ children, useTask }) => (
  <TaskContext.Provider value={{ useTask }}>{children}</TaskContext.Provider>
);

export type Props = {
  useTask: () => {
    createTask: (title: string) => Promise<void>;
    deleteTask: (id: number) => Promise<void>;
    fetchAllTasksData: () => Promise<TaskList['tasks']>;
    fetchTaskData: (id: TaskParams['id']) => Promise<TaskById['task']>;
    updateTask: (title: string, id: number) => Promise<void>;
  };
};
