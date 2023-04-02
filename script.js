//your code here

function myfun() {
	let inps=document.getElementById("evaluatedText").value;
	inps=inps.trim();

	let s=inps.split(" ");
	let size1=s.length;
	/*if(inps[inps.length-1]=" "){
		size1=size1-1;
	}*/
	document.getElementById("wordCount").innerHTML=size1;
	
} 