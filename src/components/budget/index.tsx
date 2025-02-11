import { TaskRequestParams } from '@/app/react-hook-form/types';
import { Controller, useFormContext } from 'react-hook-form';
import TextField from '../text-field';
import { FC } from 'react';

interface BudgetProps {
  minKey: 'rules.budget_from' | 'budget_from';
  maxKey: 'rules.budget_to' | 'budget_to';
  parentTheme?: 'light' | 'dark';
}

export const Budget: FC<BudgetProps> = ({ minKey, maxKey, parentTheme = 'light' }) => {
  const { control, watch, trigger } = useFormContext<TaskRequestParams>();
  const budgetFromValue = watch(minKey);
  const budgetToValue = watch(maxKey);

  return (
    <div className="relative flex gap-4">
      <Controller
        name={minKey}
        control={control}
        rules={{
          required: 'Это поле обязательно',
          pattern: {
            value: /^[0-9]+$/,
            message: 'Введите корректное число',
          },
          validate: (value) =>
            budgetToValue === '' ||
            +value <= +budgetToValue ||
            'Минимальный бюджет не может быть больше максимального',
        }}
        render={({ field, fieldState }) => (
          <TextField
            placeholder="От"
            type="number"
            label="Бюджет задачи"
            errorMessage={fieldState.error?.message}
            {...field}
            min={0}
            onChange={(e) => {
              field.onChange(e);
              trigger(minKey);
            }}
            parentTheme={parentTheme}
          />
        )}
      />

      <Controller
        name={maxKey}
        control={control}
        rules={{
          required: 'Это поле обязательно',
          pattern: {
            value: /^[0-9]+$/,
            message: 'Введите корректное число',
          },
          validate: (value) =>
            +value >= +budgetFromValue || 'Максимальный бюджет не может быть меньше минимального',
        }}
        render={({ field, fieldState }) => (
          <TextField
            placeholder="До"
            type="number"
            label="&nbsp;"
            errorMessage={fieldState.error?.message}
            {...field}
            onChange={(e) => {
              field.onChange(e);
              trigger(maxKey);
            }}
            parentTheme={parentTheme}
          />
        )}
      />
    </div>
  );
};
