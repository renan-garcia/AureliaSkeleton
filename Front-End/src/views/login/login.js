import {inject} from "aurelia-dependency-injection";
import {AuthService} from "aurelia-authentication";

@inject(AuthService)
export class Login {

  username = 'renangarcia';

  password = 'renangarcia';

  currentToken = 'Não Logado';

  constructor(authService) {
    this.authService  = authService;
    let statusLogin = this.authService.getAccessToken();
    if(statusLogin)
      this.currentToken = "Logado";
    else
     this.currentToken = "Não logado";
     
  }

  validarLogin(){
    let statusLogin = this.authService.getAccessToken();
    if(statusLogin)
      this.currentToken = "Logado";
    else
     this.currentToken = "Não logado";
  }

  login() {
   
    return this.authService.login({
      username: this.username,
      password: this.password,
      grant_type: "password"
    },
    { 
      headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
    ).catch(error => {
      this.notification.error('Login failed!');

      console.error(error);
    });
  }
}