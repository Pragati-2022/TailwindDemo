import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from './services/auth/auth.service';
import { CommonService } from './services/common/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'TailwindDemo';

  constructor(private translate: TranslateService, public commonService : CommonService) {
    translate.setDefaultLang('en');
    translate.use('en');    
  }
}
