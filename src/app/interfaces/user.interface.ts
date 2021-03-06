import {Permission} from '@models/permission';
import {School} from '@models/shool';

export interface UserInterface {
  id?: string;
  email: string;
  phone: string;
  avatar?: string;
  provider_id?: string;
  provider_name?: string;
  emailVerified: boolean;
  phoneNumberVerified: boolean;
  registrationComplete: boolean;
  paymentSettingVerified: boolean;
  name: string;
  role: string;
  permissions: {
    key?: [Permission]
  };
  schools?: [School];
  usedAuthSocial?: boolean|string;
}
