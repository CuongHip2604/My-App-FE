import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addPhoto } from 'src/app/shared/photo-app/photo-app.actions';
import { PhotoApp } from 'src/app/shared/photo-app/photo-app.model';
import { PhotoState } from 'src/app/shared/photo-app/photo-app.reducer';
import { PhotoAppService } from '../photo-app.service';
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
  urlImage = 'assets/image.png';
  formAdd: FormGroup;

  get getUrlImage() {
    const controls = this.formAdd.controls;
    if (controls['url_image'].value) {
      return controls['url_image'].value;
    }
    return this.urlImage;
  }

  constructor( private fb: FormBuilder, private photoAppService: PhotoAppService, private store: Store<PhotoState> ) {}

  ngOnInit() {
    this.formAdd = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(4)]],
      category: ['', [Validators.required]],
      url_image: ['', [Validators.required]]
    });
  }

  submitForm() {
    const controls = this.formAdd.controls;

    // check form
    if (this.formAdd.invalid) {
      Object.keys(controls).forEach(controlName =>
        controls[controlName].markAsTouched()
      );
      return;
    }
    // get data form
    const data: PhotoApp = {
      title: controls['title'].value,
      category: controls['category'].value,
      image_url: controls['url_image'].value,
    };
    this.store.dispatch(addPhoto({ photo: data }));
  }

}
