import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Email } from '../models/email';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  api = 'http://localhost:3200/emails';

  cabecalho = new HttpHeaders({ 'Authorization': localStorage.getItem('cmail-token') });

  constructor(private http: HttpClient) { }

  listar(): Observable<Email[]> {
    return this.http
      .get<IEmailAPI[]>(this.api, { headers: this.cabecalho })
      .pipe(
        map((response) => {
          return response
            .map(
              emailApi => new Email({
                destinatario: emailApi.to,
                assunto: emailApi.subject,
                conteudo: emailApi.content,
                dataDeEnvio: emailApi.created_at
              })
            );
        })
      )
  }

  enviar({ destinatario, assunto, conteudo }): Observable<Email> {
    const emailParaApi = {
      to: destinatario,
      subject: assunto,
      content: conteudo
    }

    return this.http
      .post<IEmailAPI>(this.api, emailParaApi,
        { headers: this.cabecalho })
      .pipe(
        map(
          (emailApi) => {
            return new Email({
              destinatario: emailApi.to,
              assunto: emailApi.subject,
              conteudo: emailApi.content,
              dataDeEnvio: emailApi.created_at
            });
          }
        )
      );
  }
}

interface IEmailAPI {
  to: string;
  subject: string;
  content: string;
  created_at: string;
}
