import { StubsToolPage } from './app.po';

describe('stubs-tool App', () => {
  let page: StubsToolPage;

  beforeEach(() => {
    page = new StubsToolPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
