import { TaskRequestParams } from '@/app/react-hook-form/types';
import { Controller, useFormContext } from 'react-hook-form';
import { Budget } from '@/components/budget';
import { Deadline } from '@/components/deadline';
import TextField from '@/components/text-field';

export const RightSide = () => {
  const { control } = useFormContext<TaskRequestParams>();

  return (
    <div className="h-full bg-blue-600 flex flex-col justify-center  p-8">
      <h2 className="text-2xl font-bold mb-2 text-white">⚪ Правила для задачи</h2>

      <div className="flex gap-4">
        <Budget minKey="rules.budget_from" maxKey="rules.budget_to" parentTheme="dark" />
      </div>
      <Deadline parentTheme="dark" deadline_key="rules.deadline_days" />
      <Controller
        name={'rules.qty_freelancers'}
        control={control}
        rules={{
          required: 'Это поле обязательно',
        }}
        render={({ field, fieldState }) => (
          <TextField
            label="Число фрилансеров"
            type='number'
            min={0}
            errorMessage={fieldState.error?.message}
            {...field}
            parentTheme="dark"
          />
        )}
      />
    </div>
  );
};
