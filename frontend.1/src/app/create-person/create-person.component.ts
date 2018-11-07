import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.scss']
})
export class CreatePersonComponent implements OnInit {

  public fields = [
    { name: 'codMateria', value: null },
    { name: 'nome', value: null },
    { name: 'ementa', value: null },
    { name: 'preRequisitos', value: null },
  ];

  url = 'localhost:8081/materia';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

  public createAluno() {
    const body = {};
    this.fields.forEach(field => body[field.name] = parseInt(field.value, 10));

    this.http.post(this.url, body).subscribe(
      value => {
        alert('Materia criada!');
        console.log(value);
      }
    );
  }
}
