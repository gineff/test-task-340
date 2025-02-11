import { FC } from 'react';
import { TaskRequestParams } from '@/app/react-hook-form/page';
import { Controller, useFormContext } from 'react-hook-form';
import TextField from '../text-field';

interface DeadlineProps {
  parentTheme?: 'light' | 'dark';
  deadline_key: 'deadline_days' | 'rules.deadline_days'
}

export const Deadline: FC<DeadlineProps> = ({ parentTheme = 'light', deadline_key }) => {
  const { control, trigger } = useFormContext<TaskRequestParams>();

  return (
    <>
      <Controller
        name={deadline_key}
        control={control}
        rules={{
          required: '1 и более дней',
        }}
        render={({ field, fieldState }) => (
          <TextField
            type="number"
            label="Дедлайн (дней)"
            min={0}
            errorMessage={fieldState.error?.message}
            {...field}
            parentTheme={parentTheme}
            onChange={(e) => {
              field.onChange(e);
              trigger(deadline_key);
            }}
          />
        )}
      />
    </>
  );
};
