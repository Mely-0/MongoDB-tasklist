import axiosApi from "./axios";
export const loginRequest = async ({ usuario, contraseña }) => {
    return axiosApi.patch("/users/login", {
        usuario, contraseña,
    })
}