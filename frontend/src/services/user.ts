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
  firstname?: string;
  lastname?: string;
  pseudo?: string;
}) {
  try {
    const response = await api.post('/profil', values);
    return response;
  } catch (error) {
    console.log(error);
  }
}
