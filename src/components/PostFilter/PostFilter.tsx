
import React from 'react';
import TheInput from '../UI/input/TheInput';
import TheSelect from '../UI/select/TheSelect';
interface Filter {
    sort: string;
    query: string;
}
interface PostFilterProps {
    filter: Filter;
    setFilter: (newFilter: Filter) => void;
}
const PostFilter: React.FC<PostFilterProps> = ({ filter, setFilter }) => {
    return (
        <div>
            <TheInput
                placeholder="Поиск"
                value={filter.query}
                onChange={e => setFilter({ ...filter, query: e.target.value })}
            />
            <TheSelect 
                value={filter.sort}
                onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
                defaultValue="Сортировка"
                options={[
                    { value: 'title', name: 'по названию' },
                    { value: 'body', name: 'по описанию' }
                ]}
            />
        </div>
    );
};
export default PostFilter;