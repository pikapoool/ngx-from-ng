import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { PermissionsService } from "common/services/ngx/permissions.service";

@Component({
  selector: "app-app-action-btn",
  templateUrl: "./app-action-btn.component.html",
  styleUrls: ["./app-action-btn.component.scss"]
})
export class AppActionBtnComponent implements OnInit {
  @Input() action: string;
  @Input() text: string;
  @Input() icon: string;
  @Input() role: string;
  @Output() goToUrl = new EventEmitter<any>();
  @Output() showBroadcast = new EventEmitter<any>();

  userRole: any;
  isPermitted = false;

  constructor(
    private permissionsService: PermissionsService,
  ) {}

  ngOnInit() {
    this.isPermitted = this.permissionsService.checkPermissions(this.role, [this.action]);
  }

  onClick() {
    if (!this.isPermitted) {
      this.goToUrl.emit();
    }
  }
}
