import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  options = [
    { id: 1, name: 'Rose Tyler' },
    { id: 2, name: 'Clara Oswald' },
    { id: 3, name: 'Bill Potts' },
  ];

  form = new FormGroup({
    ngSelect: new FormControl(null),
    evoAutocomplete: new FormControl(null),
  });

  stringify(input: any): string {
    return JSON.stringify(input)
  }

  ngSelectOutput = '';
  changeNgOutput($event: string) {
    this.ngSelectOutput = $event;
  }
}
