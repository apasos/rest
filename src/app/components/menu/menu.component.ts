import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

interface MenuItem {
  titleKey: string;
  descriptionKey: string;
  price: string;
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  appetizers: MenuItem[] = [
    { titleKey: 'seabassItem', descriptionKey: 'seabassDesc', price: '€16' },
    { titleKey: 'carpaccioItem', descriptionKey: 'carpaccioDesc', price: '€18' },
    { titleKey: 'calamariItem', descriptionKey: 'calamariDesc', price: '€12' }
  ];

  mainCourses: MenuItem[] = [
    { titleKey: 'duckItem', descriptionKey: 'duckDesc', price: '€38' },
    { titleKey: 'beefItem', descriptionKey: 'beefDesc', price: '€45' },
    { titleKey: 'lambrItem', descriptionKey: 'lambDesc', price: '€40' }
  ];

  desserts: MenuItem[] = [
    { titleKey: 'souflé', descriptionKey: 'soufléDesc', price: '€10' },
    { titleKey: 'pannaCotta', descriptionKey: 'pannaCottaDesc', price: '€9' }
  ];

  constructor(private translationService: TranslationService) {}

  translate(key: string): string {
    return this.translationService.translate(key);
  }
}
