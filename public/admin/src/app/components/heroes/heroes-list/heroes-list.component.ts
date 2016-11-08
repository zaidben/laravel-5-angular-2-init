
import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

import {HeroesService} from "../../../services/heroes.service";
import {Hero} from "../../../models/hero.model";

@Component({
    selector: "heroes-list",
    templateUrl: "./admin/build/app/components/heroes/heroes-list/heroes-list.html",
    styleUrls:['./admin/build/app/components/heroes/heroes-list/heroes-list.css'],
})
export class HeroesListComponent implements OnInit {

    /// SERVICES
    private router : Router;
    private heroesService : HeroesService;

    /// DATA
    public heroes:Hero[] = [];

    /// CONSTRUCTOR
    constructor (router: Router, heroesService: HeroesService) {
        this.router = router;
        this.heroesService = heroesService;
    }

    /// ngOnInit
    ngOnInit() {
        this.heroes = this.heroesService.getHeroes();
    }

    /// onSelect FUNCTION
    onSelect (hero) {
        this.router.navigate(['/heroes', hero.id]);
    }
}