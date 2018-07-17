import {Component, OnInit} from '@angular/core';

// @ngrx
import { Store } from '@ngrx/store';

// reducers
import * as AuthenticateReducer from '@store/auth/reducers';
import {Permission} from '@models/permission';
import {PermissionService} from '@services/permission/permission.service';
import {PermissionFacade} from '@facadespermission/permissionFacade';
import {RolePermissionInterface} from '@interfacesrolePermission.interface';
import {RoleService} from '@services/role/role.service';
import {RoleInterface} from '@interfacesrole.interface';

@Component({
  selector: 'app-permission-page',
  templateUrl: './permission-page.component.html',
  styleUrls: ['./permission-page.component.scss']
})
export class PermissionPageComponent implements OnInit {

  permissions: { key: [Permission]};
  rolesPermissions = [];
  roles: [RoleInterface];

  constructor(
    private authStore: Store<AuthenticateReducer.AuthState>,
    private roleService: RoleService,
    private permissionService: PermissionService
  ) {
  }

  /////

  ////

  ngOnInit() {
    this.permissionService.getAll().subscribe(
      (resp: { data: {key: [Permission]}}) => {this.permissions = PermissionFacade.groupByModelName(resp.data);
        console.log(this.permissions);},
    );
    this.permissionService.getRolesPermissions().subscribe(
      (resp: {data: [RolePermissionInterface]}) => {this.rolesPermissions = resp.data;
        console.log(this.rolesPermissions)}
    );
    this.roleService.getAll().subscribe(
      (resp: {data: [RoleInterface]}) => {this.roles = resp.data;
        console.log(this.roles)}
    )
  }

  AppCtrl ($scope, $log) {
    var tabs = [
        { title: 'One', content: "Tabs will become paginated if there isn't enough room for them."},
        { title: 'Two', content: "You can swipe left and right on a mobile device to change tabs."},
        { title: 'Three', content: "You can bind the selected tab via the selected attribute on the md-tabs element."},
        { title: 'Four', content: "If you set the selected tab binding to -1, it will leave no tab selected."},
        { title: 'Five', content: "If you remove a tab, it will try to select a new one."},
        { title: 'Six', content: "There's an ink bar that follows the selected tab, you can turn it off if you want."},
        { title: 'Seven', content: "If you set ng-disabled on a tab, it becomes unselectable. If the currently selected tab becomes disabled, it will try to select the next tab."},
        { title: 'Eight', content: "If you look at the source, you're using tabs to look at a demo for tabs. Recursion!"},
        { title: 'Nine', content: "If you set md-theme=\"green\" on the md-tabs element, you'll get green tabs."},
        { title: 'Ten', content: "If you're still reading this, you should just go check out the API docs for tabs!"}
      ],
      selected = null,
      previous = null;
    $scope.tabs = tabs;
    $scope.selectedIndex = 2;
    $scope.$watch('selectedIndex', function(current, old){
      previous = selected;
      selected = tabs[current];
      if ( old + 1 && (old != current)) $log.debug('Goodbye ' + previous.title + '!');
      if ( current + 1 )                $log.debug('Hello ' + selected.title + '!');
    });
    $scope.addTab = function (title, view) {
      view = view || title + " Content View";
      tabs.push({ title: title, content: view, disabled: false});
    };
    $scope.removeTab = function (tab) {
      var index = tabs.indexOf(tab);
      tabs.splice(index, 1);
    };
  }

}
