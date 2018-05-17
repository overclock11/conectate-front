import { Component, ViewEncapsulation } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app';

  private git: Boolean = false;
  private active: Boolean = true;
  constructor(private route: ActivatedRoute, public router: Router) {
  }

  showSideVar(){

    let asesor= sessionStorage.getItem('accedido');
    if (asesor) {
      this.git = true;
    }

  }
  closeSession(){
    sessionStorage.clear();
    this.git=false;
    document.getElementById("btnmenu").setAttribute("disabled", "disabled");
    this.router.navigate(['home']);
  }
}
