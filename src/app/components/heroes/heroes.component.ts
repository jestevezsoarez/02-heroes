import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[];
  //idx: number;

  constructor( private _heroesService: HeroesService,
                private router: Router ) { }

  ngOnInit(): void {

    this.heroes = this._heroesService.getHeroes();    
    
  }

  verHeroe(idx: number) {
    console.log(idx);
    
    this.router.navigate(['heroe', idx]);
  }
}
