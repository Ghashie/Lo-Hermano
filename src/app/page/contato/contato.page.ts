import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contato',
  templateUrl: './contato.page.html',
  styleUrls: ['./contato.page.scss'],
})
export class ContatoPage implements OnInit {

  constructor() {}

  abrirRedeSocial(rede: string) {
    let url = '';
    switch (rede) {
      case 'facebook':
        url = 'https://www.facebook.com';
        break;
      case 'instagram':
        url = 'https://www.instagram.com';
        break;
      case 'twitter':
        url = 'https://www.twitter.com';
        break;
      case 'youtube':
        url = 'https://www.youtube.com';
        break;
    }
    window.open(url, '_blank');
  }


  ngOnInit() {
  }

}
