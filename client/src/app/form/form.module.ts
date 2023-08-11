import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldComponent } from './form-field/form-field.component';
import { FormInputComponent } from './form-input/form-input.component';
import { FormLabelComponent } from './form-label/form-label.component';
import { FormErrorComponent } from './form-error/form-error.component';



@NgModule({
  declarations: [
    FormFieldComponent,
    FormInputComponent,
    FormLabelComponent,
    FormErrorComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    FormFieldComponent,
    FormInputComponent,
    FormLabelComponent,
    FormErrorComponent
  ]
})
export class CustomFormModule { }
