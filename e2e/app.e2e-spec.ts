import { AppPage } from './app.po';
import { browser, ProtractorExpectedConditions, element, by } from 'protractor';

describe('conectate App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display Conectate Page', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Conectate');
  });

  it('should Make Valid Search', () => {
    var EC=ProtractorExpectedConditions;
    page.navigateTo();
    page.enterValidKeyWords('Moodle');
    expect(page.getSearch()).toEqual('Conectate');
  });

  it('should navigate to add tool page', () => {
    page.navigateTo();
    expect(page.navigateToAddToolPage()).toEqual('Agregar herramienta');
  });

  it('should navigate to add example page', () => {
    page.navigateTo();
    page.navigateToDetail(2);
    browser.sleep(2000);
    expect(page.navigateToAddExamplePage()).toEqual('Moodle - foros');
  });

  it('should navigate to tool detail', () => {
    browser.sleep(3000);
    page.navigateToDetail(2);
    expect(page.navigateToDetail(2)).toEqual('angular');
  });

  
  it('should edit and cancel tool draft', () => {
    page.navigateTo();
    //page.getMenu();
    page.navigateToAddToolPage();
    page.editToolDraftInputs();
    page.selectToolDraftOptions();
    page.cancelToolDraft();
    browser.sleep(2000)
    expect(element(by.cssContainingText('.home-title','Conectate')));
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
  });

  it('should save tool draft and appear in drafts', () => {
    page.navigateTo();
    //page.getMenu();
    page.navigateToAddToolPage();
    page.editToolDraftInputs();
    page.selectToolDraftOptions();
    page.saveToolDraft();
    page.returnHome();
    page.navigateToDraftsView();
    expect(page.navigateToDraftsView()).toBe('ToolName');
  });

  
  it('should publish tool draft in home ', () => {
    page.navigateTo();
    page.navigateToDrafts();
    page.approveDraft();
    page.publishDraft();
    page.returnHome();
    expect(page.returnHome()).toEqual('ToolName');
  });

});
