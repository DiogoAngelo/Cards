import { CardsListInterface } from './../interfaces/cards-list.interface';
import { Component, OnInit } from '@angular/core';
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent implements OnInit {

  cardsList!: any[];

  constructor(private service: CardsService) { }

  ngOnInit() {
    this.service.get('cards').then(cardsList => {
      this.cardsList = (cardsList as CardsListInterface).cards;
      console.log(cardsList);
    })

  }

}
