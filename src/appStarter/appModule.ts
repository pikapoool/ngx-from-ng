import * as angular from "angular";
import { downgradeComponent } from "@angular/upgrade/static";

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { UpgradeModule } from "@angular/upgrade/static";
import { HttpClientModule } from "@angular/common/http";
import { NgxPermissionsModule } from "ngx-permissions";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { declarations } from "common/directives/declarations";
import { moduleDirectives } from "common/directives/indexDeclaration";

import { ParseStringService } from "common/services/parse-string.service";
import { PermissionsService } from "common/services/ngx/permissions.service";

import {
  AppActionBtnComponent,
  AppNgxPageComponent,
  NgxHighlightComponent,
} from "common/components";


const ngxComponents = [
	{
		component: AppNgxPageComponent,
		directiveName: "ngxPage"
	},
	{
		component: AppActionBtnComponent,
		directiveName: "ngxActionBtn"
	},
	{
    directiveName: 'ngxHighlight',
    component: NgxHighlightComponent,
	},
];

// register NGX components in AngularJS
ngxComponents.forEach(
	({ component, directiveName }) => moduleDirectives.directive(directiveName, downgradeComponent({ component }) as angular.IDirectiveFactory)
);

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxPermissionsModule.forRoot()
  ],
  declarations: [
    ...declarations,
    ...ngxComponents.map(({ component }) => component),
  ],
  exports: declarations,
  entryComponents: ngxComponents.map(({ component }) => component),
  providers: [
    PermissionsService,
    ParseStringService
  ]
})
export class AppModule {
  constructor(
    private upgrade: UpgradeModule,
    private permissionsService: PermissionsService
  ) {
    this.permissionsService.addRoles();
  }
  ngDoBootstrap() {
  }
}
