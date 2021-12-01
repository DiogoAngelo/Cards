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

  constructor(private service: ApisService) { }

  ngOnInit() {
    this.loadPage(1);
  }

  loadPage(page: number) {
    this.service.get('cards',{page: page})
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
    this.loadPage(this.currentPage - 1)
  }

  nextPage() {
    window.scroll(0,0)
    this.loadPage(this.currentPage + 1)
  }
}
