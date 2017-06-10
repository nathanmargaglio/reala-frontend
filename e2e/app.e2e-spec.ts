import { RealaFrontendPage } from './app.po';

describe('reala-frontend App', () => {
  let page: RealaFrontendPage;

  beforeEach(() => {
    page = new RealaFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
