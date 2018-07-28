import {AccountServiceResponseInterface} from '@interfaces/accountServiceResponse.interface';

export interface AuthenticateResponseInterface {
  data: {
    token: string
    authUser?: AccountServiceResponseInterface;
    status?: number;
  };
}
