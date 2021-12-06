import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApisService } from 'src/app/api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  form!: FormGroup;
  stages!: any[];
  kinds!: any[];
  id = this.activatedRoute.snapshot.params.id;
  loading: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private service: ApisService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.service.get(`cards/${this.id}/edit`).then(data => {
      let prov = (data as any)
      this.kinds = prov.kinds;
      this.stages = prov.stages;
      let card = prov.card;
      this.form = this.formBuilder.group({
        name: [card.name, Validators.required],
        shortDescription: [card.shortDescription, Validators.required],
        duration: [card.duration, Validators.required],
        kind: [card.kind.id, Validators.required],
        stagesIds: [card.stages.map((stage: {id: any}) => {return stage.id}) , Validators.required],
        input: [card.input, Validators.required],
        output: [card.output, Validators.required],
        steps: [card.steps, Validators.required],
        description: [card.description, Validators.required],
      });
      this.loading = false;
    });
  }

  save() {
    if(this.form.valid) {
      this.service.patch(`cards/${this.id}`, this.form.value)
      .then(() => {
        this.router.navigate(['/details', this.id]);
      }).catch((data) => {
        console.log(data);
      });
    }

  }
}
