import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Translations {
  [key: string]: string;
}

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLanguage = new BehaviorSubject<string>('es');
  public currentLanguage$ = this.currentLanguage.asObservable();

  private translations: { [key: string]: Translations } = {
    es: {
      // Navigation
      menu: 'Menú',
      reserve: 'Reservar',
      contact: 'Contacto',
      rentCava: 'Alquilar Cava',
      
      // Hero
      welcome: 'Bienvenido a Gastro Elegancia',
      tagline: 'Experiencia Culinaria de Lujo',
      subtitle: 'Descubre el arte de la gastronomía combinado con los mejores vinos y cavas',
      
      // Features
      fancyRestaurant: 'Restaurante de Lujo',
      fancyRestaurantDesc: 'Ambiente sofisticado con una cuidadosa decoración y servicio de clase mundial',
      greatExperience: 'Gran Experiencia',
      greatExperienceDesc: 'Cada plato cuenta una historia, preparado por nuestros chefs de renombre internacional',
      cavaManagement: 'Gestión de Cavas',
      cavaManagementDesc: 'Amplia selección de los mejores cavas y vinos españoles',
      
      // Menu
      menuTitle: 'Menú Demo',
      appetizers: 'Aperitivos',
      mainCourses: 'Platos Principales',
      desserts: 'Postres',
      
      // Sample menu items
      seabassItem: 'Lubina a la sal con caviar',
      seabassDesc: 'Lubina fresca con flor de sal y caviar beluga',
      
      duckItem: 'Pato confitado con reducción de vino',
      duckDesc: 'Pato de 48 horas con salsa de vino tinto y purés variados',
      
      carpaccioItem: 'Carpaccio de atún rojo',
      carpaccioDesc: 'Atún rojo seleccionado con aceite de trufa y microgreens',
      
      calamariItem: 'Calamares a la romana',
      calamariDesc: 'Calamares tiernos con salsa tártara casera',
      
      beefItem: 'Carne Wagyu A5',
      beefDesc: 'Corte de Wagyu seleccionado con puré de trufa',
      
      lambrItem: 'Cordero lechal al ajillo',
      lambDesc: 'Cordero lechal asado lentamente con ajo negro',
      
      souflé: 'Suflé de Grand Marnier',
      soufléDesc: 'Ligero suflé con salsa de naranja',
      
      pannaCotta: 'Panna Cotta de vainilla',
      pannaCottaDesc: 'Panna cotta clásica con coulis de frutas rojas',
      
      // Actions
      viewMenu: 'Ver Menú Completo',
      makeReservation: 'Hacer una Reserva',
      rentCavaSection: 'Alquilar una Cava Privada',
      contactUs: 'Contáctenos',
      
      // Contact
      contactTitle: 'Póngase en Contacto',
      name: 'Nombre',
      email: 'Correo Electrónico',
      phone: 'Teléfono',
      message: 'Mensaje',
      send: 'Enviar',
      
      // Footer
      address: 'Dirección: Calle Gourmet 123, Madrid, España',
      hours: 'Horario: Martes - Domingo, 19:00 - 23:30',
      phone_label: 'Teléfono: +34 91 234 5678',
      email_label: 'Email: info@gastroel.com',
      allRightsReserved: 'Todos los derechos reservados'
    },
    en: {
      // Navigation
      menu: 'Menu',
      reserve: 'Reserve',
      contact: 'Contact',
      rentCava: 'Rent a Cava',
      
      // Hero
      welcome: 'Welcome to Gastro Elegance',
      tagline: 'Luxury Culinary Experience',
      subtitle: 'Discover the art of gastronomy combined with the finest wines and cavas',
      
      // Features
      fancyRestaurant: 'Fancy Restaurant',
      fancyRestaurantDesc: 'Sophisticated ambiance with careful decoration and world-class service',
      greatExperience: 'Great Experience',
      greatExperienceDesc: 'Each dish tells a story, prepared by our internationally renowned chefs',
      cavaManagement: 'Cava Management',
      cavaManagementDesc: 'Wide selection of the best Spanish cavas and wines',
      
      // Menu
      menuTitle: 'Demo Menu',
      appetizers: 'Appetizers',
      mainCourses: 'Main Courses',
      desserts: 'Desserts',
      
      // Sample menu items
      seabassItem: 'Salt-baked Sea Bass with Caviar',
      seabassDesc: 'Fresh sea bass with Fleur de sel and Beluga caviar',
      
      duckItem: 'Confit Duck with Wine Reduction',
      duckDesc: '48-hour duck with red wine sauce and various purées',
      
      carpaccioItem: 'Red Tuna Carpaccio',
      carpaccioDesc: 'Selected red tuna with truffle oil and microgreens',
      
      calamariItem: 'Fried Squid',
      calamariDesc: 'Tender squid with homemade tartar sauce',
      
      beefItem: 'A5 Wagyu Beef',
      beefDesc: 'Selected Wagyu cut with truffle purée',
      
      lambrItem: 'Milk-fed Lamb with Garlic',
      lambDesc: 'Slowly roasted milk-fed lamb with black garlic',
      
      souflé: 'Grand Marnier Soufflé',
      soufléDesc: 'Light soufflé with orange sauce',
      
      pannaCotta: 'Vanilla Panna Cotta',
      pannaCottaDesc: 'Classic panna cotta with red fruit coulis',
      
      // Actions
      viewMenu: 'View Full Menu',
      makeReservation: 'Make a Reservation',
      rentCavaSection: 'Rent a Private Cava',
      contactUs: 'Contact Us',
      
      // Contact
      contactTitle: 'Get in Touch',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      message: 'Message',
      send: 'Send',
      
      // Footer
      address: 'Address: Gourmet Street 123, Madrid, Spain',
      hours: 'Hours: Tuesday - Sunday, 7:00 PM - 11:30 PM',
      phone_label: 'Phone: +34 91 234 5678',
      email_label: 'Email: info@gastroel.com',
      allRightsReserved: 'All rights reserved'
    }
  };

  setLanguage(lang: string): void {
    this.currentLanguage.next(lang);
  }

  getLanguage(): string {
    return this.currentLanguage.value;
  }

  translate(key: string): string {
    const lang = this.currentLanguage.value;
    return this.translations[lang]?.[key] || this.translations['en']?.[key] || key;
  }
}
