// 題目一：變數練習
// 情境：Alex 正在健身房鍛鍊，他正在使用跑步機慢跑，請用變數描述以下狀態：
const alexAge = 25;// 宣告const 變數名稱為 `alexAge`，並賦予值為 `25`
const alexMemberID ='GYM2024-123456';// 宣告const變數名稱為 `alexMembershipID`，並賦予值為字串 `"GYM2024-12345"`
const isRunningOntreadmill = true;// 宣告const變數名稱為 `isRunningOnTreadmill`，並賦予值為 `true'
console.log(alexAge,alexMemberID,isRunningOntreadmill);//使用 'console.log()` 輸出 `alexAge`、`alexMembershipID` 和 `isRunningOnTreadmill`

// 題目二：變數命名練習
// 請修改以下中文變數名稱，讓他符合變數語意
const YogaPrice = 300;//宣告const變數名稱YogaPrice並賦值數字型別300
const WeightTrainPrice = 500;//宣告const變數名稱weightTrainPrice重訓團課並賦值數字型別500
const WeightTrainOneOnOnePrice = 1500;//宣告const變數名稱weightTrainOneOnOnePrice並賦值數字型別1500
const alexSportBudget = 3000;//宣告const變數名稱為alexbudge並賦值數字型別3000
console.log(YogaPrice,WeightTrainPrice,WeightTrainOneOnOnePrice,alexSportBudget);//console.log輸出瑜珈團課.重訓團課.重訓一對一課程價格

// ### 題目三：變數計算
// 呈上題，Alex 想要規劃好自己的運動課程，需符合以下三個條件，請將花費總數計算在 AlexBudget 上，一起幫幫他吧！
// 條件一：一定至少要買 1 堂重訓團課和瑜伽團課
// 條件二：瑜伽團課只能一次買 3 堂
// 條件三：一定要花到 2400 以上，並購買 5 堂課程
let YogaPriceTotal = YogaPrice*3;
let totalcost = YogaPriceTotal+WeightTrainPrice+WeightTrainOneOnOnePrice;
let AlexBudget = alexSportBudget - totalcost;
console.log(`Alex買完課程了,他一共剩下${AlexBudget}元`);//console.log輸出Alex買完課程了,他一共剩下$alexbudget元

// ### 題目四：線稿圖截圖，看圖宣告變數
// 請參考資料夾內 q4.webp 圖片
// 請依照你看到的內容來嘗試設計變數和值（至少 3 個）
let Title = '14堂組合包方案';
let DiscountPrice = 2520;
let ClassesNum = 14;
let ClassesTime = 50;
let avgPrice = DiscountPrice/ClassesNum;
let Discount = 9;
console.log(Title,DiscountPrice,'元,包含',ClassesNum,'堂課,一堂',ClassesTime,'分鐘,平均每堂價格:',avgPrice,'元,',Discount,'折');

// ### 題目五：布林值與變數定義，看是否有用對 const, let
// 情境：Alex 在往健身房的路上，望向城市的風景，請描述她看到的一切，並宣告變數與賦予值
// 4-1. Alex 在等紅綠燈，他抬頭看一下現在是紅燈，還有 28 秒綠燈（最多 3 個宣告）
let x = 28; 
const RedLightTime = x-1;
// 4-2. 目前一起等待的機車有 8 台
let waitingmoto = 8
// 4.3. Alex 望向天空，看到天上有 5 朵白雲和 1 顆太陽
let cloud = 5
const sun = 1
console.log(`Alex在等紅綠燈，他抬頭看一下現在是紅燈，還有${RedLightTime}秒綠燈，目前一起等待的機車有`,waitingmoto,'台,alex望向天空，看到天上有',cloud,'朵白雲和',sun,'顆太陽');

// ### 題目六：情境題：簡單變數計算
// 情境：Alex 每天都會帶著 2000cc 的水壺
// 他早上喝了 500cc
// 中午又喝了 800cc
// 下午去健身前，先裝了 1000cc 的水
// 健身時，又喝掉了 700cc
// 那麼他的水壺還剩下多少 cc 的水？
// 以下的 Code 寫到一半，再請幫幫 Alex
let myWater = 2000; // 水壺容量
myWater -= 500; // 早上喝了 500cc
myWater -= 800; //中午喝了800cc
myWater += 1000; //健身前裝了1000cc
myWater -= 700; //健身時喝掉700cc
console.log(`Alex 的水壺還有 ${myWater}cc 的水`);

// ### 題目七：情境題：變數計算
// 情境：Anna 每週都會到單次計費型的健身房運動，週日運動結束後，想知道自己本週的消費金額，但結帳系統出了點問題，Anna 決定自己用 JS 來計算。
// Anna 的總金額（totalBill）先從零開始計算。
// 健身房計費為：每小時器械使用費 50 元，每堂團體課程費用 150 元
// 她本週用了器械 3 小時。
// 她本週參加了 2 堂團體課程。

let totalBill = 0;
const machineUsePrice = 50;
const groupClassesprice = 150;
let machineUseTime = 3;
let groupClassesTime = 2;
let machineUsePriceTotal = machineUsePrice*machineUseTime;
let groupClassesTotal = groupClassesprice*groupClassesTime;
let total = totalBill+groupClassesTotal+machineUsePriceTotal;
console.log(
  `Anna 本週器械使用費共 ${machineUsePriceTotal} 元，團體課費用共 ${groupClassesTotal} 元，一共消費金額是 ${total}元`
);

// ### 題目八：變數重新賦予值
// 情境：請依照以下程式碼告知答案是多少，並在下方用註解方式寫上這五行程式碼做了什麼事
// 以下程式碼請勿變更
let a = 8; // 範例：宣告了一個 a 的變數，並賦予了一個 8 的數字型別
let b = 0; //宣告變數b並賦值數字型別為0
a = 13; // 重新賦值a並賦值數字型別為13
a = b + 4; //重新賦值a並賦值數字型別為b+4
a - b; //計算a減b
b += 1;//重新賦值b為數字型別b+1的值

// ### 題目九：型別查詢
// 請不要觀看 console.log，透過註解告知解答每個變數的型別
let c = 'world'; //宣告變數c並賦值字串型別為world
let d = 456; // 宣告變數d並賦值數字型別為456
let e = c + d; //宣告變數e並賦值字串與數字型別 world456
let f = false; // 宣告變數f並賦值boolean為false
let g = d + d; //宣告變數g並賦值數字型別456+456=912
let h = f + g; //宣告變數h並賦值數字型別912
// 請從以下新增註解，告知上面每行各別是哪些型別
// a 是 string
// b 是 ???

// ### 題目十：傳值與傳參考
// 情境：請依照程式碼告知答案是多少，並在下方用註解方式寫上這五行程式碼做了什麼事
// 以下程式碼請勿變更
let numberArr1 = [5, 10, 15]; //宣告一變數numberArr1,並賦值陣列型別為[5,10,15]
let numberArr2 = numberArr1; //宣告一變數numberArr2,並賦值陣列型別為numberArr1
numberArr2.push(20); //於numberArr2中新增數字型別值20
numberArr2 = [25, 30, 35]; // 重新賦值numberArr2,並賦值陣列型別為[25,30,35]
console.log(numberArr1, numberArr2); //輸出numberArr1與numberArr2
