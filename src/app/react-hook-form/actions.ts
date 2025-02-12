import { TaskRequestParams } from './types';

export const createTask = async (data: TaskRequestParams) => {
  console.log(data);
  await new Promise((res) => setTimeout(res, 3000));
  //throw new Error('error 12');
};
