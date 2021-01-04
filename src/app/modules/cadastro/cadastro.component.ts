import { HttpClient, HttpErrorResponse, HttpResponseBase } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
// import { debounce, filter, map, tap, throttle } from 'rxjs/operators';
import { catchError, map } from 'rxjs/operators';
import { User } from 'src/app/models/user';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  mensagensErro: any;

  formCadastro = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    telefone: new FormControl('', [Validators.required, Validators.pattern('[0-9]{4}-?[0-9]{4}[0-9]?')]),
    username: new FormControl('', Validators.required),
    senha: new FormControl('', Validators.required),
    avatar: new FormControl('', Validators.required, this.validaImagem.bind(this)),
  });

  private assinaturas: Subscription[] = [];

  constructor(private httpClient: HttpClient, private roteador: Router) { }

  validaImagem(campoDoFormulario: FormControl): any {
    return this.httpClient
      .head(campoDoFormulario.value, {
        observe: 'response'
      })
      .pipe(
        map((response: HttpResponseBase) => response.ok ? null : { urlInvalida: true }),
        catchError(() => [{ urlInvalida: true }])
      );
  }


  handleCadastrarUsuario(): void {
    if (this.formCadastro.valid) {
      // debugger;
      // const userData = new User(this.formCadastro.value);

      const { nome: name, username, senhas: password, telefone: phone, avatar } = this.formCadastro.value;

      this.httpClient
        // .post('http://localhost:3200/users', userData)
        .post('http://localhost:3200/users', {
          name,
          username,
          password,
          phone,
          avatar
        })
        .subscribe(
          () => {
            console.log(`Cadastrado com sucesso`);
            this.formCadastro.reset();

            setTimeout(() => {
              this.roteador.navigate(['']);
            }, 1000);
          }
          , (responseError: HttpErrorResponse) => {
            // resposta caso existam erros!
            this.mensagensErro = responseError.error.body;
          }
        );
    }
    else {
      this.formCadastro.markAllAsTouched();
    }
  }

}

