let cash = 50
let price = 60
let difference = cash-price

if (cash > price) {
    console.log(`you paid extra - here's ${difference} dollars change`)
}
else if (cash === price) {
    console.log ('you paid the exact amoutn - have a nice day')
}
if (cash < price) {
    console.log (`not enough money - you still owe ${difference * -1} dollars`)
}