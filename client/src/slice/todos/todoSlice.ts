import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ITodo } from '../../interface/todo.interface';


export const apiSlice = createApi({
    reducerPath:'api',
    baseQuery:fetchBaseQuery({
        baseUrl:'http://localhost:5000'
    }),
    endpoints(builder){
        return {
            fetchTodos: builder.query<ITodo[], number | void>({
                query(){
                    return '/todos';
                }
            })
        }
    }
});

export const { useFetchTodosQuery } = apiSlice;