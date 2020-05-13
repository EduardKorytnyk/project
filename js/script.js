let money = +prompt("Ваш бюджет на месяц?", '');
let time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");
let appData = {
    budget: money,
    timeData: time,
    expenses : {},
    optionalExpenses: {},
    income : [],
    savings : false
};


//цикл For 
// for (let i=0; i<2; i++){
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдется?", );
//         if ((typeof(a))==="string"&&(typeof(a)) != null && (typeof(b)) !=null 
//         && a != '' && b != '' && a.length<50 ){
//            console.log("done");
//             appData.expenses[a] = b;
//             continue;
            
//         } else {
          
//             //дописать else и вернуться к вопросу обратно 
//             console.log("возврат");
//             i=0;
//         }
        
// };
//цикл do while 
let i=0;
while (i<2) 
{
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", );

    if ((typeof(a))==="string"&&(typeof(a)) != null && (typeof(b)) !=null 
    && a != '' && b != '' && a.length<50 )
    {
        i=i+2;
        console.log("done");
        appData.expenses[a] = b;
        console.log(appData)
    }
}




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