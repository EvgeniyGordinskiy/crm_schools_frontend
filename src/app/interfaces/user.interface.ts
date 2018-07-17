import {Permission} from '@models/permission';

export interface UserInterface {
  id?: string;
  email: string;
  name: string;
  role: string;
  permissions: {
    key: [Permission]
  };
}
