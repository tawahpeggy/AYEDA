import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  browserLang : any;
  constructor(  
    public translate: TranslateService) {  
    translate.addLangs(['English', 'French']);

    if (localStorage.getItem('locale')) {  
      this. browserLang = localStorage.getItem('locale');  
      translate.use(this.browserLang.match(/English|French/) ? this.browserLang : 'English');  
    } else {  
      localStorage.setItem('locale', 'English');  
      translate.setDefaultLang('English');  
    }  
  }  
  changeLang(language: string) {  
    localStorage.setItem('locale', language);  
    this.translate.use(language);  
  }  

  ngOnInit(): void {
  }

}
