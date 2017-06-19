import { AlIntersProjectPage } from './app.po';

describe('al-inters-project App', () => {
  let page: AlIntersProjectPage;

  beforeEach(() => {
    page = new AlIntersProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
