import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {


  nick = '';
  ligada = false;

  puxando = false;
  startY = 0;
  distanciaFinal = 0;

  moverFn: any;
  soltarFn: any;
  mostrarErro = false;

get temNick() {
  return this.nick && this.nick.trim() !== '';
}

  constructor(private router: Router) {}

  iniciarPuxao(event: any, el: HTMLElement) {

    
    this.puxando = true;
   
     if (!this.nick || this.nick.trim() === '') {
      alert('Digite seu nick antes de entrar!');
      this.ligada = false;
      return;
      
    }
    

    this.ligada = true;

    this.startY = event.touches ? event.touches[0].clientY : event.clientY;

    this.moverFn = (e: any) => this.movendo(el, e);
    this.soltarFn = () => this.soltou(el);

    document.addEventListener('mousemove', this.moverFn);
    document.addEventListener('mouseup', this.soltarFn);

    document.addEventListener('touchmove', this.moverFn);
    document.addEventListener('touchend', this.soltarFn);
  }


  movendo(el: HTMLElement, event: any) {
    if (!this.puxando) return;

    const currentY = event.touches ? event.touches[0].clientY : event.clientY;
    let distancia = currentY - this.startY;

    if (distancia < 0) distancia = 0;
    if (distancia > 30) distancia = 30;

    this.distanciaFinal = distancia;

    el.style.transform = `translate(-50%, ${distancia}px)`;

   
    if (distancia > 20) {
      this.ligada = true;
    } else {
      this.ligada = false;
    }
  }

  soltou(el: HTMLElement) {
    this.puxando = false;

    el.style.transform = 'translate(-50%, 0px)';

  
    if (!this.nick || this.nick.trim() === '') {
      alert('Digite seu nick antes de entrar!');
      this.ligada = false;
      return;
    }


    if (this.distanciaFinal > 20) {
      this.ativarSistema();
    } else {
      
      this.ligada = false;
    }

    document.removeEventListener('mousemove', this.moverFn);
    document.removeEventListener('mouseup', this.soltarFn);

    document.removeEventListener('touchmove', this.moverFn);
    document.removeEventListener('touchend', this.soltarFn);
  }

  ativarSistema() {
    this.ligada = true;

    localStorage.setItem('nome', this.nick);

    console.log('Login ativado!');


    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 1000);
  }
}