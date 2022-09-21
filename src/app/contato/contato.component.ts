import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  formContato = this.fb.group({
    nome: ["", [
      Validators.minLength(4),
      Validators.required /* O campo não é opcional, é obrigatório! */
    ]],
    assunto: ["", [
      Validators.minLength(10),
      Validators.required /* O campo não é opcional, é obrigatório! */
    ]],
    telefone: ["", [
      Validators.minLength(11),
      Validators.required /* O campo não é opcional, é obrigatório! */
    ]],
    email: ["", [
      Validators.email,
      Validators.required
    ]],
    mensagem: ["", [
      Validators.minLength(20),
      Validators.required /* O campo não é opcional, é obrigatório! */

    ]]
  });

  constructor(
    private fb: FormBuilder
  ) { }
   
  ngOnInit(): void {
  }
  enviarFormulario(){
    alert("A Mensagem foi enviada!");
    this.formContato.reset();
  }
}
