import { CardsListInterface } from './../interfaces/cards-list.interface';
import { Component, OnInit } from '@angular/core';
import { ApisService } from '../api.service';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent implements OnInit {

  cardsList!: any[];

  constructor(private service: ApisService) { }

  ngOnInit() {
    this.service.get('cards').then(cardsList => {
      this.cardsList = (cardsList as CardsListInterface).cards;
    })
  }
}
