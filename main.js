const loginBtn = document.getElementById('login')
loginBtn.addEventListener('click', function(){
    const loginArea = document.getElementById('login-area')
    loginArea.style.display = 'none'
    const transitionArea = document.getElementById('transition-area')
    transitionArea.style.display = 'block'
})

const depositBtn = document.getElementById("addDeposit")
depositBtn.addEventListener('click', function(){

    const depositNumber = getInputNumber("depositAmount")

    updateSpanText("currentDeposit", depositNumber)
    updateSpanText("currentBlance", depositNumber)

    document.getElementById("depositAmount").value = "";
})


const withwrawBtn = document.getElementById("addWithwraw")
withwrawBtn.addEventListener("click", function(){

    const withdrawNumber = getInputNumber("withwrawAmount")
    console.log(withdrawNumber)
})






function getInputNumber(id){

    const amount = document.getElementById(id).value
    const amountNumber = parseFloat(amount)
    return amountNumber;
}


function updateSpanText(id, depositNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current)
    const totalAmount = depositNumber + currentNumber
    document.getElementById(id).innerText = totalAmount 
}