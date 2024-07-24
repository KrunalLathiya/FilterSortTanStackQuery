// src/pages/PostsPage.jsx

import { useState } from 'react';
import { Box } from '@mui/material';
import FilterSort from '../components/FilterSort';
import DataTable from '../components/DataTable';
import { usePosts } from '../hooks/usePosts';

const PostsPage = () => {
    const [filter, setFilter] = useState('');
    const [sort, setSort] = useState('asc');
    const { data, isLoading, error } = usePosts(filter, sort);

    return (
        <Box>
            <FilterSort filter={filter} setFilter={setFilter} sort={sort} setSort={setSort} />
            <DataTable data={data} isLoading={isLoading} error={error} />
        </Box>
    );
};

export default PostsPage;
