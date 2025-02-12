import { TaskRequestParams } from './types';

export const initialFormValues: TaskRequestParams = {
  title: '',
  description: '',
  tags: [],
  budget_from: '',
  budget_to: '',
  deadline: 0,
  reminds: 0,
  all_auto_responses: false,
  token: '',
  rules: {
    budget_from: '',
    budget_to: '',
    deadline_days: 0,
    qty_freelancers: 0,
  },
};

export const API_PATH = 'https://deadlinetaskbot.productlove.ru/api/v1/tasks/client/newhardtask';
