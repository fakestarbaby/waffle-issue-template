'use strict';

$(function() {
  setTimeout(function() {
    $('a.button.primary.ng-scope').on('click', function() {
      // 入力フォームの幅を広げる
      $('form.popover.input-group-sm.ng-pristine.ng-valid').css('width', '800px');
      // Issue 本文のテキストエリアの高さを広げる
      $('textarea.form-control.ng-pristine.ng-valid').attr('rows', '20');
      // Issue Template を差し込む
      $('.card-description').children('textarea').val(
'## :iphone: 検証環境\n' +
'### 端末\n' +
'* 検証した端末や機種、OS のバージョン番号を書こう\n' +
'* Unity 2017.1.1p3\n' +
'* iPhone7 / iOS 10.3.3\n' +
'* iPad2 / iOS 11.0.1\n' +
'* Nexus5 / Android 4.4\n' +
'\n' +
'### DeployGate\n' +
'* 検証した DeployGate のバージョン番号を書こう\n' +
'* iOS#123\n' +
'* Android#456\n' +
'\n' +
'## :eyes: 現象\n' +
'### 問題\n' +
'* 何がどうなっていることが問題なのか、分かるようにしよう\n' +
'* 現象が確認可能な画像や動画を貼ろう\n' +
'\n' +
'### 再現率\n' +
'* 必ず発生するのか、たまにしか発生しないのか、切り分けが出来るようにしよう\n' +
'* 100%\n' +
'* 2回に1回くらい\n' +
'* 極めて低い\n' +
'* 分からない\n' +
'\n' +
'### 再現手順\n' +
'* 順を追って同じ操作をすることで、現象が再現出来るようにしよう\n' +
'\n' +
'### 修正要望\n' +
'* 本来、どうなっているべきなのか、分かるようにしよう\n' +
'\n' +
'### 補足\n' +
'* 気付いたことや思ったことなどがあれば書こう\n' +
'* 既存バグかどうか分かれば書こう'
      );
    })
  }, 1000);
});
