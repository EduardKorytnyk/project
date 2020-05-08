let money = +prompt("Ваш бюджет на месяц?", 0);
let time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");
let appData = {
    budget: money,
    timeData: time,
    expenses : {},
    optionalExpenses: {},
    income : [],
    savings : false
};



for (let i=0; i<2; i++){
    let a = prompt("Введите обязательную статью расходов в этом месяце", 0),
        b = prompt("Во сколько обойдется?", );
        if ((typeof(a))==="string"&&(typeof(a)) != null && (typeof(b)) !=null 
        && a != '' && b != '' && a.length<50 ){
           console.log("done");
            appData.expenses[a] = b;
        } else {
            //бисать else и вернуться к вопросу обратно 

        }
};

appData.moneyPerDay = appData.budget / 38; 
alert("Ежедневный бюджет: "+ appData.moneyPerDay);

if (appData.moneyPerDay < 100){
    console.log("Минимальный уроовень достатка")
}else if (appData.moneyPerDay >100 && appData.moneyPerDay < 2000){
    console.log("Средний уроовень достатка")
}else if (appData.moneyPerDay > 2000 ){ 
     console.log("Высокий уроовень достатка")
}else {
    console.log("Ошибка")
}