//your JS code here. If required.
let btn=document.getElementById("btn")
let output=document.getElementById("output")
btn.addEventListener("click",displayText)

async function displayText()
{
	let text=document.getElementById("text").value
	let delay= document.getElementById("delay").value
	await setTimeout(()=>{
		output.innerText=text
	},delay)
}