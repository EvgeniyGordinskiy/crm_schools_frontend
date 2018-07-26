import {Permission} from '@models/permission';
import {UserInterface} from '@app/interfaces/user.interface';
import {School} from '@models/shool';

export class User implements UserInterface {
  id?: string;
  email: string;
  name: string;
  role: string;
  emailVerified = false;
  phoneNumberVerified = false;
  registrationComplete = false;
  avatar?: string;
  provider_id?: string;
  provider_name?: string;
  permissions: {
    key?: [Permission]
  };
  schools?: [School];

  constructor(params?: User) {
    this.email = params.email;
    this.name = params.name;
    this.role = params.role;
    this.avatar = params.avatar;
    this.permissions = params.permissions;
    this.schools = params.schools;
    this.id = params.id ? params.id : 'null';
    this.provider_id = params.provider_id ? params.provider_id : 'null';
    this.provider_name = params.provider_name ? params.provider_name : 'null';
    this.emailVerified = params.emailVerified ? params.emailVerified : false;
    this.phoneNumberVerified = params.phoneNumberVerified ? params.phoneNumberVerified : false;
    this.registrationComplete = params.registrationComplete ? params.registrationComplete : false;
  }
}
