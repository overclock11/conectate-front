import { browser, by, element } from 'protractor';
import { last } from 'rxjs/operator/last';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  navigateToDetail(id: number) {
    browser.get('/tool/' + id + '/detail');
    return element(by.xpath('//h2[contains(text(), "Angular")]')).getText();

  }

  navigateToDetailName() {
    element(by.xpath('//a[contains(text(), "Angular")]')).click();
    return element(by.xpath('//h2[contains(text(), "Angular")]')).getText();

  }

  navigateBackToHome() {
    element(by.css('.navbar-brand img')).click();
    //element(by.cssContainingText('a', 'Inicio')).click();
    return element(by.id('search')).getText();
  }

  enterValidKeyWords(search: string) {
    element(by.tagName('input')).sendKeys(search);
    browser.sleep(2000);
    element(by.buttonText('Buscar')).click();
    browser.sleep(2000);
  }

  getSearch() {
    //return element(by.tagName('input')).getText();
    //return element(by.css('app-root h1')).getText();
    return element(by.cssContainingText('a', 'Moodle')).getText();
  }

  showMenu() {
    browser.sleep(2000)
    element(by.cssContainingText('a','¿Eres miembro conectate?')).click();
    return element.all(by.css('.dropdown-item')).getText();
  }

  /*getOptions() {
    return element.all(by.css('.dropdown-item')).getText();
  }*/

  navigateToGitProfile(){
    element(by.cssContainingText('a','Inicio Asesor')).click();
    return element(by.cssContainingText('a','Carlos')).getText();
  }
  
  BeInGitProfile(){
    return element(by.cssContainingText('a','Carlos')).getText();
  }

  navigateToAdminProfile(){
    element(by.cssContainingText('a','Inicio Admin')).click();
    return element(by.cssContainingText('a','Santiago')).getText();
  }
  
  BeInAdminProfile(){
    return element(by.cssContainingText('a','Santiago')).getText();
  }
  navigateToAddToolPage() {
    //browser.get('/tool');
    element(by.cssContainingText('span','Agregar Herramienta')).click();
    return element(by.css('app-root h4')).getText();
  }

  editToolDraftInputs() {
    element(by.id('txtNombre')).sendKeys('Jira Confluence');
    element(by.id('txtKeyWords')).sendKeys('Administrador, archivos, Control');
    element(by.id('mat-input-2')).sendKeys('Herramienta para control de avance y documentación');
    element(by.id('mat-input-3')).sendKeys('Ninguna');
    element(by.id('txtVersion')).sendKeys('2');
    element(by.id('txtUrl')).sendKeys('https://www.youtube.com/watch?v=DzXlZPsOiOk');
  }

  selectToolDraftOptions() {
    element(by.id('state')).click();
    browser.sleep(2000);
    element(by.xpath('//span[contains(text(), "Borrador")]')).click();
    element(by.id('txtLicense')).click();
    browser.sleep(2000);
    element(by.xpath('//span[contains(text(), "Abierta")]')).click();
    browser.sleep(2000);
    element(by.id('txtIntegrationLms')).click();
    browser.sleep(2000);
    element(by.xpath('//span[contains(text(), "No")]')).click();
    
   }

   selectToolDraftSO() {
    element(by.id('SO')).click();
    browser.sleep(2000);
    element(by.xpath('//span[contains(text(), "Windows")]')).click();
    element(by.css('.cdk-overlay-backdrop.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing')).click();

   }


   saveToolDraft(){
    browser.sleep(2000);
    element(by.id('btnGuardar')).click(); 
    browser.sleep(2000);
    element(by.id('NoEdit')).click();
    browser.sleep(2000);
    return element(by.cssContainingText('a', 'Jira Confluence')).getText();
  }

  cancelToolDraft(){
    element(by.id('Cancelar')).click();   
    return element(by.id('search')).getText(); 
  }

  chooseFilterOptions(){
    element(by.cssContainingText('span','No')).click();
    browser.sleep(2000);
    element(by.cssContainingText('span','Windows')).click();
    element(by.cssContainingText('span','Abierta')).click();
    element(by.cssContainingText('span','1 o +')).click();
    return element(by.cssContainingText('a', 'Cacoo')).getText();
  }

  verifyDraft(){
    //let draft=element.all(by.tagName('a')).last();
    //draft.click();
    element(by.cssContainingText('a', 'Jira Confluence')).click();
    browser.sleep(2000);
    element(by.id('btnVerificar')).click();
  }

  publishDraft(){
     //let draft=element.all(by.tagName('a')).last();
    //draft.click();
    element(by.cssContainingText('a', 'Jira Confluence')).click();
    element(by.id('Publicar')).click();
  }

  closeAdminSesion(){
    element(by.cssContainingText('a','Santiago')).click();
    element(by.cssContainingText('a','Cerrar sesión')).click();
    return element(by.cssContainingText('a','¿Eres miembro conectate?')).getText();
  }

  closeGitSesion(){
    element(by.cssContainingText('a','Carlos')).click();
    element(by.cssContainingText('a','Cerrar sesión')).click();
    return element(by.cssContainingText('a','¿Eres miembro conectate?')).getText();
  }

  getNewTool(){
    return element(by.cssContainingText('a','Jira Confluence')).getText();
  }

  navigateToAddExamplePage() {
    element(by.cssContainingText('a', 'Jira Confluence')).getText();
    element(by.id('Add')).click();
    return element(by.css('.col-md-12 h1')).getText();
  }  

  editExampleDraftInputs() {
    element(by.id('name')).sendKeys('Ejemplo1');
    element(by.name('description')).sendKeys('Desc');
    element(by.name('Instrucciones')).sendKeys('Leer capitulo 2');
    browser.sleep(2000);
    element(by.id('nombre')).sendKeys('Manifiesto Agil');
    element(by.id('Enlace')).sendKeys('http://www.agilemanifesto.org');
    browser.sleep(2000);
    
  }

  editExampleDraftResource(){
    element(by.xpath('//span[contains(text(), "Agregar recurso")]')).click();
    let secondName= element.all(by.id('nombre')).last();
    secondName.sendKeys('Libro');
    browser.sleep(2000);
    let secondUrl= element.all(by.id('Enlace')).last();
    secondUrl.sendKeys('otro');
    element(by.xpath('//span[contains(text(), "Agregar recurso")]')).click();
    let lasDelete=element.all(by.css('.fas.fa-trash')).last();
    lasDelete.click();
  }

  selectExampleDraftOptions() {
    element(by.name('discipline')).click();
    browser.sleep(2000);
    element(by.xpath('//span[contains(text(), "Ciencias exactas")]')).click();
    element(by.name('pedagogicStrategy')).click();
    element(by.xpath('//span[contains(text(), "Blended")]')).click();
    browser.sleep(2000);
   }

   saveExampleDraft(){
    element(by.id('Guardar')).click();
    return element(by.cssContainingText('.mat-card-title', 'Ejemplo1')).getText(); 
   }

   navigateToAddTutorialPage() {
    browser.sleep(3000);
    element(by.cssContainingText('a', 'Moodle')).click();
    browser.sleep(3000);
    element(by.id('btnAgregarTutorial')).click();
    return element(by.css('.col-12 h2')).getText();
   }

   editTutorialDraftInputs() {
    element(by.id('txtNombre')).sendKeys('Tutorial Angular');
    element(by.name('txtUrl')).sendKeys('https://www.youtube.com/watch?v=Sx_2dOYOtes');
       
   }

   saveTutorialDraft(){
    element(by.id('SaveTut')).click();
    element(by.id('CancelTut')).click();
    return element(by.cssContainingText('.mat-card-title', 'Tutorial Angular')).getText(); 
   }

