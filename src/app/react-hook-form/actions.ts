import { TaskRequestParams } from './types';

const normalizeData = (data) => {
  const fields = ['budget_from', 'budget_to', 'rules.budget_from', 'rules.budget_to']
}

export const createTask = async (data: TaskRequestParams) => {
  console.log(data);
  return await new Promise((res) => setTimeout(res, 3000));
  //throw new Error('error 12');
};
