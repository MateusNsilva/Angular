import { Component, OnInit } from '@angular/core';
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

    constructor(private fb: FormBuilder) {
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
            estado: ['', Validators.required],
        });
    }

    ngOnInit() { }

    sendEmail(event) {
        event.preventDefault();
        console.log(this.profileForm.value);
    }
}
