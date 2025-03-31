let button = document.getElementById("calculateBudget")
let results = document.getElementById("budgetResults")



button.addEventListener("click", calculate)

function calculate() {
    
    let userIncome = Number(prompt("Enter your income."))
    let userExpenses = Number(prompt("Enter your expenses."))
    let months = Number(prompt("Enter the numbers of months to project the budget over."))

    let totalSavings = userIncome - userExpenses
    let monthlyIncome = userIncome/months
    let monthlyExpenses = userExpenses/months
    let monthlySavings = monthlyIncome-monthlyExpenses

    if (monthlySavings < 0) {
        window.alert("You are spending more money than you're earning.")
    }

    let p1 = document.createElement("p")
    results.appendChild(p1)
    p1.textContent = "Your monthly income is: $" + String(monthlyIncome.toFixed(2))

    let p2 = document.createElement("p")
    results.appendChild(p2)
    p2.textContent = "Your monthly expenses are: $" + String(monthlyExpenses.toFixed(2))

    let p3 = document.createElement("p")
    results.appendChild(p3)
    p3.textContent = "Your monthly savings are: $" + String(monthlySavings.toFixed(2))

    let p4 = document.createElement("p")
    results.appendChild(p4)
    p4.textContent = "Your total savings are: $" + String(totalSavings.toFixed(2))

    for (let i = 0; i < months; i++){
        let para = document.createElement("p")
        results.appendChild(para)
        para.textContent = `Month ${i + 1}: your monthly savings are $${monthlySavings.toFixed(2)}`
    }
}

