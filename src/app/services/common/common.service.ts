import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  isOpen = true;
  translation! : string;
  chart: any;
  isMonth = true;
  isLoggedIn = '';
  isOnPageNotFound = false;

  constructor(public translateService : TranslateService) {
    this.isLoggedIn = atob(localStorage.getItem('loggedIn') || '');
    console.log(this.isLoggedIn);  
   }

   getTranslateData(text : string){
    this.translateService.get(text).pipe().subscribe((value) => {
       this.translation =  value; 
    });
    return this.translation;
  } 
}
