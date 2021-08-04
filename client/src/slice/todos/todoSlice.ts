import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ITodo } from '../../interface/todo.interface';


export const apiSlice = createApi({
    reducerPath:'api',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://nest-todo.herokuapp.com'
    }),
    tagTypes:['ITodo'],
    endpoints(builder){
        return {
            fetchTodos: builder.query<ITodo[], number | void>({
                query(){
                    return '/tasks';
                },
                providesTags:(result, error,arg)=>  result ? [...result.map(({_id})=> ({type:'ITodo' as const, _id})),'ITodo']: ['ITodo'],
            }),
            addTodo: builder.mutation<ITodo, Partial<ITodo>>({
                query:({...todo})=>({
                    url:'/tasks',
                    method:'POST',
                    body: todo
                }),
                invalidatesTags:['ITodo']
            }),
            editTodo: builder.mutation<ITodo, Partial<ITodo>>({
                query(body){
                    const { _id } = body;
                    return {
                        url:`/tasks/${_id}`,
                        method:'PUT'
                    }
                },
                invalidatesTags:(result,error,{ _id } ) => [{type:'ITodo', _id}]
            }),
            deleteTodo: builder.mutation<{success: boolean; id:string}, string>({
                query(id) {
                    return {
                      url: `tasks/${id}`,
                      method: 'DELETE',
                    }
                  },
                  invalidatesTags:['ITodo']
            })
        }
    }
});

export const { useFetchTodosQuery,useAddTodoMutation,useDeleteTodoMutation,useEditTodoMutation } = apiSlice;