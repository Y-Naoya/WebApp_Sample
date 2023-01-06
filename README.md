# WebApp_Sample

## 初回設定

pnpmの使用を前提としています。インストールしていない場合は、`npm i -g pnpm`でインストールしてください。  
`pnpm i --frozen-lockfile`で依存パッケージをインストールしてください。

DBはMySQLを想定しています。必要であればMySQLをインストールしてください。  
DB接続情報は以下の手順で記述します。

- `packages/api`直下に`.env`を作成する

- 下記のように接続情報を記載する

```
HOST=localhost
PORT=3306
USERNAME=root
PASSWORD=password
DATABASE=SampleDB
```

## 起動方法

### API

```bash
pnpm -F api run start
```

### Client

```bash
pnpm -F client run dev
```

## データの作成

APIを起動すると自動でテーブルが作成されます。  
該当テーブルへSQL文を作成し、テストデータを作成してください。  
作成したデータは、ブラウザの画面で表示されるはずです。
