import { AngularNamedRoutesPage } from './app.po';

describe('angular-named-routes App', () => {
  let page: AngularNamedRoutesPage;

  beforeEach(() => {
    page = new AngularNamedRoutesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
