import { TaskRequestParams } from '@/app/react-hook-form/types';
import { Controller, useFormContext } from 'react-hook-form';
import TextField from '@/components/text-field';
import { Budget } from '@/components/budget';
import { TagsBlock } from '@/components/tags-block';
import { Deadline } from '@/components/deadline';

export const LeftSide = () => {
  const { control } = useFormContext<TaskRequestParams>();

  return (
    <div className="flex-col p-8">
      <div className="flex gap-4 justify-between">
        <h2 className="text-2xl font-bold mb-2">Новая задача</h2>
        <Controller
          name={'all_auto_responses'}
          control={control}
          render={({ field }) => (
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={field.value}
                onChange={(e) => field.onChange(e.target.checked)}
              />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
              <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                All auto response
              </span>
            </label>
          )}
        />
      </div>

      <div>
        <Controller
          name={'title'}
          control={control}
          rules={{
            required: 'Это поле обязательно',
            minLength: {
              value: 3,
              message: 'Минимум 3 символа',
            },
          }}
          render={({ field, fieldState }) => (
            <TextField
              label="Название задачи"
              errorMessage={fieldState.error?.message}
              {...field}
            />
          )}
        />

        <Controller
          name={'description'}
          control={control}
          rules={{
            required: 'Это поле обязательно',
            minLength: {
              value: 3,
              message: 'Минимум 3 символа',
            },
          }}
          render={({ field, fieldState }) => (
            <TextField
              label="Описание задачи"
              type="textarea"
              errorMessage={fieldState.error?.message}
              {...field}
            />
          )}
        />

        <Budget minKey="budget_from" maxKey="budget_to" />

        <TagsBlock />

        <div className="flex gap-4">
          <Deadline deadline_key="deadline_days" />

          <Controller
            name={'reminds'}
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                label="Количество напоминаний"
                type="number"
                min={0}
                errorMessage={fieldState.error?.message}
                {...field}
              />
            )}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Создать задачу
        </button>
      </div>
    </div>
  );
};
