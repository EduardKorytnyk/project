let money = prompt("Ваш бюджет на месяц?", 0);
let time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");
let appData = {
    budget: money,
    timeData: time,
    expenses : {},
    optionalExpenses: {},
    income : [],
    savings : false
};

let sum = prompt("Введите обязательную статью расходов в этом месяце", 0);
let allsum = prompt("Во сколько обойдется?", );

if (sum){
 appData.expenses.sum = allsum 
 
}

console.log(appData)
console.log(appData.expenses)

//expenses.sum = allsum;
console.log(appData.budget)
console.log(appData.timeData)

let monthBudget = appData.budget/30
alert("ваш дневной бюджет " + monthBudget);

