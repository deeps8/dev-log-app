import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  screenWidth:number;
  currentRoute:any;
  navStatus:boolean = false;
  urlNavClose:Array<string> = ["auth","dashboard"];

  constructor(private router: Router) {
    this.screenWidth = window.innerWidth;
    window.onresize = () => {
        // set screenWidth on screen size change
        this.screenWidth = window.innerWidth;
      };
    }

    ngOnInit(): void {

      this.router.events.pipe( filter(event => event instanceof NavigationEnd))
          .subscribe(event =>
           {
              this.currentRoute = event;
              // checking for url and closing side nav for certain routes.
              for(let i = 0; i < this.urlNavClose.length; i++) {
                if(this.currentRoute.url.indexOf(this.urlNavClose[i])>=0){
                  this.navStatus = false;
                  break;
                }else{
                  this.navStatus = true;
                }
              }
    });

  }

}
