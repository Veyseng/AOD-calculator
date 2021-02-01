"use strict";
//Calculate the loss of efficiency and the revenue
document.querySelector('.loss-btn').addEventListener('click',function(){
	var aod = document.getElementById("InputAOD").value;
	if(aod <= 1 && aod >=0){
		//Calculate loss efficiency 
		const eff = aod * 4;
		//Calculate the loss revenue by knowing the loss efficiency
		const rev = eff * 1000 * 40000;
		//Display the loss efficiency and AOD value
		document.querySelector(".efficiency").textContent = `The Loss of Efficiency is ${eff}% with ${aod} AOD value`;
		//Display the loss of revenue in USD in a year by assummig that the overall energy is 100 gigawatt output of energy
		document.querySelector(".revenue").textContent = `The Loss of Revenue is ${rev} US Dollars / Year (According to 100 gigawatt output)`;
	}else{
		//display invalid data
		document.querySelector(".efficiency").textContent = `Invalid data`;
		document.querySelector(".revenue").textContent = ``;
	}
});

//Calculate the number of panel need to use
document.querySelector('.num-panel-btn').addEventListener('click',function(){
	const sunlight = document.getElementById("InputSunlight").value;
	const wattageOption = document.getElementById("wattage-option").value;
	const EnergyReq = document.getElementById("InputEnergyReq").value; 
	const wattOption = [150,350];
	var numPanel;
	
	//Math.ciel 
	if(EnergyReq > 0){
		if(sunlight >= 0 && sunlight <= 24){
			if(wattageOption == wattOption[0]){
				numPanel = Math.ceil((EnergyReq * sunlight) / wattOption[0]);
				document.querySelector(".number-panel-output").textContent = `The number of Solar Panels based on your requirement : ${numPanel}`;
			}else if(wattageOption == wattOption[1]){
				numPanel = Math.ceil((EnergyReq * sunlight) / wattOption[1]);
				document.querySelector(".number-panel-output").textContent = `The number of Solar Panels based on your requirement : ${numPanel}`;
			}
		}else{
			document.querySelector(".number-panel-output").textContent = `Invalid Sunlight Peak`;
		}
	}else{
		document.querySelector(".number-panel-output").textContent = `Invalid Energy Value`;
	}
	
});



