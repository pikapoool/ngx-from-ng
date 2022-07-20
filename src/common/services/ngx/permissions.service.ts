import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { NgxRolesService } from "ngx-permissions";

@Injectable({
  providedIn: "root"
})
export class PermissionsService {
  constructor(
    private ngxRolesService: NgxRolesService,
    private http: HttpClient,
  ) { }

  addRoles() {
    this.ngxRolesService.addRoles({
      "USER_TYPE1": ["VIEW"],
      "ADMIN": ["VIEW", "UPDATE", "CREATE", "DELETE", "ADD"],
    });
  }

  getRole(role: string): any {
    return this.ngxRolesService.getRole(role);
  }

  checkPermissions(role: string, permissions: string[]): boolean {
    const userRole: any = this.getRole(role);
    if (!userRole) {
      return false;
    }

    return !!userRole.validationFunction.filter(i => new Set(permissions).has(i)).length;
  }
}