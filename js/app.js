function inputFilds(inputFild){
    const inputfild=document.getElementById(inputFild);
    const inputText=Number(inputfild.value);
    return inputText;
}
//calculet Handelar Button
document.getElementById('calculet').addEventListener('click',function(){
    
    const foodText= inputFilds('food')
    const rendText=inputFilds('rend');
    const clothesText=inputFilds('clothes');
    const incomeText=inputFilds('income');
    
    if(foodText > 0 && rendText > 0 && clothesText > 0 && incomeText > 0){
    const totalexpness=document.getElementById('totalexpness');
    const totalExpnessAmount=foodText + rendText + clothesText;
            if(incomeText >= totalExpnessAmount){ 
            totalexpness.innerText = totalExpnessAmount;
            const balance=document.getElementById('balance');
            const mainBalance =incomeText - totalExpnessAmount;
            balance.innerText =mainBalance;
        }else{
            alert('Balance Low');
        }
    }else{
        alert('nul');
    }
})

document.getElementById('save').addEventListener('click',function(){
    const incomeText=inputFilds('income');
    const parsent=incomeText /100;
    const saveInput=inputFilds('save-input');
    const parsentTotal= parsent * saveInput;
    const savingAmount =document.getElementById('saving-Amount');
    savingAmount.innerText = parsentTotal;
    const balance=document.getElementById('balance');
    const totalMainBalance =  balance.innerText - savingAmount.innerText;
    const remainingBalance =document.getElementById('remaining-Balance');
    remainingBalance.innerText = totalMainBalance;


})