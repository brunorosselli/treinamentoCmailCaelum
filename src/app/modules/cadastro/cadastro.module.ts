import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro.component';
import { CmailFormGroupComponent } from 'src/app/components/cmail-form-group/cmail-form-group.component';
import { CmailFormFieldDirective } from 'src/app/components/cmail-form-group/cmail-form-field.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';
import { CadastroRoutingModule } from './cadastro-routing.module';

@NgModule({
  declarations: [
    CadastroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedComponentsModule,
    CadastroRoutingModule
  ]
})
export class CadastroModule { }
