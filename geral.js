var Inicializando = require('./Page Object/inicializando')
var Facebook = require('./Page Object/acessoFacebook')

describe('Aprendendo facebook', function() {

    var inicializando = new Inicializando()
    var facebook = new Facebook()

    it('inicializando', function() {
        inicializando.iniciandoFacebook()    
    }); 

    it('facebook1', function() {
         facebook.acessoFacebook()
    });

    it('facebook2', function(){
        facebook.publicarFacebook()
    })
});
 

  