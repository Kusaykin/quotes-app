import { Component } from '@angular/core';
import {Quote} from "../../data/quote.interface";
import {QuotesService} from "../../services/quotes";

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  qoutes: Quote[];
  constructor (private qouteService: QuotesService) {

  }

  ionViewWillEnter() {
    this.qoutes = this.qouteService.getFavoriteQuotes();
  }
}
