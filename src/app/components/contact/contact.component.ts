import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  formData = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  submitted = false;

  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {}

  translate(key: string): string {
    return this.translationService.translate(key);
  }

  submitForm(): void {
    if (this.formData.name && this.formData.email && this.formData.message) {
      console.log('Form submitted:', this.formData);
      alert('¡Gracias por tu mensaje! / Thank you for your message!');
      this.resetForm();
    } else {
      alert('Por favor completa todos los campos / Please fill all fields');
    }
  }

  resetForm(): void {
    this.formData = {
      name: '',
      email: '',
      phone: '',
      message: ''
    };
  }
}
