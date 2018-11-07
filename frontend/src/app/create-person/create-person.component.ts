import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.scss']
})
export class CreatePersonComponent {

  public fields = [
    { name: 'nome', value: null },
    { name: 'cpf', value: null }
  ];

  url = 'localhost:8080';

  constructor(private http: HttpClient) { }

  public createAluno() {
    const body = {};
    this.fields.forEach(field => body[field.name] = field.value);
    this.http.post(this.url, body).subscribe(
      value => {
        alert('Aluno criado!');
        console.log(value);
      }
    );
  }
}
