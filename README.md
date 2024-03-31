# 必要なもの
- node v20.11.0
- npm v10.2.4
- go v1.21.6

# clone したらやること
1. frontend ディレクトリで，`npm install`
2. frontend ディレクトリで，`node app.js`
3. http://localhost:3000/ で以下のような画面が表示されれば OK.
4. backend ディレクトリで，`go run main.go`

# 他オリジンから GET リクエスト
1. localhost:3000 から localhost:1991 に GET リクエストを出す ボタンをクリックする
2. デフォルトだと GET リクエストが上手くいくようになっている．
3. backend/main.go の AllowOrigins から http://localhost:3000 を消すと GET リクエストが失敗する（go の server 側で，http://localhost:3000 からのアクセスを許可しない設定になるため）．

# 他オリジンから header を加えて GET リクエスト
1. localhost:3000 から localhost:1991 に X-PINGOTHER header を加えて GET リクエストを出す ボタンをクリックする
2. デフォルトだと GET リクエストが上手くいくようになっている．
3. backend/main.go の AllowHeaders から X-PINGOTHER を消すと GET リクエストが失敗する（go の server 側で，X-PINGOTHER request header を許可しない設定になるため）．