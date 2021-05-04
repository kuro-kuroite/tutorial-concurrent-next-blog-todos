import React, { ChangeEventHandler, FC, FormEventHandler } from 'react';

import { Props as TaskItemProps } from '../TaskItem/TaskItem';

export const PureTaskForm: FC<PureProps> = ({
  button,
  onTaskChange,
  onTaskSubmit,
  title,
}) => (
  <>
    <div>
      <form
        className="flex space-x-2 items-center text-white"
        onSubmit={onTaskSubmit}
      >
        <input
          className="appearance-none leading-none text-base px-2 py-1 text-black"
          onChange={onTaskChange}
          type="text"
          value={title}
        />
        <input
          className="appearance-none leading-none text-base px-2 py-1 bg-gray-500 hover:bg-gray-600 rounded uppercase disabled:text-gray-400"
          disabled={!title}
          type="submit"
          value={button}
        />
      </form>
    </div>
  </>
);

export const TaskForm: FC<Props> = ({
  button,
  onTaskChange,
  onTaskSubmit,
  title,
}) => {
  return <PureTaskForm {...{ button, onTaskChange, onTaskSubmit, title }} />;
};

export type PureProps = Props;

export type Props = Omit<
  Pick<TaskItemProps, 'title'> & {
    button: 'update' | 'create';
    onTaskChange: ChangeEventHandler<HTMLInputElement>;
    onTaskSubmit: FormEventHandler<HTMLFormElement>;
  },
  ''
>;
