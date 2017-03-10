import {inject} from "aurelia-dependency-injection";
import { AuthService } from "aurelia-authentication";

@inject(AuthService)
export class Cliente {
    constructor(authService) {
        this.statusLogin = authService.getAccessToken();
    }
}