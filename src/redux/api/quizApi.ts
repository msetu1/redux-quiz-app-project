import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const quizApi = createApi({
    reducerPath: 'quizApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
    endpoints: (builder) => ({
      getAllQuiz:builder.query({
        query:()=>`/quizzes`,
      })
    }),
  })
export const { useGetAllQuizQuery } = quizApi