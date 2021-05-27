let Facebook = function(){

     this.inputEmail = $$(".inputtext._55r1._6luy").get(0) 
     this.inputSenha = $$(".inputtext._55r1._6luy").get(1)
     this.buttonEntrar = $$("._42ft._4jy0._6lth._4jy6._4jy1.selected._51sy").get(0)
    
    this.modalPublicacao = element(by.xpath('//*[@id="mount_0_0_6k"]/div/div[1]/div/div[3]/div/div/div[1]/div[1]/div/div[2]/div/div/div[3]/div/div[2]/div/div/div/div[1]/div/div[1]/span'));
    this.inputDigiteAlgo = element.all(by.css(".notranslate._5rpu"))
    // this.buttonPublicar2 = $$(".k4urcfbm.dati1w0a.hv4rvrfc.i1fnvgqd.j83agx80.rq0escxv.bp9cbjyn.discj3wi").get(0)


     this.acessoFacebook = function(){  
        this.inputEmail.click()
        this.inputEmail.sendKeys('')
        this.inputSenha.click()
        this.inputSenha.sendKeys('')
        this.buttonEntrar.click()
     }

     this.publicarFacebook = function(){
       
        
        browser.sleep(10000)
        this.modalPublicacao.click()
        browser.sleep(5000)
       // browser.switchTo().frame(element(by.tagName('iframe')).getWebElement());
        this.inputDigiteAlgo.click()
        browser.sleep(5000)
        this.inputDigiteAlgo.sendKeys('Bem vindo!')
        browser.sleep(10000)
       /* this.buttonPublicar2.click()
        browser.sleep(10000)*/
     }

}

module.exports = Facebook