import { CardsDetailsInterface } from './../interfaces/cards-details.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApisService } from '../api.service';

@Component({
  selector: 'app-cards-details',
  templateUrl: './cards-details.component.html',
  styleUrls: ['./cards-details.component.scss']
})
export class CardsDetailsComponent implements OnInit {

  id: any = this.route.snapshot.params.id;
  card: any;

  constructor(
    private service: ApisService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.service.get(`${'cards'}/${this.id}`).then((data)=> {
      this.card = data;
      this.card.steps = this.card.steps.split('\n');
    })
  }
}
