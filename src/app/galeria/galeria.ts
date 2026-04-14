import { Component } from '@angular/core';
import { Header } from "../components/header/header";

@Component({
  selector: 'app-galeria',
  imports: [Header],
  templateUrl: './galeria.html',
  styleUrl: './galeria.css',
})
export class Galeria {
images = [
  {
    text: "Atmosfera sombria — Resident Evil Village",
    imgUrl: "assets/images/galeria/atmosfera_re.jpg",
    tipo: "Arte",
  },
  {
    text: "Vilarejo sinistro — Resident Evil Village",
    imgUrl: "assets/images/galeria/re8.jpg",
    tipo: "Screenshot",
  },
  {
    text: "Terror na escuridão — Resident Evil 4",
    imgUrl: "assets/images/galeria/re4_banner.jpeg",
    tipo: "Arte",
  },
  {
    text: "Cidade em ruínas — Resident Evil Requiem",
    imgUrl: "assets/images/galeria/re2_del.jpg",
    tipo: "Screenshot",
  },
  {
    text: "Ataque frenético — Resident Evil 7",
    imgUrl: "assets/images/galeria/re7_marguerite.jpg",
    tipo: "Screenshot",
  },
  {
    text: "Encurralada no corredor — Resident Evil 2",
    imgUrl: "assets/images/galeria/re2_cornered.jpg",
    tipo: "Screenshot",
  },
  {
    text: "Faca tática — Resident Evil 4",
    imgUrl: "assets/images/galeria/re4_knife.jpg",
    tipo: "Screenshot",
  },
  {
    text: "Sala segura — Resident Evil",
    imgUrl: "assets/images/galeria/re1_jill.jpg",
    tipo: "Screenshot",
  },
  {
    text: "Laboratório Umbrella",
    imgUrl: "assets/images/galeria/art_lab.jpg",
    tipo: "Concept Art",
  },
  {
    text: "Arsenal de armas",
    imgUrl: "assets/images/galeria/armas.jpg",
    tipo: "Screenshot",
  },
];

}
