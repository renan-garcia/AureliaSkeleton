export class App {

  configureRouter(config, router){
    config.title = 'Tokyo Erp';
    config.map([
      { route: '',  moduleId: 'views/login/login',   title: 'Login'},
      { route: 'logado',  moduleId: 'views/login/logado', nav: true,  title: 'Logado', name: 'logado'}
    ]);

    this.router = router;
  }
}