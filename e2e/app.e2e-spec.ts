import { AdinfostWebPage } from './app.po';

describe('adinfost-web App', () => {
  let page: AdinfostWebPage;

  beforeEach(() => {
    page = new AdinfostWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
