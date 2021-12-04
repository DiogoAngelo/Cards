import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-validation-errors',
  templateUrl: './validation-errors.component.html',
  styleUrls: ['./validation-errors.component.scss']
})
export class ValidationErrorsComponent implements OnInit {

  @Input() controls: any;

  constructor() { }

  ngOnInit(): void {
  }

}
