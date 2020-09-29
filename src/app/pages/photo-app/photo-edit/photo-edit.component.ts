import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
interface Categoty {
  label: string;
  value: number;
}
@Component({
  selector: 'app-photo-edit',
  templateUrl: './photo-edit.component.html',
  styleUrls: ['./photo-edit.component.css']
})
export class PhotoEditComponent implements OnInit {
  categories: Categoty[] = [
    {label: 'Teachnology', value: 1},
    {label: 'Education', value: 2},
    {label: 'Mature', value: 3},
    {label: 'Animals', value: 4},
    {label: 'Styles', value: 5},
  ];
  formEdit: FormGroup;

  constructor( private fb: FormBuilder ) {}

  ngOnInit() {
    this.formEdit = this.fb.group({
      title: ['', Validators.required, Validators.minLength(4)],
      category: ['', Validators.required],
    });
  }

}
