describe("lyrric", function() {
  it("should get home page title", function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual("LyRRiC");
  });
});
