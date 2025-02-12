import { toSearchParams } from '@/utils/toSearchParams';
import { TaskRequestParams } from './types';
import { API_PATH } from './constants';

export const createTask = async (data: TaskRequestParams) => {
  try {
    const searchParams = toSearchParams(data);
    const url = `${API_PATH}?${searchParams}`;
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await res.json();
    console.log('Ответ сервера:', result);

    if (!res.ok) {
      throw new Error(`Ошибка запроса: ${res.status} ${res.statusText || result.error}`);
    }
    return result;
  } catch (err) {
    throw err;
  }
};
