import { Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const LNG_KEY = 'SELECTED LANGUAGE';

@Injectable({
  providedIn: 'root'
})

export class LanguageService {
  selected = '';

  constructor(private translate: TranslateService, private storage: Storage) {}

  setInitialAppLangage() {
    let language = this.translate.getBrowserLang();
    this.translate.setDefaultLang(language);

    this.storage.get(LNG_KEY).then(val => {
      if( val ) {
        this.setLanguage(val);
        this.selected = val;
      }
    });
  }

  getLangages() {
    return [
      { text: 'English', value: 'en', img: 'assets/img/languages/en.svg'},
      { text: 'Deutsch', value: 'de', img: 'assets/img/languages/de.svg'},
      { text: 'Français', value: 'fr', img: 'assets/img/languages/fr.svg'},
      { text: 'Italiano', value: 'it', img: 'assets/img/languages/it.svg'}
    ];
  }
  
  setLanguage(lng) {
    this.translate.use(lng);
    this.selected = lng;
    this.storage.set(LNG_KEY, lng);
  }
}