# 概要
この開発環境はフロントエンド開発におけるベースとなります。プロジェクトごとにカスタマイズしご利用ください。
基本的にはgulpを用いて自動コンパイルを実現しております。

# 環境構築
nodeベースの開発環境のため、node.jsの導入及びnpmが必須となります。
```
$ npm install -g gulp           //タスクランナー
$ npm install -g browser-sync   //ブラウザツール
```

# ディレクトリ構成
```
/
├── gulp            1. gulpディレクトリ
│   ├── gulpfile.js
│   ├── node_modules
│   └── package.json
├── source          2. コードディレクトリ
│   ├── jade
│   ├── json
│   ├── less
│   └── typescript
├── css             cssディレクトリ
├── js              jsディレクトリ
└── img             画像ディレクトリ
```

## 1. gulpディレクトリ
gulpはnode.jsベースのタスクランナーとなります。使い方は以下となります。

```
$ cd /gulp  gulpディレクトリへ移動
$ gulp      gulpを起動
```

また、以下の設定ファイルにtaskを設定することでコンパイルや自動リロードを自動化できます。
```
$ vi /gulp/gulpfile.js

```
初期設定では、以下が設定されております。
* Jadeコンパイル
* LESSコンパイル
* Typesctiptコンパイル
* ブラウザの自動リロード
* localhost:3000の利用

## 2. コードディレクトリ
このディレクトリでは、Jade,LESS,TypeScriptを格納しております。

### 2-1. Jade
Jadeとは、JavaScript テンプレートエンジンであり、HTMLを書くための軽量マークアップ言語です。

[Jade](http://jade-lang.com/ "Jade")

[参考記事](https://gist.github.com/japboy/5402844 "参考記事")


### 2-2 LESS
LESSは変数、ミックスイン、演算、そして関数のような動的な処理をCSSに追加拡張できます。 クライアントサイド(IE6+、Webkit、Firefox)、またnode.js、Rhinoを利用してサーバーサイドでも動作します。

[LESS](http://less-ja.studiomohawk.com/)

### 2-3 TypeScript
TypeScriptはMicrosoft社が開発しているAltJSの1つです。AltJSとは、ある言語Xから、JavaScriptへと変換（トランスパイル）して使う言語の総称です。Typeという名の通り、JavaScriptの世界に静的な型付けを持込み、JavaやC#のようにコンパイル時に整合性のチェックを行うことができるようにしたものです。

[TypeScript](http://www.typescriptlang.org/ "TypeScript")

[参考記事](https://html5experts.jp/vvakame/16241/ "参考記事")

# The MIT License (MIT)
## Copyright (c) 2015 Daiki Yoshioka