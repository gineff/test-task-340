import { TaskRequestParams } from '@/app/react-hook-form/types';
import { Controller, useFormContext } from 'react-hook-form';
import TextField from '../text-field';

export const Token = () => {
  const { control } = useFormContext<TaskRequestParams>();

  return (
    <>
      <Controller
        name={'token'}
        control={control}
        rules={{
          required: 'Поле обязательно',
        }}
        render={({ field, fieldState }) => (
          <TextField label="Токен" errorMessage={fieldState.error?.message} {...field} />
        )}
      />
    </>
  );
};
