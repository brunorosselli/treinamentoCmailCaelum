import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'cmail-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styles: [`
    ul, li {
      margin: 0;
      padding: 0;
      list-style-type: none;
    }
  `]
})
export class CaixaDeEntradaComponent implements OnInit {
  private _isNewEmailFormOpen = false;
  isLoading: boolean;
  cliente: any;


  emailList = [];
  email = {
    destinatario: '',
    assunto: '',
    conteudo: ''
  };

  constructor(private emailService: EmailService) { }

  ngOnInit(): void {
    this.emailService
      .listar()
      .subscribe(
        lista => {
          this.emailList = lista;
        }
      );
  }

  get isNewEmailFormOpen(): boolean {
    return this._isNewEmailFormOpen;
  }

  toggleNewEmailForm(): void {
    this._isNewEmailFormOpen = !this.isNewEmailFormOpen;
  }

  handleNewEmail(formEmail: NgForm): void {
    if (formEmail.invalid) {
      return;
    }

    this.emailService
      .enviar(this.email)
      .subscribe(
        emailApi => {
          // Fazemos todas as outras operações após o OK da API
          this.emailList.push(emailApi);
          this.email = { destinatario: '', assunto: '', conteudo: '' };
          formEmail.reset();
        }
        , erro => console.error(erro)
      );
  }
}
