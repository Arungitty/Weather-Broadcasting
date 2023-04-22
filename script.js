const options= {
    method:"GET",
    headers: {
        'X-RapidAPI-Key': 'b45e96323fmshf5e4bc50d3b8a90p1e091djsnfb21cde4eb87',
        'x-rapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
}
const getWeather= (city)=> {
    let promise= fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +city, options);
    // console.log(promise);
    promise.then((response)=> {
        return response.json();
    }).then((value)=> {
        console.log(value);
        card11p.innerHTML= `${value.temp} &#8451`;
        card12p.innerHTML= `${value.min_temp} &#8451`;
        card13p.innerHTML= `${value.max_temp} &#8451`;
        card21p.innerHTML= `${value.humidity}`;
        card22p.innerHTML= `${value.sunrise}`;
        card23p.innerHTML= `${value.sunset}`;
        card31p.innerHTML= `${value.wind_degrees} degree`;
        card32p.innerHTML= `${value.wind_speed} m/sec`;
        th1.innerHTML= city;
        td11.innerHTML= `${value.temp} &#8451`;
        td12.innerHTML= `${value.min_temp} &#8451`;
        td13.innerHTML= `${value.max_temp} &#8451`;
        td14.innerHTML= `${value.humidity}`;
        td15.innerHTML= `${value.sunrise}`;
        td16.innerHTML= `${value.sunset}`;
        td17.innerHTML= `${value.wind_degree} degree`;
        td18.innerHTML= `${value.wind_speed}`;
    })
}

submit.addEventListener("click",(PointerEvent)=> {
    PointerEvent.preventDefault();
    let heading= document.getElementById("heading");
    let searchValue= document.getElementById("search").value;
    searchValue= searchValue.toString();
    heading.innerHTML= `<h1>Weather for: ${searchValue}</h1>`;
    getWeather(searchValue);
})




























