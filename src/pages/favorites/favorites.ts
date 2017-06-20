import { Component } from '@angular/core';
import {Quote} from "../../data/quote.interface";
import {QuotesService} from "../../services/quotes";
import {MenuController, ModalController} from "ionic-angular";
import {QuotePage} from "../quote/quote";
import {SettingsServise} from "../../services/settings";

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  quotes: Quote[];
  constructor (private qouteService: QuotesService,
               private modalCtrl: ModalController,
               private  menuCtrl: MenuController,
               private settingsService: SettingsServise) {

  }

  ionViewWillEnter() {
    this.quotes = this.qouteService.getFavoriteQuotes();
  }

  onViewQuote(quote: Quote){
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((remove: boolean) => {
      if (remove){
        this.onRemoveFromFavorites(quote);
        /*
        this.qouteService.removeQuoteFromFavorite(quote);
        const position = this.qoutes.findIndex((quoteEl: Quote) => {
          return quoteEl.id == quote.id;
        });
        this.qoutes.splice(position, 1);
        */
        }
    });
  }

  onRemoveFromFavorites(quote: Quote){
    this.qouteService.removeQuoteFromFavorite(quote);
    const position = this.quotes.findIndex((quoteEl: Quote) => {
      return quoteEl.id == quote.id;
    });
    this.quotes.splice(position, 1);
  }

  getBackground() {
    return this.settingsService.isAltBackground() ? 'altQuoteBackground' : 'quoteBackground';
  }

  isAltBackground() {
    return this.settingsService.isAltBackground();
  }


}
