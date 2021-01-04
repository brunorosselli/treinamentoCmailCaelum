import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CmailMsgErroComponent } from './cmail-msg-erro/cmail-msg-erro.component';
import { RouterModule } from '@angular/router';
import { CmailListItemComponent } from './cmail-list-item/cmail-list-item.component';
import { CmailFormGroupComponent } from './cmail-form-group/cmail-form-group.component';
import { CmailFormFieldDirective } from './cmail-form-group/cmail-form-field.directive';

@NgModule({
  declarations: [
    CmailFormGroupComponent,
    CmailFormFieldDirective,
    HeaderComponent,
    CmailMsgErroComponent,
    CmailListItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CmailFormGroupComponent,
    CmailFormFieldDirective,
    HeaderComponent,
    CmailMsgErroComponent,
    CmailListItemComponent
  ]
})
export class SharedComponentsModule { }
