import { CardsDetailsInterface } from './../interfaces/cards-details.interface';
import { CardsListInterface } from './../interfaces/cards-list.interface';
import { Component, OnInit } from '@angular/core';
import { ApisService } from '../api.service';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent implements OnInit {

  cardsList!: CardsDetailsInterface[];
  currentPage!: number;
  totalPages!: number;
  hasPrevious: boolean = false;
  hasNext: boolean = true;
  cardsAvailable: any;
  totalCards!: number;
  slug: string = '';

  constructor(private service: ApisService) { }

  ngOnInit() {
    this.loadCards(1);
    this.loadStages();
  }

  loadCards(page: number, slug: string = '') {
    let payload: any = {page: page}
    if (slug != '') {
      payload['stage'] = slug;
    }
    this.service.get('cards', payload)
      .then(cardsList => {
      let cards = (cardsList as CardsListInterface);
      this.cardsList = cards.cards;
      this.currentPage = cards.currentPage;
      this.totalPages = cards.totalPages;
      this.hasNext = cards.currentPage < cards.totalPages;
      this.hasPrevious = cards.currentPage > 1;
    })
  }

  previousPage() {
    window.scroll(0,0);
    this.loadCards(this.currentPage - 1, this.slug)
  }

  nextPage() {
    window.scroll(0,0)
    this.loadCards(this.currentPage + 1, this.slug)
  }

  filter(slug: any) {
    this.slug = slug;
    this.loadCards(1, slug);
  }

  loadStages() {
    this.service.get('').then(data => {
      this.cardsAvailable = data;
      this.cardsAvailable = this.cardsAvailable.cards_available;
       this.totalCards = this.cardsAvailable.map((item: any) => {
        return item.cards;

      }).reduce((prev: number, curr: number) => {
        return prev + curr;
      },0);
    });
  }
}
