import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ItemsService} from '../services/items.service';

@Component({
  selector: 'labs-new',
  templateUrl: 'new.component.html',
  styleUrls: ['new.component.scss'],
})

export class NewComponent {
  form: FormGroup;

  constructor(formBuilder: FormBuilder,
              private router: Router,
              public itemsServices: ItemsService) {
    this.form = formBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
    });
  }

  save(): void {
    this.itemsServices.items$.next([{title: this.form.value.name, checked: false}, ...this.itemsServices.items$.value]);
    this.router.navigate(['/']);
  }
}
