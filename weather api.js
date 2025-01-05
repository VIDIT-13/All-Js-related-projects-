
var result;
let url = 'https://weather-api138.p.rapidapi.com/weather?city_name=';
let imgurl="https://openweathermap.org/img/wn/"//https://openweathermap.org/img/wn/{icon_code}@2x.png
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '228c52c55bmsh77f6ab7c31d2797p15d255jsn103e8e7ce92e',
		'x-rapidapi-host': 'weather-api138.p.rapidapi.com'
	}
};

const get_weather= async function(){try {
	
    let pid=document.querySelector('#search');
    url=url+pid.value;//formation of url

	const response = await fetch(url, options);
    const result2 = await response.json();//getting the result
	result=result2
	console.log(result2);//consoling the result

	imgurl=imgurl+result.weather[0].icon+"@2x.png";
	document.querySelector("#pic").setAttribute('src',imgurl);
	imgurl="https://openweathermap.org/img/wn/";
    // tempupdater();
    url='https://weather-api138.p.rapidapi.com/weather?city_name=';

	card1update();
	card2update();
	card3update();
    
} catch (error) {
	console.error(error);
}


}

const weather=document.querySelector('#wweather');
weather.addEventListener('click',(event)=>{
	event.preventDefault();
	get_weather();
});

function scale(){gsap.from("#cardone",{
    x:500,
    duration:2
})}
function scale2(){gsap.from("#cardthree",{
    x:-500,
    duration:2
})
}
scale();scale2();
// function tempupdater(){
// let card1=document.querySelector('#cardtwo');
// let temp=document.querySelector('#temp').innerText="Temperature : " +result.main.temp;
// let max_temp=document.querySelector("#maxtemp").innerText="Maximum Temperature : "+result.main.temp_max;
// let min_temp=document.querySelector("#mintemp").innerText="Minimum Temperature : "+result.main.temp_min;
// let feelslike=document.querySelector("#feelslike").innerText="Feels Like : "+result.main.feels_like;
// }


// const card1=document.querySelector('#cardone').addEventListener('mouseenter',()=>{
//     gsap.to('#cardone',{
//         scale:1.2
//     })
// })
// card1.addEventListener('mouseleave',()=>{
//     gsap.to('#cardone',{
//         scale:0.8
//     })
// })


function card1update(){
	let humid=document.querySelector('#Humidity').innerText="Humidity : "+result.main.humidity+"%";
	let sea=document.querySelector("#Sea").innerText="Sea Level : "+result.main.sea_level+" millibars";
	let info=document.querySelector("#weatherdesc").innerText="Weather Description : "+result.weather[0].description;
	// let pic=document.querySelector("picture").innerText="Weather Picture : ";
}

function card2update(){
	let temp=document.querySelector('#temp').innerText="Temperature : "+result.main.temp+'°C';
	let maxtemp=document.querySelector('#maxtemp').innerText="Maximum Temperature : "+result.main.temp_max+'°C';
	let mintemp=document.querySelector('#mintemp').innerText="Minimum Temperature : "+result.main.temp_min+'°C';
	let feelslike=document.querySelector('#feelslike').innerText="Feels Like : "+result.main.feels_like+'°C';
}

function card3update(){
	let pasca=document.querySelector("#pasca").innerText="Pressure : "+result.main.pressure+' millibars';
	let wspeed=document.querySelector("#wspeed").innerText="Wind Speed : "+result.wind.speed+" km/hr";
	let wsdegree=document.querySelector("#wdegree").innerText="Wind Degree : "+result.wind.deg+"°";
	let gust=document.querySelector('#gust').innerText="Gust : "+result.wind.gust +" km/hr";

}

