import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateConfigService {
  lang: string;
  dir: any
  constructor(private transaletservice: TranslateService) {
    this.lang = localStorage.getItem("language") || 'en'
    // this.transaletservice.use(this.lang)
  }
  changeLang(type: string) {
    console.log(type)
    this.transaletservice.use(type)
    window.location.reload()

  }
}
