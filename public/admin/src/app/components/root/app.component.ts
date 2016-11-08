
import {Component, OnInit} from "@angular/core";



@Component({
    selector: "app",
    templateUrl: "./admin/build/app/components/root/app.html",
    styleUrls:['./admin/build/app/components/root/app.css'],
})
export class AppComponent implements OnInit {
    public title : string;

    constructor () {
        this.title = 'Hello world!';
    }

    ngOnInit() {
        console.log("Application component initialized ...");
    }
}