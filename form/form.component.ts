import { Component, OnInit } from '@angular/core';
import { CepService } from './cep.service'
import {
	FormControl,
	FormBuilder,
	Validators,
	FormGroup
} from '@angular/forms';

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
	profileForm;

	constructor(
		private fb: FormBuilder,
		private cepService: CepService
	) {
		this.profileForm = this.fb.group({
			beneficiario: ['', Validators.required],
			email: ['', Validators.required],
			telefone: ['', Validators.required],
			cep: [''],
			endereco: ['', Validators.required],
			numero: ['', Validators.required],
			complemento: ['', Validators.required],
			bairro: ['', Validators.required],
			campo: ['', Validators.required],
			cidade: ['', Validators.required],
			estado: ['', Validators.required]
		});
	}

	ngOnInit() {}
	 

	fillAddress() {
		this.cepService.searchCep(this.profileForm.controls.cep.value).subscribe(resultado => {

			this.profileForm.controls.endereco.setValue(resultado['logradouro']);
			this.profileForm.controls.bairro.setValue(resultado['bairro']);
			this.profileForm.controls.cidade.setValue(resultado['localidade']);
			this.profileForm.controls.estado.setValue(resultado['uf']);
		})
	}

	sendEmail(event) {
		event.preventDefault();
		console.log(this.profileForm.value);
	}
}
