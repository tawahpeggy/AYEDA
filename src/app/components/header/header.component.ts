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
    translate.addLangs(['en', 'fr']);

    if (localStorage.getItem('locale')) {  
      this. browserLang = localStorage.getItem('locale');  
      translate.use(this.browserLang.match(/en|fr/) ? this.browserLang : 'en');  
    } else {  
      localStorage.setItem('locale', 'en');  
      translate.setDefaultLang('en');  
    }  
  }  
  changeLang(language: string) {  
    localStorage.setItem('locale', language);  
    this.translate.use(language);  
  }  

  ngOnInit(): void {
  }

}
