let balance = document.querySelector('.balance');
let income = document.querySelector('.income-value');
let expense = document.querySelector('.expense-value');
const description = document.querySelector('#description');
const amount = document.querySelector('#amount');
const submitBtn = document.querySelector('.submit-btn');
const transDesc = document.querySelector('.trans-desc');
const transAmt = document.querySelector('.trans-amt');


submitBtn.addEventListener('click', () => {
   if(amount.value > 0){
    income.innerText = '$' + amount.value
   }
   else if(amount.value < 0){
    expense.innerText = '$' + amount.value.slice(1);
   }
   else{
    alert('enter a non-zero digit');
   }
   calculateBalance()
   updateTransaction()
   event.preventDefault()
})
function calculateBalance(){
    let difference = income.innerText.slice(1) - expense.innerText.slice(1);
    balance.innerText = '$' + difference
}
function updateTransaction(){
    transDesc.innerText = description.value;
    transAmt.innerText = amount.value;
}