/*
by Primovist

Surge:

[Script]
http-response ^https?:\/\/(i|newdrugs)\.dxy\.cn\/(snsapi\/username\/|app\/user\/(pro\/stat\?|init\?timestamp=)) requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/yyzs.js

[MITM]
hostname = newdrugs.dxy.cn
*/

const path1 = "/snsapi/username/";
const path2 = "/app/user/pro/stat?";
const path3 = "/app/user/init?timestamp=";
const path4 = "/app/user/pro/isUserProAndNotExpired?timestamp=";

const url = $request.url;
let body = $response.body;

if (url.indexOf(path1) != -1){
body = JSON.parse(body);
body.items.expertUser = true;
body.items.expert = true;
body.items.expertStatus = 1;
body.items.professional = true;
body = JSON.stringify(body);
}

if (url.indexOf(path2) != -1){
body = JSON.parse(body);
body.data.userProDiscountType = 0;
body.data.isActive = true;
body.data.remainExpiredDay = 2048;
body = JSON.stringify(body);
}

if (url.indexOf(path3) != -1){
body = JSON.parse(body);
body.data.isProActive = true;
body.data.expireDate = 2048;
body.data.userProInfoVO = true;
body.data.identify = true;
body.data.userProDiscountType = 0;
body.data.memberDiscount = true;
body.data.iapPurchaseVO.purchase = true;
body.data.iapPurchaseVO.status = true;
body.data.iapPurchaseVO.codeType = 1;
body.data.iapPurchaseVO.expireDate = 2048;
body.data.iapPurchaseVO.message = null;
body.data.iapPurchaseVO.error = null;
body = JSON.stringify(body);
}

if (url.indexOf(path4) != -1){
body = JSON.parse(body);
body.data = true;
body = JSON.stringify(body);
}

$done({body})
