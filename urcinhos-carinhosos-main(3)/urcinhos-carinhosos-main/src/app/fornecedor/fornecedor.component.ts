import { Fornecedor } from './../domain/fornecedor';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FornecedorService } from '../service/fornecedor.service';
import { FornecedorModel } from '../model/fornecedor-model';

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.scss'],
})
export class FornecedorComponent implements OnInit {
  fornecedores: FornecedorModel[] = [];

  form: FormGroup = this.formBuilder.group({
    nome: new FormControl(null, [Validators.required, Validators.minLength(2)]),
    cnpj: new FormControl(null, [
      Validators.required,
      Validators.minLength(11),
    ]),
    aniver: new FormControl(null, [Validators.required]),
  });

  constructor(
    private formBuilder: FormBuilder,
    private fornecedorService: FornecedorService
  ) {}

  ngOnInit(): void {
    this.consultar();
  }

  cadastrar(): void {}

  cegonha(): void {
    this.fornecedorService.cegonha().subscribe((f: FornecedorModel) => {
      if (f.id) {
        this.consultar();
      }
    });
  }

  consultar(): void {
    this.fornecedorService
      .consultar()
      .subscribe((fornecedores: FornecedorModel[]) => {
        this.fornecedores = fornecedores;
      });
  }

  excluir(fornecedor: FornecedorModel): void {
    this.fornecedorService.remover(fornecedor.id).subscribe(() => {
      this.consultar();
    });
  }
}
