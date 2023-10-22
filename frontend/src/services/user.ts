import { api } from "../libs/axios";

export async function authorizationProfil() {
  const id = localStorage.getItem('userId');
  try {
    const response = await api.get(`/user/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function updateProfil(values: {
  pseudo?: string;
  email?: string;
  genres?: string[];
}, id: string) {
  try {
    const response = await api.put(`/user/${id}`, values);
    return response;
  } catch (error) {
    console.log(error);
  }
}
