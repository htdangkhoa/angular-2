import { HtdangkhoagithubioPage } from './app.po';

describe('htdangkhoagithubio App', function() {
  let page: HtdangkhoagithubioPage;

  beforeEach(() => {
    page = new HtdangkhoagithubioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
