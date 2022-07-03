import { iObjectApi } from './objet-api';

export interface iresponseApi {
  code: number;
  error: boolean;
  message: string;
  data: { api_key: string };
  object: Array<iObjectApi>;
}
