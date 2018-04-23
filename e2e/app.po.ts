import { browser, by, element } from 'protractor';
import { last } from 'rxjs/operator/last';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  navigateToDetail(id: number) {
    browser.get('/tool/' + id + '/detail');
    return element(by.xpath('//h4[contains(text(), "angular")]')).getText();

  }

  navigateToDetailName() {
    element(by.linkText('angular')).click();
    return element(by.xpath('//h4[contains(text(), "angular")]')).getText();

  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  hideMenu() {
    browser.sleep(2000)
    return element(by.css('.mat-icon-button')).click()
  }

  getOptions() {
    return element.all(by.css('app-root a')).getText();
  }

  enterValidKeyWords(search: string) {
    element(by.tagName('input')).sendKeys(search);
    browser.sleep(2000);
    element(by.buttonText('Buscar')).click();
    browser.sleep(2000);

  }

  getSearch() {
    //return element(by.tagName('input')).getText();
    return element(by.css('app-root h1')).getText();
  }

  navigateToAddToolPage() {
    browser.get('/tool');
    return element(by.css('app-root h2')).getText();
  }

  navigateToDrafts(){
    browser.get('/tool/lista');
    return element(by.css('.row h2')).getText();

  }

  navigateBackToHome() {
    element(by.linkText('Inicio')).click();
    return element(by.css('app-root h1')).getText();
  }

  navigateToAddExamplePage() {
    element(by.id('Add')).click();
    return element(by.css('.col-md-12 h1')).getText();
  }

  editToolDraftInputs() {
    element(by.id('txtNombre')).sendKeys('ToolName');
    element(by.id('txtKeyWords')).sendKeys('ToolName');
    element(by.id('mat-input-2')).sendKeys('Desc');
    element(by.id('mat-input-3')).sendKeys('Restrict');
    element(by.id('txtLicense')).sendKeys('Lic');
    element(by.id('txtVersion')).sendKeys('Ver');
    element(by.id('txtUrl')).sendKeys('https://www.youtube.com/watch?v=DzXlZPsOiOk');
  }

  selectToolDraftOptions() {
    element(by.id('state')).click();
    browser.sleep(2000);
    element(by.xpath('//span[contains(text(), "Borrador")]')).click();
    element(by.id('SO')).click();
    browser.sleep(2000);
    element(by.xpath('//span[contains(text(), "Windows")]')).click();
    
    element(by.css('.cdk-overlay-backdrop.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing')).click();
   }

  saveToolDraft(){
    browser.sleep(2000);
    element(by.id('btnGuardar')).click(); 
    element(by.xpath('//span[contains(text(), "No")]')).click();
    return element(by.css('app-root h2')).getText();
  }

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

  cancelToolDraft(){

    element(by.id('Cancelar')).click();    
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

  approveDraft(){
    let draft=element.all(by.tagName('a')).last();
    draft.click();
    element(by.id('Approve')).click();
  }

  publishDraft(){
    browser.sleep(3000);
    element(by.buttonText('Publicar')).click();
  }

}
