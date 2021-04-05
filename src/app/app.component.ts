import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Countries";

  constructor(private translateService: TranslateService) {
    this.translateService.addLangs(["en", "ar"]);

    let lang = localStorage.getItem("lang");
    this.currentLang = lang ? lang : "en";
  }

  set currentLang(lang) {
    this.translateService.use(lang);
  }

  onLangChange(lang) {
    localStorage.setItem("lang", lang);
    this.currentLang = lang;
  }

  get allLangs() {
    return this.translateService.getLangs();
  }

  get currentLang() {
    return this.translateService.currentLang;
  }
}
