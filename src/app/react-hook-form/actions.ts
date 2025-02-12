import { toSearchParams } from '@/utils/toSearchParams';
import { TaskRequestParams } from './types';
import { API_PATH } from './constants';
import { normalizeFromData } from './helpers';

export const createTask = async (data: TaskRequestParams) => {
  try {
    const searchParams = toSearchParams(normalizeFromData(data));
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
      throw new Error(
        `Ошибка запроса: ${res.status} ${res.statusText || result.error || 'Неопределенная ошибка'}`
      );
    }
    return result;
  } catch (err) {
    throw err;
  }
};
