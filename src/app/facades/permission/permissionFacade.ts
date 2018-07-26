import {Injectable} from '@angular/core';
import {Permission} from '@models/permission';
import {User} from '@models/user';

@Injectable()
export class PermissionFacade {

  static pageAccessMethods = {
    '/auth/emailSent': 'canAccessPageEmailSent',
    '/auth/login': 'canAccessPageLogin',
    '/auth/register': 'canAccessPageRegister',
    '/auth/forgotPassword': 'canAccessPageForgotPassword',
    '/auth/resetPassword': 'canAccessPageResetPassword',
    '/home': 'canAccessPageHome',
    '/school': 'canAccessPageSchool',
    '/dashboard': 'canAccessPageDashboard',
    '/program': 'canAccessPageProgram',
    '/permissions': 'canAccessPagePermissions',
  };

  static groupByModelName(permissionsArray) {
  let permissions: {
    key ?: [Permission]
  } = {};
    permissionsArray.map((item) => {
      if (!permissions.hasOwnProperty(item.model_name)) {
        permissions[item.model_name] = [];
      }
      permissions[item.model_name].push({event: item.event, permission_type: item.permission_type, id: item.id});
    });

    return permissions;
  }

  static checkPermission(permissions, modelName: string, event = '', type = '') {
    let finded = false;
    if (permissions) {
      Object.keys(permissions).map((key) => {
        if (key === modelName) {
          if (event.length > 0) {
            permissions[key].map(item => {
              if (item.event === event) {
                if (type.length > 0) {
                  if (item.type === type.length) {
                    finded = true;
                  }
                } else {
                  finded = true;
                }
              }
            });
          } else {
            finded = true;
          }
        }
      });
    }
    return finded;
  }

  static userVerified(user) {
    return user.registerComplete === true && user.emailVerified === true && user.phoneNumberVerified === true;
  }

  static checkPermissionsToAccessPage(page: string, user: User) {
    const method = this.pageAccessMethods[page];
    if (method) {
      return this[method](user);
    }
    return false;
  }


  static canAccessPageEmailSent(user: User) {
    return user.registerComplete === true && user.emailVerified === false && !this.userVerified(user);
  }

  static canAccessPageLogin(user: User) {
    return true;
  }

  static canAccessPageRegister(user: User) {
    return true;
  }

  static canAccessPageForgotPassword(user: User) {
    return true;
  }

  static canAccessPageResetPassword(user: User) {
    return true;
  }

  static canAccessPageHome(user: User) {
    return true;
  }

  static canAccessPageSchool(user: User) {
    return true;
  }

  static canAccessPageDashboard(user: User) {
    return true;
  }

  static canAccessPageProgram(user: User) {
    return true;
  }

  static canAccessPagePermissions(user: User) {
    return true;
  }
}
