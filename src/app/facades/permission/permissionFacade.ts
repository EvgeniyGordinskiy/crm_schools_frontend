import {Injectable} from '@angular/core';
import {Permission} from '@models/permission';

@Injectable()
export class PermissionFacade {

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
}
