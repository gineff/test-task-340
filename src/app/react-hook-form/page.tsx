'use client';
import { useForm, FormProvider } from 'react-hook-form';
import { LeftSide } from './left-side';
import { RightSide } from './right-side';
import { initialFormValues } from './constants';
import { TaskRequestParams } from './types';


export default function ResetPasswordForm() {
  const methods = useForm<TaskRequestParams>({
    defaultValues: initialFormValues,
    mode: 'onSubmit',
  });

  const onSubmit = (data: TaskRequestParams) => {
    console.log(data);
  };

  return (
    <div className="flex min-h-screen justify-center items-center">
      <FormProvider {...methods}>
        <form
          className="w-full max-w-4xl flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden"
          onSubmit={(event) => void methods.handleSubmit(onSubmit)(event)}
        >
          <div className="md:w-1/2 ">
            <LeftSide />
          </div>
          <div className="md:w-1/2 ">
            <RightSide />
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
