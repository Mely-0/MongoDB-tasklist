import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const Peticiones = createApi({
    reducerPath: 'Peticiones',

    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8070',
    }),
    tagTypes: ["refreshGetTaks", "refreshPostTaks", "refreshDeleteTaks", "refreshPutTaks"],
    endpoints: (builder) => ({
        getObtenerTareas: (builder).query({
            query: (token) => ({
                method: "GET",
                url: "/tareas",
                headers: { "Content-Type": "application/json", token }
            }),
            providesTags: ["refreshGetTaks"]
        }),
        getObtenerUsuario: (builder).query({
            query: () => ({
                method: "GET",
                url: "/users",
                headers: { "Content-Type": "application/json", }
            }),
        }),
        postAgregarTareas: builder.mutation({
            query: ({ dataTask, token }) => ({
                headers: {
                    "Content-Type": "application/json", token
                },
                url: "/tareas",
                method: "POST",
                body: dataTask
            }),
            invalidatesTags: ["refreshGetTaks", "refreshPostTaks"]
        }),
        postAgregarUser: builder.mutation({
            query: (dataUser) => ({
                headers: { "Content-Type": "application/json" },
                url: "/users/signup",
                method: "POST",
                body: dataUser
            })
        }),
        patchLogin: builder.query({
            query: (dataLogin) => ({
                url: "/users/login",
                method: "PATCH",
                body: dataLogin
            })
        }),
        deleteEliminarTarea: builder.mutation({
            query: ({ _id, token }) => ({
                url: `/tareas/${_id}`,
                method: "DELETE",
                headers: { "Content-Type": "application/json", token }
            }),
            invalidatesTags: ["refreshGetTaks", "refreshDeleteTaks"]
        }),
        putActualizarTarea: builder.mutation({
            query: ({ dataTask, _id, token }) => ({
                url: `/tareas/${_id}`,
                method: "PUT",
                body: dataTask,
                headers: { "Content-Type": "application/json", token }
            }),
            invalidatesTags: ["refreshGetTaks", "refreshPutTaks"]
        })
    })
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetObtenerTareasQuery, useGetObtenerUsuarioQuery, usePostAgregarTareasMutation, useDeleteEliminarTareaMutation, usePutActualizarTareaMutation, usePostAgregarUserMutation, usePatchLoginQuery } = Peticiones