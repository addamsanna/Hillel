// У вас и у вашего друга в кармане столько денег, сколько было указано в окнах prompt.
//  В зависимости от общей суммы ваших сбережений вы можете полететь на Майорку или выпить пива. 
//  С помощью условного оператора определите ваши возможности и отобразите на экране в alert.
let myMoney = +prompt("How much money do I have?", "");
let friendsMoney = +prompt("How much money does my friend have?", "");
let majorcaOrBeer = myMoney + friendsMoney;
if (majorcaOrBeer > 10000) {
    alert("We're flying to Mallorca!")
} else {
    alert("Go drink Stella Artois")
};