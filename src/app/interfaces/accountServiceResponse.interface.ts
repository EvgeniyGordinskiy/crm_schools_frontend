import {Permission} from '@models/permission';
import {School} from '@models/shool';

export interface AccountServiceResponseInterface {
  data: {
    id?: string;
    email: string;
    name: string;
    role: string;
    permissions: [Permission];
    schools: [School]
  };
}
