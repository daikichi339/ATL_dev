casper.test.begin('name', function suite(test){
  //user agent
  casper.userAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.106 Safari/537.36');

  casper.on('page.error', function (msg, trace) {
    this.echo( 'Error: ' + msg, 'ERROR' );
  });

  casper.start('../index.html', function(){
    this.sendKeys('#test_input', 'testです');
    this.click('#test_submit');
    this.capture('../test/screen/test_01.png');
  });

  casper.then(function(){
    test.assertTitle('title1 | description');
  });

  //実行
  casper.run(function(){
    test.done();
  });
});
