import {User} from '@models/user';
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthenticateAction, AuthenticatedSuccessAction} from '@store/auth/actions';
import {AccountServiceResponseInterface} from '@interfaces/accountServiceResponse.interface';
import {PermissionFacade} from '@facades/permission/permissionFacade';
import {Store} from '@ngrx/store';
import * as AuthenticateReducer from '@store/auth/reducers';
import {AccountService} from '@services/account/account.service';
import {School} from '@models/shool';

@Injectable()
export class AuthFacade {
  private static prefix = 'auth_schools_';

  static getUser = () => {
    const userJsn = localStorage.getItem(AuthFacade.prefix + 'user');
    if (typeof userJsn !== 'undefined' && userJsn !== 'undefined') {
      return JSON.parse(localStorage.getItem(AuthFacade.prefix + 'user'));
    }
  }

  public constructor(
    private router: Router,
    private store: Store<AuthenticateReducer.AuthState>,
    private accountService: AccountService,
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
  private notAuthnticatePages = [
    '/auth/register',
    '/auth/login',
    '/auth/resetPassword',
    '/auth/setup'
  ];

  static setAuthStatus = (status: boolean) => {
    localStorage.setItem(AuthFacade.prefix + 'status', status.toString());
  }

  static getAuthStatus = () => {
    return localStorage.getItem(AuthFacade.prefix + 'status') === 'true';
  }

  checkAuthStatusAndRedirect() {
    setTimeout(() => {
      if (AuthFacade.getAuthStatus() && this.notAuthnticatePages.includes(this.router.url.split('?')[0])) {
        this.router.navigate(['/home']);
      } else if (!AuthFacade.getAuthStatus() && !this.notAuthnticatePages.includes(this.router.url.split('?')[0])) {
        this.router.navigate(['/auth/login']);
      }
    }, 45);
  }

  pageNeedAuth() {
    return !this.notAuthnticatePages.includes(this.router.url.split('?')[0]);
  }

  endSession() {
    localStorage.removeItem(AuthFacade.prefix + 'user');
    localStorage.removeItem(AuthFacade.prefix + 'token');
    localStorage.removeItem(AuthFacade.prefix + 'status');
    this.router.navigate(['/auth/login']);
  }


  public loginAndFetchUserData(): User {
    let user: User;
    this.accountService.getAccount().subscribe(
      (response: AccountServiceResponseInterface) => {
        const permissions = PermissionFacade.groupByModelName(response.data.permissions);
        return this.createUser(response, permissions);
      },
      error => {
        console.log(error);
      }
    );
    if (typeof user !== 'undefined') {
      return user;
    }
  }

  public createUser(response: AccountServiceResponseInterface, permissions = {}): User {
    return new User({
     name: response.data.name,
     email: response.data.email,
     avatar: response.data.avatar,
     role: response.data.role,
     emailVerified: response.data.emailVerified,
     phoneNumberVerified: response.data.phoneNumberVerified,
     registrationComplete: response.data.registrationComplete,
     permissions: permissions,
     phone: response.data.phone,
     schools: response.data.schools,
     paymentSettingVerified: response.data.paymentSettingVerified,
     usedAuthSocial: response.data.usedAuthSocial ? response.data.usedAuthSocial : false
  });
  }

}
