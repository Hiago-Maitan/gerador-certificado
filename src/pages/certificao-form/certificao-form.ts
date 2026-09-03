import { Component } from '@angular/core';
import { SecondaryButton } from '../../app/_components/secondary-button/secondary-button';
import { PrimaryButton } from '../../app/_components/primary-button/primary-button';

@Component({
  selector: 'app-certificao-form',
  imports: [PrimaryButton,SecondaryButton],
  templateUrl: './certificao-form.html',
  styleUrl: './certificao-form.css'
})
export class CertificaoForm {

}
