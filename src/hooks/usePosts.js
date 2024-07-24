// src/hooks/usePosts.jsx


import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const usePosts = (filter, sort) => {
    return useQuery({
        queryKey: ['posts', filter, sort],
        queryFn: async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {
                    title_like: filter,
                    _sort: 'id',
                    _order: sort,
                },
            });
            return response.data;
        },
    });
};
