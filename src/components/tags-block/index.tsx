import { TaskRequestParams } from '@/app/react-hook-form/page';
import { useFormContext } from 'react-hook-form';
import TextField from '../text-field';
import { useState } from 'react';
import { TagsList } from './tags-list';

export const TagsBlock = () => {
  const [inputValue, setInputValue] = useState('');
  const { setValue, watch } = useFormContext<TaskRequestParams>();
  const tags = watch('tags');

  const handleAddTag = () => {
    if (inputValue.trim() === '') return;
    setValue('tags', [...tags, inputValue.trim()]);
    setInputValue('');
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAddTag();
    }
  };

  return (
    <>
      <TextField
        name="tagsAdder"
        label="Теги"
        onChange={(value) => setInputValue(value)}
        value={inputValue}
        onKeyUp={handleKeyUp}
        placeholder="Введите тег"
        render={() => (
          <>
            <button
              className="absolute end-2.5 top-0 text-3xl text-gray-700 hover:text-blue-700"
              onClick={(e) => {
                e.preventDefault();
                handleAddTag();
              }}
            >
              ↵
            </button>
            <TagsList tags={tags} />
          </>
        )}
      />
    </>
  );
};
