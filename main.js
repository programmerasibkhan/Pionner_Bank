// login-btn event hendler

const loginBtn = document.getElementById('login')
loginBtn.addEventListener('click', function(){
    const loginArea = document.getElementById('login-area')
    loginArea.style.display = 'none'
    const transitionArea = document.getElementById('transition-area')
    transitionArea.style.display = 'block'
})

// deposit-btn event hendler

const depositBtn = document.getElementById("addDeposit")
depositBtn.addEventListener('click', function(){
    const depositNumber = getInputNumber("depositAmount")

    updateSpanText("currentDeposit", depositNumber)
    updateSpanText("currentBlance", depositNumber)

    document.getElementById("depositAmount").value = "";
})

// withwraw-btn event hendler

const withwrawBtn = document.getElementById("addWithwraw")
withwrawBtn.addEventListener("click", function(){
    const withdrawNumber = getInputNumber("withwrawAmount")

    updateSpanText("currentWithwraw", withdrawNumber)
    updateSpanText("currentBlance", -1 * withdrawNumber)
    
    document.getElementById("withwrawAmount").value = "";
})




function getInputNumber(id){

    const amount = document.getElementById(id).value
    const amountNumber = parseFloat(amount)
    return amountNumber;
}


function updateSpanText(id, addedNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current)
    const totalAmount = addedNumber + currentNumber
    document.getElementById(id).innerText = totalAmount 
}