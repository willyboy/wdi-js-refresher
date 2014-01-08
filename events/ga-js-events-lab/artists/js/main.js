var artists=document.getElementById("artists").childNodes;
findNodes(artists,function(artist){
	artist.addEventListener("click",selectArtist,false);
});
function selectArtist(e){
	findNodes(artists,function(artist){
		artist.style.backgroundColor="white";		
	});
	this.style.backgroundColor="red";
	findNodes(document.querySelectorAll("#artists~div"),function(desc){
		desc.style.display="none";
	})
	document.querySelectorAll("#artists~div")[Array.prototype.slice.call(document.querySelectorAll("#artists>li")).indexOf(this)].style.display="block";
}
function findNodes(nodes,callback){
	for(var i=0; i<nodes.length; i++){
		if(nodes[i].nodeType!=3){
			callback(nodes[i]);
		}
	}
}