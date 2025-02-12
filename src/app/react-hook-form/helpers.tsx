import { TaskRequestParams } from '@/app/react-hook-form/types';

export const normalizeFromData = (data: TaskRequestParams) => {
  return Object.assign(data, {
    rules: Object.fromEntries(Object.entries(data.rules).map(([key, value]) => [key, +value])),
  });
};
