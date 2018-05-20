import { AppPage } from './app.po';
import { browser, ProtractorExpectedConditions, element, by } from 'protractor';

describe('conectate App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display Conectate Page', () => {
    page.navigateTo();
    expect(page.navigateBackToHome()).toEqual('Buscar');
  });

  it('should Make Valid Search', () => {
    page.navigateTo();
    page.enterValidKeyWords('Moodle');
    expect(page.getSearch()).toEqual('Moodle');
  });

  it('should navigate to tool detail', () => {
    browser.sleep(3000);
    expect(page.navigateToDetail(2)).toEqual('Angular');
  });

  it('should navigate to add tool page', () => {
    page.navigateTo();
    page.showMenu();
    page.navigateToGitProfile();
    expect(page.navigateToAddToolPage()).toEqual('Agregar herramienta');
  });

  it('should edit and cancel tool draft', () => {
    page.navigateTo();
    page.showMenu();
    page.navigateToGitProfile();
    page.navigateToAddToolPage();
    page.editToolDraftInputs();
    page.selectToolDraftOptions();
    page.cancelToolDraft();
    expect(page.closeGitSesion()).toEqual('¿Eres miembro conectate?');
  });

  it('should edit and save tool draft', () => {
    page.navigateTo();
    page.showMenu();
    page.navigateToGitProfile();
    page.navigateToAddToolPage();
    page.editToolDraftInputs();
    page.selectToolDraftOptions();
    page.selectToolDraftSO();
    expect(page.saveToolDraft()).toEqual('Jira Confluence');
  });

  it('should filter tools', () => {
    page.navigateTo();
    expect(page.chooseFilterOptions()).toEqual('Cacoo');
  });

  it('should verified tool draft', () => {
    page.navigateTo();
    page.showMenu();
    page.navigateToGitProfile();
    page.verifyDraft();
    expect(page.closeGitSesion()).toEqual('¿Eres miembro conectate?');
  });

  it('should publish tool draft', () => {
    page.navigateTo();
    page.showMenu();
    page.navigateToAdminProfile();
    page.publishDraft();
    page.closeAdminSesion();
    expect(page.getNewTool()).toEqual('Jira Confluence');
  });

  /*it('should add example', () => {
    page.navigateTo();
    page.showMenu();
    page.navigateToGitProfile();
    page.navigateToAddExamplePage();
    page.editExampleDraftInputs();
    page.selectExampleDraftOptions();
    page.editExampleDraftResource();
    expect(page.saveExampleDraft()).toEqual('Jira Confluence');
  });*/

  it('should add tutorial', () => {
    page.navigateTo();
    page.showMenu();
    page.navigateToGitProfile();
    page.navigateToAddTutorialPage();
    page.editTutorialDraftInputs();
    expect(page.saveTutorialDraft()).toEqual('Tutorial Angular');
  });
  








  /*
  it('should navigate to add example page', () => {
    page.navigateTo();
    page.navigateToDetail(2);
    browser.sleep(2000);
    expect(page.navigateToAddExamplePage()).toEqual('Moodle - foros');
  });

  it('should edit example draft', () => {
    page.navigateTo();
    page.navigateToDetailName();
    page.editExampleDraftInputs();
    page.editExampleDraftResource();
    page.selectExampleDraftOptions();
    expect(page.navigateToDetail(2)).toEqual('angular');
  });


  it('should edit and cancel example draft', () => {
    page.navigateTo();
    page.navigateToDetailName();
    page.editExampleDraftInputs();
    page.editExampleDraftResource();
    page.selectExampleDraftOptions();
    page.cancelExampleDraft();
    expect(page.navigateToDetail(2)).toEqual('angular');
  });

  it('should edit and save example draft', () => {
    page.navigateTo();
    page.navigateToDetailName();
    page.editExampleDraftInputs();
    page.editExampleDraftResource();
    page.selectExampleDraftOptions();
    page.saveExampleDraft();
    expect(page.navigateToDetail(2)).toEqual('angular');
  });

  it('should login and see drafts', () => {
    page.navigateTo();
    page.navigateToDrafts();
    expect(page.navigateToDrafts()).toEqual('Herramientas por aprobar');
  });

  it('should go into draft and approve', () => {
    page.navigateTo();
    page.navigateToDrafts();
    page.approveDraft();
    var checked=element(by.css('.mat-checkbox.mat-accent.mat-checkbox-anim-unchecked-checked.mat-checkbox-checked'))
    expect(checked.isDisplayed()).toBe(true);
  });

  it('should edit tool draft', () => {
    page.navigateTo();
    //page.getMenu();
    page.navigateToAddToolPage();
    page.editToolDraftInputs();
    page.selectToolDraftOptions();
    expect(page.navigateToAddToolPage()).toEqual('Agregar herramienta');
  });
  
  it('should edit and save tool draft', () => {
    page.navigateTo();
    //page.getMenu();
    page.navigateToAddToolPage();
    page.editToolDraftInputs();
    page.selectToolDraftOptions();
    page.saveToolDraft();
    expect(page.navigateToAddToolPage()).toEqual('Agregar herramienta');
  });*/



  

});
