casper.test.begin('name', function suite(test){
  //user agent
  casper.userAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.106 Safari/537.36');

  casper.start('../index.html', function(){
    this.sendKeys('#test_input', 'testです');
    this.click('#test_submit');
    this.capture('../test/screen/test_01.png');
  });

  casper.then(function(){
    this.capture('../test/screen/test_02.png');
    test.assertTitle('title1 | description');
  });
  
  //実行
  casper.run(function(){
    test.done();
  });
});
