import {api} from './api';

interface ResponseError {
  status?: number;
  error?: string;
}

export interface ListDto extends ResponseError {
  _id: string;
  nome: string;
  dataNascimento: string;
  cep: string;
  endereco: string;
  cidade: string;
  estado: string;
}

export async function getQuery(path: string): Promise<ListDto[]> {
  const response = await api.get(`/api/core/query${path}`);
  return response.data;
}

export async function postQuery(path: string, data: any): Promise<any> {
  const response = await api.post(`/api/core/query${path}`, data);
  return response;
}

export async function sendFile(file: FormData) {
  const response = await api.post('api/core/upload', file, 
    { headers: { "Content-Type": "multipart/form-data" }})
  return response;

}
