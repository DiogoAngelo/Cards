import { ApisService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  form!: FormGroup;
  kinds: any;
  stages: any;

  constructor(
    private formBuilder: FormBuilder,
    private service: ApisService
    ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      shortDescription: ['', Validators.required],
      duration: ['', Validators.required],
      kind: ['', Validators.required],
      stageIds: ['', Validators.required],
      input: ['', Validators.required],
      output: ['', Validators.required],
      steps: ['', Validators.required],
      description: ['', Validators.required]
    });
    this.service.get('cards/new').then(data => {
      let outcome = (data as any)
      this.kinds = outcome.kinds;
      this.stages = outcome.stages;
    });
  }


}
