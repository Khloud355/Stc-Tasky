import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { TranslateService } from '@ngx-translate/core';
import { TranslateConfigService } from './services/transalte-config.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  lang: any;
  textDir: any;
  constructor(
    private authService: AuthService,
    private router: Router,
    private translate: TranslateService,
    private LangService: TranslateConfigService,
    private transaletservice: TranslateService
  ) {
    translate.setDefaultLang('en');
    this.lang = localStorage.getItem('language') || 'en';
    translate.use('en');
  }
  ngOnInit(): void {
    if (this.authService.isAuthinticated()) {
      this.router.navigate(['/products']);
    } else {
      this.router.navigate(['/']);
    }
    this.lang = localStorage.getItem('language') || 'en';
    if (this.lang === "en") {

      this.textDir = 'ltr';
      this.transaletservice.use(this.lang)
    }
    else {
      this.textDir = 'rtl';
      this.transaletservice.use(this.lang)
    }
  }
  changeLang() {
    if (this.LangService.lang === 'en') {
      this.LangService.lang = 'ar';
      this.LangService.dir = 'rtl';
      this.LangService.changeLang(this.LangService.lang);
      localStorage.setItem('language', this.LangService.lang);
    } else {
      this.LangService.lang = 'en';
      this.LangService.dir = 'ltr';
      this.LangService.changeLang(this.LangService.lang);
      localStorage.setItem('language', this.LangService.lang);
    }
  }
  title = 'stcProject';
}
