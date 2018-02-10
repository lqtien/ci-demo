casper.test.begin('Evaluation function should return correct result', 1, function (test) {
  casper
    .start('http://localhost:3000')
    .then(function () {
      this.sendKeys('#expression', '1+2');
      this.click('#btn-eval');
      test.assertSelectorHasText('#result', '3');
    })
    .run(function () {
      test.done()
    });
});
