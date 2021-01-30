
"use strict";

document.querySelector('.btn').addEventListener('click',function(){
	var aod = document.getElementById("Input").value;
	if(aod <= 1 && aod >=0){
		const eff = aod * 48;
		const rev = eff * 1000 * 40000;
		document.querySelector(".efficiency").textContent = `The Loss of Efficiency is ${eff}% with ${aod} AOD value`;
		document.querySelector(".revenue").textContent = `The Loss of Revenue is ${rev} US Dollars / Year`;	
		
	}else{
		document.querySelector(".efficiency").textContent = `Invalid data`;
		document.querySelector(".revenue").textContent = ``;
	}
});


