import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'cmail-list-item',
  templateUrl: './cmail-list-item.component.html',
  styleUrls: ['./cmail-list-item.component.css']
})
export class CmailListItemComponent implements OnInit {
  @Input() destinatario = '';
  @Input() assunto = '';
  @Input() introducaoDoConteudo = '';
  @Input() dataDeEnvio = '';

  constructor() { }

  ngOnInit(): void {
  }
}
