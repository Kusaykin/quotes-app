export class SettingsServise {
  private altBackground = false;

  setBackround(isAlt: boolean){
    this.altBackground = isAlt;
  }

  isAltBackground(){
    return this.altBackground;
  }

}
