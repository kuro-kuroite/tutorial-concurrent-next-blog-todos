import type { Task, TaskById, TaskList, TaskParams } from '../../types/task';
import { useFirebaseContext } from '../firebase/firebase';
import { Props } from './TaskProvider';

export const useTask: Props['useTask'] = () => {
  const { auth, db, setTimeStamp } = useFirebaseContext();

  const fetchUid = async () => {
    const delayFetchUid = (delay: number): Promise<string> => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const userId = auth.currentUser?.uid ?? '';

          userId === '' ? reject(userId) : resolve(userId);
        }, delay);
      });
    };

    return Promise.any([
      delayFetchUid(0),
      delayFetchUid(1500),
    ]).catch((error: AggregateError) => error.errors.join(''));
  };

  const fetchAllTasksData = async (): Promise<TaskList['tasks']> => {
    // HACK: auth は、browser でのみ動作するため
    if (globalThis.window === undefined) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      return;
    }

    // HACK: url 遷移で、auth の読み込みに時間がかかるため
    const userId = await fetchUid();

    if (userId === '') {
      throw 'No user';
    }

    // FYI: https://stackoverflow.com/a/66064876
    const querySnapshot = await db
      .collection('tasks')
      .where('userId', '==', userId)
      .orderBy('id', 'desc')
      .get();
    const tasks: TaskList['tasks'] = querySnapshot.docs.map((doc) => ({
      id: doc.data().id as number,
      title: doc.data().title as string,
    }));

    if (!tasks) {
      throw 'No tasks';
    }

    return tasks;
  };

  const fetchTaskData = async (
    id: TaskParams['id']
  ): Promise<TaskById['task']> => {
    // HACK: auth は、browser でのみ動作するため
    if (globalThis.window === undefined) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      return;
    }

    // HACK: url 遷移で、auth の読み込みに時間がかかるため
    const userId = await fetchUid();

    if (userId === '') {
      throw 'No user';
    }

    // FYI: https://stackoverflow.com/a/66064876
    const querySnapshot = await db
      .collection('tasks')
      .where('userId', '==', userId)
      .where('id', '==', parseInt(id))
      .limit(1)
      .get();
    const task: TaskById['task'] = querySnapshot.docs.map((doc) => ({
      id: doc.data().id as number,
      title: doc.data().title as string,
    }))[0];

    if (!task) {
      throw 'No task';
    }

    return task;
  };

  // TODO: permission error
  const createTask = async (title: string): Promise<void> => {
    const userId = auth.currentUser?.uid ?? '';
    // console.log('id', userId);

    if (userId === '') {
      throw 'No user';
    }

    const querySnapshot = await db
      .collection('tasks')
      .where('userId', '==', userId)
      .orderBy('id', 'desc')
      .limit(1)
      .get();
    const newId: Task['id'] =
      querySnapshot.docs.map((doc) => {
        return (doc.data().id as number) + 1;
      })[0] || 0;

    // console.log(`id: ${newId} title: ${title} 新規作成`);
    await db.collection('tasks').add({
      createdAt: setTimeStamp(),
      id: newId,
      title,
      updatedAt: setTimeStamp(),
      userId,
    });
  };

  const updateTask = async (title: string, id: number): Promise<void> => {
    const userId = auth.currentUser?.uid ?? '';
    // console.log('id', userId);

    if (userId === '') {
      throw 'No user';
    }

    const querySnapshot = await db
      .collection('tasks')
      .where('userId', '==', userId)
      .where('id', '==', id)
      .limit(1)
      .get();
    const docId: string = querySnapshot.docs.map((doc) => {
      return doc.id;
    })[0];

    // console.log(`docId: ${docId} title: ${title} 上書き`);
    await db
      .collection('tasks')
      .doc(docId)
      .update({ title, updatedAt: setTimeStamp() });
  };

  const deleteTask = async (id: number): Promise<void> => {
    const userId = auth.currentUser?.uid ?? '';
    // console.log('id', userId);

    if (userId === '') {
      throw 'No user';
    }

    const querySnapshot = await db
      .collection('tasks')
      .where('userId', '==', userId)
      .where('id', '==', id)
      .limit(1)
      .get();
    const docId: string = querySnapshot.docs.map((doc) => {
      return doc.id;
    })[0];

    // console.log(`docId: ${docId} 削除`);
    await db.collection('tasks').doc(docId).delete();
  };

  return {
    createTask,
    deleteTask,
    fetchAllTasksData,
    fetchTaskData,
    updateTask,
  };
};
