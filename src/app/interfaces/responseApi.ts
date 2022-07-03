import { iObjectApi } from './objet-api';

export interface iResponseApi {
  code: number;
  error: boolean;
  message: string;
  data: { api_key: string };
  object: Array<iObjectApi>;
}
