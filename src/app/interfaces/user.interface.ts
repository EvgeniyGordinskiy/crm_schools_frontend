import {Permission} from '@models/permission';
import {School} from '@models/shool';

export interface UserInterface {
  id?: string;
  email: string;
  avatar?: string;
  provider_id?: string;
  provider_name?: string;
  name: string;
  role: string;
  permissions: {
    key?: [Permission]
  };
  schools?: [School];
  avatar?: string;
}
