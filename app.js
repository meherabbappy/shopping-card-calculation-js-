function updateProductNmuber(product,price,isIncreasing){
    const productInput = document.getElementById(product + "-number");
    let productNumber = productInput.value;
    if(isIncreasing == true){
        productNumber = parseInt(productNumber)+1;
    }
    else if(productNumber > 0){
        productNumber = parseInt(productNumber)-1;
    }
    
    productInput.value = productNumber;
    //update total
    const priceTotal = document.getElementById(product + "-total");
    priceTotal.innerText = productNumber * price; 

    //calculate total
    calculateTotal();

}

function getInputValue(product){
    const productInput = document.getElementById(product + "-number");
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
 //subtotal
function calculateTotal(){
    const phoneTotal = getInputValue("phone") * 59;
    const caseTotal = getInputValue("case") * 1219;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
      // update on html 
      document.getElementById("sub-total").innerText = subTotal;
      document.getElementById("tax-amount").innerText = tax;
      document.getElementById("total-price").innerText = totalPrice;
    
}


//phone increase decrease event
document.getElementById("phone-plus").addEventListener("click",function(){
    updateProductNmuber("phone",59,true);
})
document.getElementById("phone-minus").addEventListener("click",function(){
    updateProductNmuber("phone",59,false);
})

//case increase decrease event
document.getElementById('case-plus').addEventListener("click",function(){
    updateProductNmuber("case",1219,true);
   
})
document.getElementById('case-minus').addEventListener("click",function(){
    // const caseInput = document.getElementById("case-number");
    // const caseNumber = caseInput.value;
    // caseInput.value = parseInt(caseNumber) -1;
    updateProductNmuber("case",1219,false);
})

