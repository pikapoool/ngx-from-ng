import { Component, OnInit } from '@angular/core';
import { ParseStringService } from 'common/services/parse-string.service';

@Component({
  selector: 'app-app-ngx-page',
  templateUrl: './app-ngx-page.component.html',
  styleUrls: ['./app-ngx-page.component.scss']
})
export class AppNgxPageComponent implements OnInit {
  constructor(
    private readonly parseStringService: ParseStringService,
  ) { }

  ngOnInit() {
  }
  
  name = this.parseStringService.toUpperCase("ngx")

}
