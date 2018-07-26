
export interface AuthenticateResponseInterface {
  data:{
    token: string
    authUser?: {
      id?: string,
      name: string,
      email: string,
      avatar: string
    };
    status?: number;
  };
}
