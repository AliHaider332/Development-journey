const from = document.querySelector('#from');
const to = document.querySelector('#to');
const fromImg=document.querySelector('#from-img');
const toImg=document.querySelector('#to-img');
let amount=document.querySelector('.amount');
const button=document.querySelector('.container button');
let contantFinal=document.querySelector('.large-contant');
let smallContant=document.body.querySelector('.small-contant');
let data;

button.addEventListener('click',()=>{
    convertCurrency();
})

addOptions();


function addOptions(){

    for (let countryCode in countryList) 
    {
        const option1 = document.createElement('option');
        
        option1.value = countryCode; 
        option1.text = countryList[countryCode]; 
        const option2=option1.cloneNode(true);



        if(option1.value==='PK')
        {
            option1.selected=true;
            fromImg.src=`https://flagsapi.com/${option1.value}/flat/64.png`;
        }
        else if(option2.value==='IN')
        {
            option2.selected=true
            toImg.src=`https://flagsapi.com/${option2.value}/flat/64.png`;
        }
        from.appendChild(option1);
        to.appendChild(option2);
        
            
    }


}


async function selectEvent(selector,flag){
    let img=selector.value;
    console.log(img);
    if(flag)
    {
        fromImg.src=`https://flagsapi.com/${img}/flat/64.png`;
    }
    else
    {
        toImg.src=`https://flagsapi.com/${img}/flat/64.png`;
    }
    
}

from.addEventListener('change',(event)=>{
    selectEvent(event.target,true);

});

to.addEventListener('change',(eve)=>{
    selectEvent(eve.target,false);
})






async function convertCurrency() {
    
    

    try {
        document.querySelector('.container').style.display='none';
        document.querySelector('.box').style.display='flex';

        const fromCurrencyCode=countryList[from.value].toLowerCase();
        const toCurrancyCode=countryList[to.value].toLowerCase();
        
        const URL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrencyCode}.json`;
        const response = await fetch(URL);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        data = await response.json();
        console.log(data);
        
        setTimeout(()=>{
            document.querySelector('.container').style.display='flex';
           document.querySelector('.box').style.display='none';
        },1500);


        let toamount=data[fromCurrencyCode][toCurrancyCode];

        if(!isNaN(amount.value))
        {
                if(amount.value!=1)
                {
                    smallContant.innerHTML = `1 ${fromCurrencyCode.toUpperCase()} = ${toamount} ${toCurrancyCode.toUpperCase()}`;
                    
                }
                else{
                    smallContant.innerHTML="";
                }
                contantFinal.textContent=`${amount.value} ${fromCurrencyCode.toUpperCase()} = ${((toamount)*amount.value).toFixed(3)} ${toCurrancyCode.toUpperCase()}`;
                
                
        }
        else
        {
            amount.value=1;
            contantFinal.textContent=`${amount.value} ${fromCurrencyCode.toUpperCase()} = ${(toamount)*amount.value} ${toCurrancyCode.toUpperCase()}`;
        }

       
        
        
        
    } catch (error) {
        document.querySelector('.box').innerHTML=`<span id="error-appear">
            <p class="error-message">Note*: ${error}</p>
            <button class="refresh-btn" onclick="location.reload()">Refresh</button>
        </span>`
        console.error( error);
    }
}
