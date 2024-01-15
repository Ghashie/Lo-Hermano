import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle'; register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Início', url: 'home', icon: 'home' },
    { title: 'Cardápio', url: 'cardapio', icon: 'restaurant' },
    { title: 'Visitantes', url: 'visitantes', icon: 'people' },
    { title: 'Políticas de privacidade', url: 'politica', icon: 'warning' },
  
  ];
  
  constructor() {}
}
