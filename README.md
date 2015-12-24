# The MIT License (MIT)
## Copyright (c) 2015 Daiki Yoshioka
Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

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