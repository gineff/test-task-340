'use client';
import { useForm, FormProvider } from 'react-hook-form';
import { LeftSide } from './left-side';
import { RightSide } from './right-side';
import { createTask } from './actions';
import { initialFormValues } from './constants';
import { TaskRequestParams } from './types';
import { startTransition, useActionState } from 'react';
import { useSnackbar } from '@/hooks/useSnackbar';
import { useToken } from '@/hooks/useToken';

export default function ReactHookForm() {
  const { token, setToken } = useToken();
  const { Snackbar, showSnackbar } = useSnackbar();

  const methods = useForm<TaskRequestParams>({
    defaultValues: { ...initialFormValues, token },
    mode: 'onSubmit',
  });

  const allAutoResponses = methods.watch('all_auto_responses');

  const [, formAction, isPending] = useActionState(
    async (_prevState: string | null, formData: TaskRequestParams) => {
      try {
        await createTask(
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          allAutoResponses ? (({ rules, ...withoutRules }) => withoutRules)(formData) : formData
        );
        // clear form
        setToken(formData.token);
        methods.reset({
          ...initialFormValues,
          token: formData.token,
          all_auto_responses: formData.all_auto_responses,
        });
        showSnackbar({ message: 'Задача успешно опубликована', type: 'success' });
        return null;
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Неизвестная ошибка';
        showSnackbar({ message, type: 'error' });
        return message;
      }
    },
    null
  );

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
          <div className={`md:w-${allAutoResponses ? 'full' : '1/2'}`}>
            <LeftSide isPending={isPending} />
          </div>
          {!allAutoResponses && (
            <div className={'md:w-1/2'}>
              <RightSide />
            </div>
          )}
        </form>
      </FormProvider>
      <Snackbar />
    </div>
  );
}
