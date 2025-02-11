import { FC } from 'react';
import { TagsItem } from './tags-item';

interface TagsListProps {
  tags: string[];
}
export const TagsList: FC<TagsListProps> = ({ tags }) => {
  return (
    <div className="relative bottom-0">
      {tags.map((tag, index) => (
        <TagsItem key={tag} tag={tag} index={index} />
      ))}
    </div>
  );
};
