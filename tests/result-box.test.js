casper.test.begin('Result box should exist', 1, function suite(test) {
  casper.start('http://localhost:3000', function () {
    test.assertExists('#result');
  }).run(function () {
    test.done();
  });
});
