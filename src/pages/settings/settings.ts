import { Component } from '@angular/core';
import {Toggle} from "ionic-angular";
import {SettingsServise} from "../../services/settings";

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(private settingService: SettingsServise){}

  onToggle(toggle: Toggle){
    this.settingService.setBackround(toggle.checked);
  }

  checkAltbackground() {
    return this.settingService.isAltBackground();
  }
}
