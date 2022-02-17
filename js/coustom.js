function inputFild(input){
    const foodInput=document.getElementById(input);
    const foodtext=Number(foodInput.value);
    //clear
    foodInput.value ='';
    return foodtext;
}

//Calculate Button handaler
document.getElementById('calculet').addEventListener('click',function(){
    //food
    const foodtext=inputFild('food');
    //rend
    const rendText=inputFild('rend');
    //clothes
    const clothesText=inputFild('clothes');
        //income
    const income=document.getElementById('income');
    const incomeText=Number(income.value);
    // blance
    const balance=document.getElementById('balance');
   
    //totalexpness
    if (foodtext > 0 && rendText > 0 && clothesText > 0 && incomeText > 0) {
        const totalExpness=document.getElementById('totalexpness')
        const totalExpnessText =Number(totalExpness.innerText);  
        const totalAmount = foodtext + rendText + clothesText;
        if(incomeText > totalAmount){
            totalExpness.innerText =totalAmount;
            const finalBlance= incomeText - totalAmount;
            balance.innerText = finalBlance;
        }else{
            alert('Your balance is low !!!')
        }    
    }else{
        alert('Enter Possitive Number 😐')
    }
});

//save button Handaler 
document.getElementById('save').addEventListener('click',function(){
    const income=document.getElementById('income');
    const incomeText=Number(income.value);
    const saveInput=document.getElementById('save-input');
    const saveInputText =Number(saveInput.value);
    if (saveInputText > 0) {
        const parsent =saveInputText / 100;
        const savingAmount=document.getElementById('saving-Amount');
        const cheekValue = parsent * incomeText;
        const balance=document.getElementById('balance');
        if(Number(cheekValue) < Number(balance.innerText)){
            savingAmount.innerText = cheekValue;
            const remainingBalance=document.getElementById('remaining-Balance');  
            remainingBalance.innerText = balance.innerText -  savingAmount.innerText;
        }else{
            alert('Your balance is low')
        }
    }else{
        alert('Enter a possative number')
    }

})