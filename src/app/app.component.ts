import { Component, ViewEncapsulation } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { browser } from 'protractor';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app';
  private sesion: Boolean = false;
  private git: Boolean = false;
  private admin: Boolean = false;
  private login: Boolean = false;
  constructor(private route: ActivatedRoute, public router: Router) {
  }

  openMenu(){
    document.getElementById("btnmenu").click();
  }

  openToolMenu(){
    document.getElementById("btnbuild").click();
  }

  closeSession(){
    sessionStorage.clear();
    this.git=false;
    this.admin=false;
    this.sesion=false;
    this.router.navigate(['/home']);
    document.getElementById("btnmenu").setAttribute("disabled", "disabled");
   
  }
}
