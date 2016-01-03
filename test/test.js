casper.test.begin('Google検索テスト', function suite(test) {
  casper.start('http://www.google.co.jp/', function () {
    test.assertHttpStatus(200);
    this.fillSelectors('form[action="/search"]', {
      'input[name="q"]': 'サッカー'
    }, true);
    console.log('"サッカー"で検索します');
  });

  casper.then(function () {
    test.assertHttpStatus(200);
    test.assertTitle('サッカー - Google 検索', '正しいタイトルです');
    test.assertUrlMatch(/q=サッカー/, '正しい検索パラメータです');
    test.assertEval(function () {
      return __utils__.findAll('h3.r').length >= 10;
    }, '"サッカー"の検索結果を10件以上取得しました');
  });

  casper.run(function () {
    test.done();
  });
});