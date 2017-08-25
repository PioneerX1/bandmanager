import { BandmanagerPage } from './app.po';

describe('bandmanager App', () => {
  let page: BandmanagerPage;

  beforeEach(() => {
    page = new BandmanagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
