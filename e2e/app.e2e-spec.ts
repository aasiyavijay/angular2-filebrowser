import { Angular2FilebrowserPage } from './app.po';

describe('angular2-filebrowser App', function() {
  let page: Angular2FilebrowserPage;

  beforeEach(() => {
    page = new Angular2FilebrowserPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
