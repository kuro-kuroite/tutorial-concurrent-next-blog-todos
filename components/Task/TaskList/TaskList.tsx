import Link from 'next/link';
import React, { useState, VFC } from 'react';
import useSWR from 'swr';

import { useTask } from '../../../lib/tasks/tasks';
import { Props as TaskFormProps, TaskForm } from '../TaskForm/TaskForm';
import { Props as TaskItemProps, TaskItem } from '../TaskItem/TaskItem';

export const PureTaskList: VFC<PureProps> = ({
  button,
  onDeleteTaskClick,
  onEditTaskClick,
  onTaskChange,
  onTaskSubmit,
  tasks,
  title,
}) => (
  <>
    <TaskForm {...{ button, onTaskChange, onTaskSubmit, title }} />
    <ul className="m-10 p-0 space-y-1 list-none">
      {tasks &&
        tasks.map(({ id, title }) => (
          <TaskItem
            key={id}
            {...{
              id,
              onDeleteTaskClick: onDeleteTaskClick(id),
              onEditTaskClick: onEditTaskClick(id),
              title,
            }}
          />
        ))}
    </ul>
    <Link href="/main/">
      <a className="flex w-max items-center cursor-pointer mt-12 text-blue-500 border-solid border-0 border-b border-blue-500">
        <svg
          className="w-6 h-6 mr-3"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
            fillRule="evenodd"
          ></path>
        </svg>
        <span>Back to main</span>
      </a>
    </Link>
  </>
);

export const TaskList: VFC<Props> = () => {
  const { createTask, deleteTask, fetchAllTasksData, updateTask } = useTask();
  const { data, mutate } = useSWR<PureProps['tasks']>(
    'tasks',
    fetchAllTasksData,
    {
      suspense: true,
    }
  );
  // HACK: Suspense を使用しているため
  const tasks = data as NonNullable<typeof data>;
  const [task, setTask] = useState('');
  const [taskStatus, setTaskStatus] = useState<
    | { status: 'create'; taskId: undefined }
    | { status: Exclude<PureProps['button'], 'create'>; taskId: number }
  >({ status: 'create', taskId: undefined });

  const handleDeleteTaskClick: PureProps['onDeleteTaskClick'] = (id) => async (
    event
  ) => {
    event.preventDefault();

    await deleteTask(id);
    await mutate();
    setTaskStatus({ status: 'create', taskId: undefined });
  };

  const handleEditTaskClick: PureProps['onEditTaskClick'] = (id) => (event) => {
    event.preventDefault();

    setTaskStatus({ status: 'update', taskId: id });

    const editTask = tasks.find((task) => task.id === id);
    setTask(editTask?.title ?? '');
  };

  const handleTaskChange: PureProps['onTaskChange'] = (event) => {
    event.preventDefault();

    if (event.target.value === '') {
      setTaskStatus({ status: 'create', taskId: undefined });
    }

    setTask(event.target.value);
  };

  const handleTaskSubmit: PureProps['onTaskSubmit'] =
    taskStatus.status === 'create'
      ? async (event) => {
          event.preventDefault();

          await createTask(task);
          await mutate();
          setTask('');
        }
      : async (event) => {
          event.preventDefault();

          await updateTask(task, taskStatus.taskId);
          await mutate();
          setTaskStatus({ status: 'create', taskId: undefined });
          setTask('');
        };
  const button = taskStatus.status === 'create' ? 'create' : 'update';

  return (
    <PureTaskList
      {...{
        button,
        onDeleteTaskClick: handleDeleteTaskClick,
        onEditTaskClick: handleEditTaskClick,
        onTaskChange: handleTaskChange,
        onTaskSubmit: handleTaskSubmit,
        tasks,
        title: task,
      }}
    />
  );
};

export type PureProps = Omit<
  TaskFormProps & {
    onDeleteTaskClick: (id: number) => TaskItemProps['onDeleteTaskClick'];
    onEditTaskClick: (id: number) => TaskItemProps['onEditTaskClick'];
  } & {
    tasks: {
      [P in keyof Omit<
        TaskItemProps,
        'onDeleteTaskClick' | 'onEditTaskClick'
      >]: TaskItemProps[P];
    }[];
  },
  ''
>;

export type Props = Record<string, unknown>;