/*






  



  returnHome(){
    browser.get('/');
    let tool = element.all(by.tagName('a')).last();
    return tool.getText();
  }

  navigateToDraftsView(){
    browser.get('/tool/drafts');
    let tool = element.all(by.tagName('a')).last();
    return tool.getText();
  }

  

  editExampleDraftInputs() {
    element(by.id('Add')).click();
    element(by.id('name')).sendKeys('Ejemplo1');
    element(by.id('mat-input-2')).sendKeys('Desc');
    element(by.id('mat-input-3')).sendKeys('Leer capitulo 2');
    browser.sleep(2000);
    element(by.id('nombre')).sendKeys('Manifiesto Agil');
    element(by.id('Enlace')).sendKeys('http://www.agilemanifesto.org');
    browser.sleep(2000);
    
  }

  editExampleDraftResource(){
    element(by.xpath('//span[contains(text(), "Agregar recurso")]')).click();
    let secondName= element.all(by.id('nombre')).last();
    secondName.sendKeys('Libro');
    browser.sleep(2000);
    let secondUrl= element.all(by.id('Enlace')).last();
    secondUrl.sendKeys('otro');
    element(by.xpath('//span[contains(text(), "Agregar recurso")]')).click();
    let lasDelete=element.all(by.css('.fas.fa-trash')).last();
    lasDelete.click();
  }

  selectExampleDraftOptions() {
    element(by.name('discipline')).click();
    browser.sleep(2000);
    element(by.xpath('//span[contains(text(), "Ciencias exactas")]')).click();
    element(by.name('pedagogicStrategy')).click();
    element(by.xpath('//span[contains(text(), "Blended")]')).click();
    browser.sleep(2000);
   }

  saveExampleDraft(){
   element(by.id('Guardar')).click();
   return element(by.tagName('h2')).getText();   
  }

  cancelExampleDraft(){
    element(by.buttonText('Cancelar')).click();
    return element(by.tagName('h2')).getText();
  }



  publishDraft(){
    browser.sleep(3000);
    element(by.buttonText('Publicar')).click();
  }*/

}
