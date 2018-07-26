import {Permission} from '@models/permission';
import {UserInterface} from '@app/interfaces/user.interface';
import {School} from '@models/shool';

export class User implements UserInterface {
  id?: string;
  email: string;
  name: string;
  role: string;
  avatar: string;
  permissions: {
    key?: [Permission]
  };
  schools?: [School];

  constructor(params) {
    this.email = params.email;
    this.name = params.name;
    this.role = params.role;
    this.avatar = params.avatar;
    this.permissions = params.permissions;
    this.schools = params.schools;
    this.id = params.id ? params : 'null';
  }
}
