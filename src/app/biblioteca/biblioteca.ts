import { Component } from '@angular/core';
import { Header } from "../components/header/header";

interface Jogos {
  nome: string;
  ano: number;
  nota: number;
  sinopse: string;
  imgUrl: string;
}

@Component({
  selector: 'app-biblioteca',
  imports: [Header],
  templateUrl: './biblioteca.html',
  styleUrl: './biblioteca.css',
})
export class Biblioteca {
  jogos: Jogos[] = [
    {
      nome: 'Resident Evil 0',
      ano: 2002,
      nota: 83,
      sinopse:
        'Em 1998, Raccoon City sofre uma série de assassinatos estranhos, e a equipe Bravo da S.T.A.R.S. investiga um laboratório secreto da Umbrella.',
      imgUrl: 'assets/images/resident_evil0/library_600x900_2x.jpg',
    },
    {
      nome: 'Resident Evil',
      ano: 2002,
      nota: 91,
      sinopse:
        'Chris Redfield e Jill Valentine investigam assassinatos bizarros nos arredores de Raccoon City e encontram uma mansão cheia de horrores.',
      imgUrl: 'assets/images/resident_evil1/library_600x900.jpg',
    },
    {
      nome: 'Resident Evil 2',
      ano: 2019,
      nota: 91,
      sinopse:
        'Leon Kennedy e Claire Redfield tentam escapar de Raccoon City tomada por mortos-vivos em setembro de 1998.',
      imgUrl: 'assets/images/resident_evil2/library_600x900.jpg',
    },
    {
      nome: 'Resident Evil 3',
      ano: 2020,
      nota: 79,
      sinopse:
        'Jill Valentine foge de Raccoon City enquanto enfrenta o implacável Nemesis e hordas de mortos-vivos.',
      imgUrl: 'assets/images/resident_evil3/library_600x900.jpg',
    },
    {
      nome: 'Resident Evil 4',
      ano: 2023,
      nota: 93,
      sinopse:
        'Leon S. Kennedy é enviado à Espanha para resgatar a filha do presidente, sequestrada por um culto, enfrentando aldeões infectados pelo parasita Las Plagas.',

      imgUrl: 'assets/images/resident_evil4/library_600x900.jpg',
    },
    {
      nome: 'Resident Evil 5',
      ano: 2009,
      nota: 83,
      sinopse:
        'Chris Redfield e Sheva Alomar investigam um surto do vírus Uroboros na África, enfrentando infectados e vilões globais.',

      imgUrl: 'assets/images/resident_evil5/library_600x900.jpg',
    },
    {
      nome: 'Resident Evil 6',
      ano: 2012,
      nota: 67,
      sinopse:
        'Leon e Chris enfrentam surtos bioterroristas globais e uma nova ameaça capaz de dizimar a humanidade.',

      imgUrl: 'assets/images/resident_evil6/library_600x900.jpg',
    },
    {
      nome: 'Resident Evil 7 Biohazard',
      ano: 2017,
      nota: 86,
      sinopse:
        'Ethan Winters busca sua esposa desaparecida e enfrenta os horrores da família Baker na Louisiana.',

      imgUrl: 'assets/images/resident_evil7/library_600x900.jpg',
    },
    {
      nome: 'Resident Evil Village',
      ano: 2021,
      nota: 84,
      sinopse:
        'Ethan enfrenta uma vila sombria para resgatar sua filha, cercada por criaturas grotescas e governantes aterrorizantes.',

      imgUrl: 'assets/images/resident_evil8/library_600x900.jpg',
    },
    {
      nome: 'Resident Evil Requiem',
      ano: 2026,
      nota: 89,
      sinopse:
        'Raccoon City volta a ser palco de pesadelos biológicos e novas ameaças emergem das sombras do passado.',

      imgUrl: 'assets/images/resident_evil9/library_capsule.jpg',
    },
  ];
}
