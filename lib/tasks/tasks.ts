import { useContext } from 'react';

import { Props, TaskContext } from './TaskProvider';

export const useTask: Props['useTask'] = () =>
  useContext(TaskContext).useTask();

export const useTaskContext = (): Props => useContext(TaskContext);
