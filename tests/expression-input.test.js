casper.test.begin('Expression input box should exist', 1, function suite(test) {
  casper.start('http://localhost:3000', function() {
      test.assertExists('#expression');
  }).run(function() {
      test.done();
  });
});
