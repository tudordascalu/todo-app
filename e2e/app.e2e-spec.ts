import { Mandatory2Page } from './app.po';

describe('mandatory2 App', () => {
  let page: Mandatory2Page;

  beforeEach(() => {
    page = new Mandatory2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
