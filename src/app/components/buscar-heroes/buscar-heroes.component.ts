import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-buscar-heroes',
  templateUrl: './buscar-heroes.component.html',
  styleUrls: ['./buscar-heroes.component.css']
})
export class BuscarHeroesComponent implements OnInit {

  arrBusqueda: Heroe[] = [];
  termino: string;

  constructor( private heroesService: HeroesService,
                private activatedRoute: ActivatedRoute,
                private router: Router ) { }

  ngOnInit(): void {    

    this.activatedRoute.params.subscribe( params => {

      this.arrBusqueda = this.heroesService.buscarHeroes( params['termino'] );
      this.termino = params['termino'];
      console.log(this.arrBusqueda);
            
    });
  }

  verHeroe( idx: number) {
    this.router.navigate(['heroe', idx]);
  }

}
