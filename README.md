# Project Two Server

## Environment

### Tools

1. [Node.js](http://nodejs.org)
2. [MongoDB](http://www.mongodb.org/)

### Node.js modules

1. [Express](http://expressjs.com) - Web application framework for node
2. [Mongoose](http://mongoosejs.com/) - Elegant mongodb object modeling for node.js
3. [Express-restify-mongoose](https://github.com/florianholzapfel/express-restify-mongoose) - library provides mongoose database models with a REST interface.

### Javascript frameworks

1. [jQuery 1.11.1](http://jquery.com)

### Usage

1. Clone the project into your workspace, then import it.
2. Make sure that you had installed [Node.js](http://nodejs.org) & [MongoDB](http://www.mongodb.org/).
3. Create folder `data` in project folder.
4. Open command prompt from MongoDB/bin(shift+right click), execute `mongod --dbpath=ProjTwoServerPath/data`
5. Open new command prompt, execute `npm install` in project folder to install node modules.
6. execute `npm start` or `node app.js` to start the server at `localhost:3000`

## Table Schema
<table>
    <tr>
        <td>TableName</td>
        <td colspan="3">Restaurant</td>
    </tr>
    <tr>
      <td>column name</td>
      <td>type</td>
      <td>remark</td>
      <td>example</td>
    </tr>
    <tr>
      <td>GID</td>
      <td>OID</td>
      <td>流水號</td>
      <td>123456</td>
    </tr>
    <tr>
      <td>Name</td>
      <td>String</td>
      <td>店家名稱</td>
      <td>金仙排骨飯</td>
    </tr>
    <tr>
      <td>Address</td>
      <td>String</td>
      <td>地址</td>
      <td>台北市xxxxxx</td>
    </tr>
    <tr>
      <td>Phone</td>
      <td>String</td>
      <td>電話</td>
      <td>02-1234567678</td>
    </tr>
    <tr>
      <td>Longitude</td>
      <td>String</td>
      <td>經度</td>
      <td>34.12345</td>
    </tr>
    <tr>
      <td>Latitude</td>
      <td>String</td>
      <td>緯度</td>
      <td>121.3456</td>
    </tr>
    <tr>
      <td>Introduction</td>
      <td>String</td>
      <td>簡介</td>
      <td></td>
    </tr>
    <tr>
      <td>Aircon</td>
      <td>boolean</td>
      <td>是否有冷氣</td>
      <td></td>
    </tr>
    <tr>
      <td>Stars</td>
      <td>int</td>
      <td>推薦星星數</td>
      <td>1星、2星……</td>
    </tr>
</table>

<table>
    <tr>
        <td>TableName</td>
        <td colspan="3">Menu</td>
    </tr>
    <tr>
      <td>column name</td>
      <td>type</td>
      <td>remark</td>
      <td>example</td>
    </tr>
    <tr>
      <td>GID</td>
      <td>OID</td>
      <td>流水號</td>
      <td>123456</td>
    </tr>
    <tr>
      <td>RestaurantId</td>
      <td>OID</td>
      <td>店家編號</td>
      <td>123456</td>
    </tr>
    <tr>
      <td>Name</td>
      <td>String</td>
      <td>餐點名稱</td>
      <td>魯肉飯</td>
    </tr>
    <tr>
      <td>Price</td>
      <td>int</td>
      <td>價錢</td>
      <td>35</td>
    </tr>
    <tr>
      <td>Introduction</td>
      <td>String</td>
      <td>簡介</td>
      <td></td>
    </tr>
    <tr>
      <td>Type</td>
      <td>String</td>
      <td>餐點種類</td>
      <td>飯類/麵類/飲料…</td>
    </tr>
    <tr>
      <td>remark</td>
      <td>String</td>
      <td>備註</td>
      <td></td>
    </tr>
</table>
