import {User} from '@models/user';
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthFacade {
  private static prefix = 'auth_schools_';

  private notAuthnticatePages = [
    '/auth/register',
    '/auth/login',
    '/auth/resetPassword'
  ];

  public constructor(
    private router: Router,
  ) {}

  static setToken = (token: string, prefix = AuthFacade.prefix) => {
    localStorage.setItem(prefix + 'token', token);
  }

  static getToken = (prefix = AuthFacade.prefix): string => {
    return localStorage.getItem(prefix + 'token');
  }

  static setUser = (user: User) => {
    localStorage.setItem(AuthFacade.prefix + 'user', JSON.stringify(user));
  }

  static getUser = () => {
    return JSON.parse(localStorage.getItem(AuthFacade.prefix + 'user'));
  }

  static setAuthStatus = (status: boolean) => {
    localStorage.setItem(AuthFacade.prefix + 'status', status.toString());
  }

  static getAuthStatus = () => {
    return localStorage.getItem(AuthFacade.prefix + 'status') === 'true';
  }

  checkAuthStatusAndRedirect() {
    setTimeout(() => {
      if (AuthFacade.getAuthStatus() && this.router.url === '/auth/login') {
        this.router.navigate(['/home']);
      } else if (!AuthFacade.getAuthStatus() && !this.notAuthnticatePages.includes(this.router.url.split('?')[0])) {
        this.router.navigate(['/auth/login']);
      }
    }, 45);
  }

  endSession() {
    localStorage.removeItem(AuthFacade.prefix + 'user');
    localStorage.removeItem(AuthFacade.prefix + 'token');
    localStorage.removeItem(AuthFacade.prefix + 'status');
    this.router.navigate(['/auth/login']);
  }


}
