
import {Hero} from "../models/hero.model";

export class HeroesService {
    /// DATA 
    public heroes: Hero[] = [
        {id :1, name: 'zaidbentaleb'},
        {id: 2, name: 'amrbentaleb'},
        {id: 3, name: 'nouhabentaleb'},
    ];

    /// getHeroes FUNCTION
    getHeroes () {
        return this.heroes;
    }

    /// getHero FUNCTION
    getHero (id) : Hero {
        let r: Hero;
        for (let i = 0 ; i < this.heroes.length ; i++) {
            if (this.heroes[i].id == id) {
                return this.heroes[i];
            }
        }
        return r;
    }

    /// updateHero FUNCTION
    updateHero (hero: Hero) {
        for (let i = 0 ; i < this.heroes.length ; i++) {
            if (this.heroes[i].id == hero.id) {
                return this.heroes[i] = hero;
            }
        }
    }
}