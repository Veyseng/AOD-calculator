
"use strict";

document.querySelector('.btn').addEventListener('click',function(){
	var aod = document.getElementById("Input").value;
	if(aod <= 1 && aod >=0){
		const eff = aod * 48.0;
		const rev = eff * 1000 * 40000;
		document.querySelector(".efficiency").textContent = `The efficiency loss is ${eff}% with ${aod} AOD  `;
		document.querySelector(".revenue").textContent = `The loss is ${rev} USD (Measure in 100 gigawatts) `;
	}else{
		document.querySelector(".efficiency").textContent = `Invalid data`;
		document.querySelector(".revenue").textContent = ``;
	}
});


