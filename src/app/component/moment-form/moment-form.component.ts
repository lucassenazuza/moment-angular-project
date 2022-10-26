import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Moment } from '../Moment';


@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.scss']
})
export class MomentFormComponent implements OnInit {
  @Input() btnText?: string;
  @Input() momentData: Moment | null = null;
  @Output() onFormSubmit = new EventEmitter<Moment>();
  constructor() { }

  momentForm !: FormGroup;

  ngOnInit(): void {
    if (this.momentData) {
      console.log('entoru');
      console.log(this.momentData);
      this.momentForm = new FormGroup({
        id: new FormControl(this.momentData.id),
        title: new FormControl(this.momentData.title, [Validators.required]),
        description: new FormControl(this.momentData.description, [
          Validators.required,
        ]),
        image: new FormControl(''),
      });
    } else {
      this.momentForm = new FormGroup({
        id: new FormControl(''),
        title: new FormControl('', [Validators.required]),
        description: new FormControl('', [Validators.required]),
        image: new FormControl(''),
      });
    }
  }


  get title() {
    return this.momentForm.get('title')!;
  }
  get description() {
    return this.momentForm.get('description')!;
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.momentForm.patchValue({ image: event.target.files[0] });
  }


  submit() {
    if (this.momentForm.invalid) {
      return;
    }
    console.log(this.momentForm.value);
    console.log("Form submitted");
    //envia form
    this.onFormSubmit.emit(this.momentForm.value);
  }

}
