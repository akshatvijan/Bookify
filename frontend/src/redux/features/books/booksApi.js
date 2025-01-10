import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import getBaseUrl from '../../../utils/baseURL'
const baseQuery = fetchBaseQuery({
    baseUrl : `${getBaseUrl()}/api/books`,
    credentials : 'include' ,
    prepareHeaders : (Headers) => {
        const token  = localStorage.getItem('token');
        if(token){
            Headers.set('Authorization',`Bearer ${token}`);
        }
        return Headers;
    }
})

const booksApi = createApi({
    reducerPath : 'bookApi',
    baseQuery : baseQuery,
    tagTypes : ['Books'],
    endpoints : (builder) => ({
        fetchAllBooks : builder.query({
            query : () => "/",
            providesTags : ["Books"]
        }),
        fetchBookById : builder.query({
            query: (id) => `/${id}`,
            providesTags : (results,error,id) => [{type:"Books",id}],
        }),
        AddBook : builder.mutation({
            query: (newBook) =>({
                url : `/createBook`,
                method :"POST",
                body: newBook
            }),
            invalidatesTags:["Books"]
        }),
        UpdateBook : builder.mutation({
            query : ({id,...updatedBook}) =>({
                url : `/edit/${id}`,
                method : "PUT",
                body : updatedBook,
                headers : {
                    'Content-Type' : 'application/json'
                }
            }),
            invalidatesTags: ["Books"]
        }),
        DeleteABook : builder.mutation({
            query : (id) =>({
                url : `/delete/${id}`,
                method : "DELETE",
            }),
            invalidatesTags : ["Books"]
        })
    })
})

export const {useFetchAllBooksQuery,useFetchBookByIdQuery,useAddBookMutation,useDeleteABookMutation,useUpdateBookMutation} = booksApi;
export default booksApi;