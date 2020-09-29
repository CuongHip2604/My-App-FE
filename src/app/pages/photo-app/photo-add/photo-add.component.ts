import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
interface Categoty {
  label: string;
  value: number;
}
@Component({
  selector: 'app-photo-add',
  templateUrl: './photo-add.component.html',
  styleUrls: ['./photo-add.component.css']
})
export class PhotoAddComponent implements OnInit {
  categories: Categoty[] = [
    {label: 'Teachnology', value: 1},
    {label: 'Education', value: 2},
    {label: 'Mature', value: 3},
    {label: 'Animals', value: 4},
    {label: 'Styles', value: 5},
  ];
  formAdd: FormGroup;

  constructor( private fb: FormBuilder ) {}

  ngOnInit() {
    this.formAdd = this.fb.group({
      title: ['', Validators.required, Validators.minLength(4)],
      category: ['', Validators.required],
    });
  }

}
