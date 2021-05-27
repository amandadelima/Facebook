let Inicializando = function(){

    
    this.url = "https://www.facebook.com/"

    this.iniciandoFacebook = function(){
        browser.waitForAngularEnabled(false);     
        browser.driver.get(this.url);
        browser.driver.manage().window().maximize();
    }

}

module.exports = Inicializando 