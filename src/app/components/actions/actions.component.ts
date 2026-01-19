import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-actions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent {
  constructor(private translationService: TranslationService) {}

  translate(key: string): string {
    return this.translationService.translate(key);
  }

  handleReservation(): void {
    alert(this.translate('makeReservation') + ' - Feature coming soon!');
  }

  handleRentCava(): void {
    window.location.href = 'https://kavasoft.duckdns.org/company/rent/1';
  }

  handleViewMenu(): void {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
