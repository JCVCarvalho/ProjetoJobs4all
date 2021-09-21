import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';

import config from '../../src/config';
import { Observable, throwError } from 'rxjs';

const URL_EMPREGADORES = `${config.URL_BACKEND}/empregadores`;

const URL_COLABORADORES = `${config.URL_BACKEND}/colaboradores`;

@Injectable({
    providedIn: 'root'
})
export class Jobs4allService {


    // injetando o HttpClient
    constructor(private httpClient: HttpClient) { }

    // Headers
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }


    // salva um empregador
    saveEmpregador(empregador: any): Observable<any> {
        return this.httpClient.post<any>(URL_EMPREGADORES, JSON.stringify(empregador), this.httpOptions)
            .pipe(
                retry(2),
                catchError(this.handleError)
            )
    }

      // salva um colaborador
      saveColaborador(colaborador: any): Observable<any> {
        return this.httpClient.post<any>(URL_COLABORADORES, JSON.stringify(colaborador), this.httpOptions)
            .pipe(
                retry(2),
                catchError(this.handleError)
            )
    }

     // Obtem todos os colaboradores
     getColaboradores(): Observable<any[]> {
        return this.httpClient.get<any[]>(URL_COLABORADORES)
            .pipe(
                retry(2),
                catchError(this.handleError))
    }

     // Obtem todos os empregadores cadastrados
     getEmpregadores(): Observable<any[]> {
        return this.httpClient.get<any[]>(URL_EMPREGADORES)
            .pipe(
                retry(2),
                catchError(this.handleError))
    }




    // Manipulação de erros
    handleError(error: HttpErrorResponse) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Erro ocorreu no lado do client
            errorMessage = error.error.message;
        } else {
            // Erro ocorreu no lado do servidor
            errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    };

}
