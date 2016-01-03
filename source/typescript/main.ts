/// <reference path="lib/jquery.d.ts" />
// Class appControl - コントローラクラス
class appControl {
  test(x){
    console.log(x);
  }
}

$(function(){
  var c = new appControl();
  c.test(1);
  c.test(2);
  c.test(3);
  $('#test_submit').on('click', function(){
    $('#main').append('<p>testショット</p>');
  });
});