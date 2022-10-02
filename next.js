//This is done without using promises and using async and await


document.addEventListener("DOMContentLoaded",()=>{

    document.querySelector("#currency-converter").addEventListener("submit",async (event)=>
    {
      event.preventDefault();
  
      const {target:{from,to,amount}}=event;
  
      var headers = new Headers();
      headers.append("apikey", "yjJhqnYLy4VgjCB4nPIXYgM3blJpD3rf");
  
      const requestOptions={
        method:"GET",
        headers,
      }
  
      let response=await fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to.value}&from=${from.value}&amount=${amount.valueAsNumber}`,requestOptions)
      const data=await response.json();
      let {info,date,query:{to:convertedTO},result}=data;
      document.querySelector(".result").textContent=`As per the exchange rate :${info.rate.toFixed(2)} for ${date} ==>converted value in ${convertedTO} is ${result.toFixed(2)} `;
    
    })
  })