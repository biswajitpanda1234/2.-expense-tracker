let exp = 0;

let balance;
let expenseContainer = document.querySelector(".expense");
console.log(document.querySelectorAll(".expense_container").length)
let oldbudget = 0;
let restAmount = document.querySelector(".rest-amount");
let expenseList = document.querySelector(".expense-list");

let elements = expenseContainer.querySelectorAll("*");
for (let i = 0; i < elements.length; i++) {
  elements[i].disabled = true;
}

function createTally(budget, expense, balance){
    restAmount.innerHTML = `
        <div>
        <h3>Total Budget</h3>
        <p>${budget}</p>
    </div>
    <div>
        <h3>Expense</h3>
        <p>${expense}</p>
    </div>
    <div>
        <h3>Balance</h3>
        <p>${balance}</p>
    </div>
        `;
}
function getBudget() {
    
    
  if (budget.value > 0) {
    
    if(budget.value<exp){
        budget.value = oldbudget;
        alert("your budget is too low!!")
    }
    oldbudget=budget.value;
    createTally(budget.value,exp,budget.value-exp);
    balance = parseInt(budget.value);

    let elements = expenseContainer.querySelectorAll("*");
    for (let i = 0; i < elements.length; i++) {
      elements[i].disabled = false;
    }
    } 
    else {
        restAmount.innerHTML = "You Are Beggar";
        let elements = expenseContainer.querySelectorAll("*");
        for (let i = 0; i < elements.length; i++) {
            elements[i].disabled = true;
        }
  }
}

function createContainer() {
  let expense = document.createElement("div");
  expense.className = "expense_container";
  let productName =document.getElementById("productName").value;
  let productPrice = parseInt(document.getElementById("productPrice").value);
  let date = document.getElementById("date").value;
  exp=0
    for(let i =0; i<document.querySelectorAll(".expense_container").length; i++){
        exp += parseInt(document.querySelectorAll(".expense_container")[i].getElementsByTagName("p")[2].innerHTML);
    }
    exp+=productPrice
    budget.value= parseInt(budget.value)
  balance = budget.value - exp;
  if(balance>=0){
    // restAmount.innerHTML = `
    //     <div>
    //     <h3>Total Budget</h3>
    //     <p>${budget.value}</p>
    // </div>
    // <div>
    //     <h3>Expense</h3>
    //     <p>${exp}</p>
    // </div>
    // <div>
    //     <h3>Balance</h3>
    //     <p>${balance}</p>
    // </div>
    //     `;
    
    createTally(budget.value,exp,balance);

  expense.innerHTML = `
    <div style="display: flex;">
                    <p>${date}</p>
                    <p style="font-weight: bold;">${productName}</p>
                </div>
                <div class="text-align">
                <p style="color: rgb(145, 145, 145);">${productPrice}</p>
                </div>
                
                <div class="text-align">
                    <i class="ri-edit-box-line edit"></i>
                    <i class="ri-delete-bin-line delete"></i>
                </div>
    
    `;
  expenseList.appendChild(expense);
  }else{
    alert("You have not  enough money!!")
  }
  

  remove();
  edit();
}
function remove() {
  let del = document.querySelectorAll(".delete");
  for (let i = 0; i < del.length; i++) {
    del[i].onclick = (event) => {
      event.target.parentNode.parentNode.remove();
      exp = 0;
      for(let i =0; i<document.querySelectorAll(".expense_container").length; i++){
        exp += parseInt(document.querySelectorAll(".expense_container")[i].getElementsByTagName("p")[2].innerHTML);
    }
    createTally(budget.value,exp,budget.value-exp);
    };
  }
}
function edit() {
  let edit = document.querySelectorAll(".edit");
  for (let i = 0; i < edit.length; i++) {
    edit[i].onclick = (event) => {
      let parent = event.target.parentNode.parentNode;
      let name = parent.querySelectorAll("div")[0].querySelectorAll("p")[1].innerHTML;
      let amount = parent.querySelectorAll("p")[2].innerHTML;
      let date = parent.querySelectorAll("p")[0].innerHTML;
      document.getElementById("date").value = date;
      productName.value = name;
      productPrice.value = amount;
      yourList.style.display = "none";
      yourList2.style.display = "block";
      yourList2.addEventListener("click", () =>
        editBar(event.target.parentNode.parentNode)
      );
     
    };
  }
}
function editBar(event) {
    exp = 0;
    for(let i =0; i<document.querySelectorAll(".expense_container").length; i++){
      exp += parseInt(document.querySelectorAll(".expense_container")[i].getElementsByTagName("p")[2].innerHTML);
    }
    exp= exp-parseInt(event.querySelectorAll("p")[2].innerHTML);
    exp+=parseInt(productPrice.value);
    balance = budget.value- exp;
    if(balance>=0){
 // const targetPTag = event.querySelector("p:first-child");
  //using this technique we access each element under event;

  // But here we use

        createTally(budget.value, exp, budget.value-exp)
  event.innerHTML = `
    <div style="display: flex;">
                    <p>${date.value}</p>
                    <p style="font-weight: bold;">${productName.value}</p>
                </div>
                <div class="text-align">
                <p style="color: rgb(145, 145, 145);">${productPrice.value}</p>
                </div>
                
                <div class="text-align">
                    <i class="ri-edit-box-line"></i>
                    <i class="ri-delete-bin-line"></i>
                </div>
    `;
    }
    else{
        alert("You have not  enough money!!")
    }
    yourList.style.display = "block";
    yourList2.style.display = "none";

 
}
