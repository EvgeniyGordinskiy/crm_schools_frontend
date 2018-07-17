import {Injectable} from '@angular/core';
import {Permission} from '@models/permission';

@Injectable()
export class PermissionFacade {

  static groupByModelName(permissionsArray) {
  let permissions: { key: [Permission]};
    if (!permissions) {
      permissions = {};
    }
    permissionsArray.map((item) => {
      if (!permissions[item.model_name]) {
        permissions[item.model_name] = [];
      }
      permissions[item.model_name].push({event: item.event, permission_type: item.permission_type});
    });

    return permissions;
  }
}
