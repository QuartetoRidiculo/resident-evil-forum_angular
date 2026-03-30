import { Component } from '@angular/core';

interface Jogos {
  nomeJogo: string;
  ano: number;
  notaMetacritic: number;
  miniSinopse: string;
  sinopse: string;
  imagemThumb: string;
  imagemModal: string;
}

@Component({
  selector: 'app-biblioteca',
  imports: [],
  templateUrl: './biblioteca.html',
  styleUrl: './biblioteca.css',
})

export class Biblioteca {
  jogos: Jogos[] = [
    {
      nomeJogo: 'Resident Evil 0',
      ano: 2002,
      notaMetacritic: 83,
      miniSinopse:
        'Em 1998, Raccoon City sofre uma série de assassinatos estranhos, e a equipe Bravo da S.T.A.R.S. investiga um laboratório secreto da Umbrella.',
      sinopse:
        'Rebecca Chambers e Billy Coen descobrem horrores mutantes e experimentos biológicos da Umbrella Corporation em uma floresta próxima a Raccoon City, lutando para sobreviver e impedir a ameaça global.',
      imagemThumb: 'assets/images/resident_evil0/library_600x900_2x.jpg',
      imagemModal: 'assets/images/resident_evil0/library_hero.jpg',
    },
    {
      nomeJogo: 'Resident Evil',
      ano: 2002,
      notaMetacritic: 91,
      miniSinopse:
        'Chris Redfield e Jill Valentine investigam assassinatos bizarros nos arredores de Raccoon City e encontram uma mansão cheia de horrores.',
      sinopse:
        'Presos em uma mansão isolada nas Montanhas Arklay, Chris e Jill enfrentam monstros mutantes e armadilhas da Umbrella Corporation, tentando desvendar os segredos por trás do vírus mortal.',
      imagemThumb: 'assets/images/resident_evil1/library_600x900.jpg',
      imagemModal: 'assets/images/resident_evil1/library_hero.jpg',
    },
    {
      nomeJogo: 'Resident Evil 2',
      ano: 2019,
      notaMetacritic: 91,
      miniSinopse:
        'Leon Kennedy e Claire Redfield tentam escapar de Raccoon City tomada por mortos-vivos em setembro de 1998.',
      sinopse:
        'Leon e Claire enfrentam hordas de mortos-vivos e monstros grotescos criados pelos experimentos da Umbrella Corporation enquanto procuram sobreviver e descobrir a origem do surto do T-Virus.',
      imagemThumb: 'assets/images/reviews/resident_evil2/library_600x900.jpg',
      imagemModal: 'assets/images/reviews/resident_evil2/re2.jpg',
    },
    {
      nomeJogo: 'Resident Evil 3',
      ano: 2020,
      notaMetacritic: 79,
      miniSinopse:
        'Jill Valentine foge de Raccoon City enquanto enfrenta o implacável Nemesis e hordas de mortos-vivos.',
      sinopse:
        'Após os eventos da mansão Arklay, Jill tenta escapar de uma cidade tomada por zumbis e monstros biológicos, enquanto o Nemesis, uma arma biológica da Umbrella, persegue qualquer sobrevivente da S.T.A.R.S.',
      imagemThumb: 'assets/images/resident_evil3/library_600x900.jpg',
      imagemModal: 'assets/images/resident_evil3/library_hero.jpg',
    },
    {
      nomeJogo: 'Resident Evil 4',
      ano: 2023,
      notaMetacritic: 93,
      miniSinopse:
        'Leon S. Kennedy é enviado à Espanha para resgatar a filha do presidente, sequestrada por um culto, enfrentando aldeões infectados pelo parasita Las Plagas.',
      sinopse:
        'Seis anos após o desastre em Raccoon City, Leon, agora agente especial, enfrenta um culto perigoso e aldeões infectados, tentando salvar Ashley Graham e impedir uma nova catástrofe biológica.',
      imagemThumb: 'assets/images/resident_evil4/library_600x900.jpg',
      imagemModal: 'assets/images/resident_evil4/library_hero.jpg',
    },
    {
      nomeJogo: 'Resident Evil 5',
      ano: 2009,
      notaMetacritic: 83,
      miniSinopse:
        'Chris Redfield e Sheva Alomar investigam um surto do vírus Uroboros na África, enfrentando infectados e vilões globais.',
      sinopse:
        'Anos após Raccoon City, Chris e Sheva enfrentam novos horrores bio-orgânicos na África, combatendo vilarejos infectados, mutantes e conspiradores que ameaçam espalhar o vírus pelo mundo.',
      imagemThumb: 'assets/images/resident_evil5/library_600x900.jpg',
      imagemModal: 'assets/images/resident_evil5/library_hero.jpg',
    },
    {
      nomeJogo: 'Resident Evil 6',
      ano: 2012,
      notaMetacritic: 67,
      miniSinopse:
        'Leon e Chris enfrentam surtos bioterroristas globais e uma nova ameaça capaz de dizimar a humanidade.',
      sinopse:
        'Em diferentes continentes, Leon e Chris enfrentam horrores inimagináveis, mortos-vivos, mutantes e conspirações globais que colocam governos e civis em risco.',
      imagemThumb: 'assets/images/resident_evil6/library_600x900.jpg',
      imagemModal: 'assets/images/resident_evil6/library_hero.jpg',
    },
    {
      nomeJogo: 'Resident Evil 7 Biohazard',
      ano: 2017,
      notaMetacritic: 86,
      miniSinopse:
        'Ethan Winters busca sua esposa desaparecida e enfrenta os horrores da família Baker na Louisiana.',
      sinopse:
        'Ethan confronta uma família infectada por um patógeno misterioso, transformando humanos em monstros violentos e imprevisíveis, enquanto tenta resgatar sua esposa Mia.',
      imagemThumb: 'assets/images/resident_evil7/library_600x900.jpg',
      imagemModal: 'assets/images/resident_evil7/library_hero.jpg',
    },
    {
      nomeJogo: 'Resident Evil Village',
      ano: 2021,
      notaMetacritic: 84,
      miniSinopse:
        'Ethan enfrenta uma vila sombria para resgatar sua filha, cercada por criaturas grotescas e governantes aterrorizantes.',
      sinopse:
        'Depois da Louisiana, Ethan tenta reconstruir sua vida, mas é arrastado para uma vila sinistra onde deve enfrentar monstros e figuras aterrorizantes para salvar sua filha.',
      imagemThumb: 'assets/images/resident_evil8/library_600x900.jpg',
      imagemModal: 'assets/images/resident_evil8/library_hero.jpg',
    },
    {
      nomeJogo: 'Resident Evil Requiem',
      ano: 2026,
      notaMetacritic: 89,
      miniSinopse:
        'Raccoon City volta a ser palco de pesadelos biológicos e novas ameaças emergem das sombras do passado.',
      sinopse:
        'Novos sobreviventes lutam para escapar de Raccoon City, enfrentando novas ameaças infectadas, experimentos fora de controle e conspirações sombrias da Umbrella Corporation.',
      imagemThumb: 'assets/images/resident_evil9/library_capsule.jpg',
      imagemModal: 'assets/images/resident_evil9/library_hero.jpg',
    },
  ];
}
