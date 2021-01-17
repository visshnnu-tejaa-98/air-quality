let search = document.getElementById("search")
console.log(search)

search.addEventListener("click",function(e){
    // e.preventDefault()
    data.innerHTML=""
    async function getData(){
        try{
            let apiResponse = await fetch(`https://api.airvisual.com/v2/nearest_city?key=a4821488-0544-45c7-8e11-88512f603069`)
            let apiData = await apiResponse.json()
            let date = apiData.data.current.pollution.ts
            console.log(date.split("T0"))         
            let div = document.createElement("div")
            div.innerHTML = `
            <table class="table table-striped ">
            <tbody>
                <tr><th scope="col">Country</th><td scope="col">${apiData.data.country}</td></tr>
                <tr><th scope="col">State</th><td scope="col">${apiData.data.state}</td></tr>
                <tr><th scope="col">City</th><td scope="col">${apiData.data.city}</td></tr>
                <tr><th>AQI value based on China MEP standard</th><td>${apiData.data.current.pollution.aqicn}</td></tr>
                <tr><th>AQI value based on US EPA standard</th><td>${apiData.data.current.pollution.aqius}</td></tr>
                <tr><th>Humidity %</th><td>${apiData.data.current.weather.hu}</td></tr>
                <tr><th>Atmospheric Pressure in hPa</th><td>${apiData.data.current.weather.pr}</td></tr>
                <tr><th>temperature in Celsius</th><td>${apiData.data.current.weather.tp}</td></tr>
                <tr><th>wind direction, as an angle of 360°</th><td>${apiData.data.current.weather.wd}</td></tr>
                <tr><th>wind speed (m/s)</th><td>${apiData.data.current.weather.ws}</td></tr>
                <tr><th>Last updated</th><td class="text-danger">${date.split("T0")[0]}</td></tr>
            </tbody>
        </table>`

        data.appendChild(div)
        }catch(err){
            alert("No other City found, please try with different Input")
            console.log(err)
        }
        
    }
    getData().catch(err=>console.log(err))
})
