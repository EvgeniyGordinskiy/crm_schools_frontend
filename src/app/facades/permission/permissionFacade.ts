import {Injectable} from '@angular/core';
import {Permission} from '@models/permission';

@Injectable()
export class PermissionFacade {

  static groupByModelName(permissionsArray) {
  let permissions = {};
    permissionsArray.map((item) => {
      if (!permissions[item.model_name]) {
        permissions[item.model_name] = [];
      }
      permissions[item.model_name].push({event: item.event, permission_type: item.permission_type, id: item.id});
    });

    return permissions;
  }
}
