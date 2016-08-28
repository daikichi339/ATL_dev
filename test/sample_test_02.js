casper.test.begin('capture', function suite(test){
  //url list
  var url = [
    ['http://casperjs.org/','../test/screen/casper.jpg'],
    ['http://docs.casperjs.org/en/latest/quickstart.html','../test/screen/caspser_docs.jpg'],
    ['https://github.com/casperjs/casperjs','../test/screen/casper_github.jpg']
  ];

  var time = 2000;

  //basic
  var basicId = '';
  var basicPass = '';

  //user agent
  var width = 1280;
  var height = 3000;
  var ua = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.106 Safari/537.36';

  casper.start();
  casper.userAgent(ua);
  casper.viewport(width, height);
  casper.setHttpAuth(basicId, basicPass);

  casper.each(url, function(self, link){
    var url = link[0];
    var file = link[1];
    self.thenOpen(url, function () {
      this.echo('captur page title:' + this.getTitle());
    });

    self.wait(time,function(){
      self.capture(file);
    });
  });

  //実行
  casper.run();
});
