var result = fetch("https://restcountries.com/v3.1/all");
result.then((data)=>data.json()).then((data1)=>foo(data1));



function foo(data1){
  
  
  let div1 = document.createElement("div");
  div1.setAttribute("class","container");
  let div2 = document.createElement("div");
  div2.setAttribute("class","row");


  for(let i in data1){ 
    let lati = (data1[i].latlng[0]);
    let long = (data1[i].latlng[1]); 
   
let div3= document.createElement("div");
  div3.setAttribute("class","col-lg-4");


  
     let div4= document.createElement("div");  
      div4.innerHTML= `


        <div class="card" style="width: 18rem;">
           <img src="${data1[i].flags.png}" class="card-img-top" alt="...">
             <div class="card-body">
                 <h5 class="card-title">${i,data1[i].name.common}</h5>
                  <p class="card-text" >Region: ${data1[i].region}</p>
                  <p class="card-text">Capital: ${data1[i].capital}</p>
                  <p class="card-text" id="lat">Latitude${data1[i].latlng[0]}</p>
                  <p class="card-text">Longitude: ${i,data1[i].latlng[1]}</p>
                  <p class="card-text">Contry code: ${i,data1[i].cca3}</p>
                <button type="button"class="btn btn-primary"  onclick="foo1(${lati},${long})" data-toggle="modal" data-target="#exampleModal">Weather-Bell
                  </button>
          
                  </div>
          </div>`

          
          

         
                  
    
    div3.append(div4);
    div2.append(div3);
    div1.append(div2);
  document.body.append(div1);


}};


let div5= document.createElement("div")  
          
async function foo1(lati,long) {

let api =`https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${long}&appid=54f81682ae0b70d179ab819cf4145e04`;
let url = await fetch(api);
let res = await url.json();
console.log(res);

div5.innerHTML= `

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
 <div class="modal-dialog">
 <div class="modal-content">
 
 <div class="modal-header">
 <h5 class="modal-title" id="exampleModalLabel">Weather</h5>
<button type="button" class="close" data-dismiss="modal" aria-label="Close">
<span aria-hidden="true">&times;</span>
</button>
</div>

<div class="modal-body">
<p class="card-text">Temperature: ${res.main.temp}</p>
<p class="card-text">Pressure: ${res.main.pressure}</p>
<p class="card-text">Humidity:${res.main.humidity}</p>
<p class="card-text">wind speed: ${res.wind.speed}</p>
<p class="card-text">wind deg: ${res.wind.deg}</p>
</div>


</div>
</div>
</div>`

};

document.body.append(div5);




