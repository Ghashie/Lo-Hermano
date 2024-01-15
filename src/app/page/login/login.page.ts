import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LoginService } from 'src/app/model/login.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = '';
  senha: string = '';
  constructor(private service: LoginService, 
    private navCtrl: NavController, private toastController: ToastController) { }

  ngOnInit() {
  }

  login() {
    if (this.email && this.senha) {
      this.service.login(this.email, this.senha).then(
        result => {
          console.log('Usuario logado', result.user);
          this.presentToast('Login realizado com sucesso');
          this.navCtrl.navigateForward('/home');
        }
      ).catch(
        error => {
          console.log('Error ao fazer login', error);
          this.presentToast('Erro ao fazer login. Verifique suas credenciais');
        }
      );
    } else {
      this.presentToast('Preencha todos os campos');
    }
  }
  
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000, // Tempo em milissegundos que o Toast ficará visível
      position: 'bottom', // Posição do Toast (top, bottom, middle)
      color: message.includes('sucesso') ? 'success' : 'danger' // Define a cor do Toast com base no tipo de mensagem
    });
    toast.present();
  }
}
