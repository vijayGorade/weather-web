console.log("hello vijay gorade");


alert("नमस्कार, मी  VIjay. या वेबमध्ये आंतरराष्ट्रीय हवामान आहे. कदाचित तुमच्या गावाचे हवामान येणार नाही. तुम्ही फक्त City Che हवामान पाहू शकता. धन्यवाद!")

const searchBtn=document.querySelector(".btn");

searchBtn.addEventListener("click",()=>{
    const  place=document.getElementById("city-input").value;
if(!place)
{
alert("please write the proper place");
}
else{
    const  temp=document.querySelector(".temperature");
    const des=document.querySelector(".description");
    const humanity=document.querySelector(".hum");
    const wind=document.querySelector(".wind");
     let img=document.querySelector('.img');
  const promise=fetch(`http://api.weatherapi.com/v1/current.json?key=e0728c0b425c4378bd874512250803&q=${place}&aqi=yes`)
promise.then((data)=>{
 data.json().then((data)=>{
    temp.innerText=`${data.current.temp_c}°C`;
    console.log(data)
    humanity.innerText=data.current.humidity    +"%";
    wind.innerText=`${data.current.wind_kph}km/h`
    des.innerText=data.current.condition.text;
 }).catch((error)=>{
    alert("please enter the valied location")
})
}).catch((error)=>{
    alert(error)
})

}


})