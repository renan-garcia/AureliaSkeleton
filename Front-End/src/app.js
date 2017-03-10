export class App {

  configureRouter(config, router){
    config.title = 'Tokyo Erp';
    config.map([
       { route: '', moduleId: 'views/cliente/cliente',   title: 'Selecione'},
       { route: 'login', moduleId: 'views/login/login',   name: 'login'}

    ]);

    this.router = router;
  }
}