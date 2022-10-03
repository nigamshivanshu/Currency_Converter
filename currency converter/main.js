//This is done using promises;

document.addEventListener("DOMContentLoaded",()=>{

  document.querySelector("#currency-converter").addEventListener("submit",(event)=>
  {
    event.preventDefault();

    const {target:{from,to,amount}}=event;

    var headers = new Headers();
    headers.append("apikey", "yjJhqnYLy4VgjCB4nPIXYgM3blJpD3rf");

    const requestOptions={
      method:"GET",
      headers,
    }

    fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to.value}&from=${from.value}&amount=${amount.valueAsNumber}`,requestOptions)
    .then(response=> response.json())
    .then(data=> {
      let {info,date,query:{to},result}=data;
      document.querySelector(".result").textContent=`As per the exchange rate :${info.rate.toFixed(2)} for ${date} ==>converted value in ${to} is ${result.toFixed(2)} `;
    })
    .catch(error=> console.log(error));
  })
})