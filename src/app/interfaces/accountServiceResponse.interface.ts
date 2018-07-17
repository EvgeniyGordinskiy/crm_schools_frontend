import {Permission} from '@models/permission';

export interface AccountServiceResponseInterface {
  data: {
    id?: string;
    email: string;
    name: string;
    role: string;
    permissions: [Permission];
  };
}
