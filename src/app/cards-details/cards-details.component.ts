import { CardsDetailsInterface } from './../interfaces/cards-details.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-cards-details',
  templateUrl: './cards-details.component.html',
  styleUrls: ['./cards-details.component.scss']
})
export class CardsDetailsComponent implements OnInit {

  id: any = this.route.snapshot.params.id;
  cardDetails: any;
  stepsArray!: any[];

  constructor(
    private service: CardsService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.service.get(`${'cards'}/${this.id}`).then((data)=> {
      this.cardDetails = data;
      let steps = (data as CardsDetailsInterface).steps;
      this.stepsArray = steps.split('\n');
    })
  }
}
