import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TailwindDemo';

  constructor(private translate: TranslateService, public authService : AuthService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }
}
