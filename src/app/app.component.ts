import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'managervista';
  prueba:string="e";
  hide:any = true;


  lbl_login:string="Iniciar sesion";
  public lbl_usuario : string = environment.usuario;
  public lbl_contrasena : string = environment.lbl_pass;

}
