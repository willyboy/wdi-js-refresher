var nodes=document.getElementsByClassName("change-width");
for(var i=0; i<nodes.length; i++){
	nodes[i].addEventListener("click",setBorderWidth,false);
}

function setBorderWidth(e){
	var width=this.getAttribute("data-width");
	document.getElementById("img1").style.borderWidth=width+"px";
}