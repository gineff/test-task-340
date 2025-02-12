'use client';
import { useForm, FormProvider } from 'react-hook-form';
import { LeftSide } from './left-side';
import { RightSide } from './right-side';
import { createTask } from './actions';
import { initialFormValues } from './constants';
import { TaskRequestParams } from './types';
import { startTransition, useActionState, useEffect } from 'react';



export default function ReactHookForm() {
  const methods = useForm<TaskRequestParams>({
    defaultValues: initialFormValues,
    mode: 'onSubmit',
  });

  const [error, formAction, isPending] = useActionState(
    async (prevState: string | null, formData: TaskRequestParams) => {
      try {
        await createTask(formData);
        // clear form
        methods.reset(initialFormValues);
        return null;
      } catch (err) {
        return err instanceof Error ? err.message : 'Неизвестная ошибка';
      }
    },
    null
  );

  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);

  const onSubmit = methods.handleSubmit((data) => {
    startTransition(() => {
      formAction(data);
    });
  });

  return (
    <div className="flex min-h-screen justify-center items-center">
      <FormProvider {...methods}>
        <form
          className="w-full max-w-4xl flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden"
          onSubmit={onSubmit}
        >
          <div className="md:w-1/2 ">
            <LeftSide isPending={isPending} />
          </div>
          <div className="md:w-1/2 ">
            <RightSide />
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
