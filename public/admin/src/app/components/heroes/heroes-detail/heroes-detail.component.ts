import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute, Params} from "@angular/router";

import {HeroesService} from "../../../services/heroes.service";
import {Hero} from "../../../models/hero.model";

@Component({
    selector: "heroes-detail",
    templateUrl: "./admin/build/app/components/heroes/heroes-detail/heroes-detail.html",
    styleUrls:['./admin/build/app/components/heroes/heroes-detail/heroes-detail.css'],
})
export class HeroesDetailComponent implements OnInit {

    /// DATA 
    public hero: Hero;

    /// constructor
    constructor (
        private route: ActivatedRoute,
        private router: Router,
        private heroesService: HeroesService
    ) {}

    /// ngOnInit FUNCTION
    ngOnInit() {
        this.route.params.forEach((params : Params) => {
            let id = +params['id'];
            this.hero = this.heroesService.getHero(id);
            if (this.hero == null || this.hero == undefined) {
                this.router.navigate(['/heroes']);
            }
        });
    }

    /// goToHeroes FUNCTION
    goToHeroes () {
        this.router.navigate(['/heroes', {id:this.hero.id}]);
    }

    /// updateHero FUNCTION
    updateHero () {
        this.heroesService.updateHero(this.hero);
        this.router.navigate(['/heroes', {id:this.hero.id}]);
    }
}