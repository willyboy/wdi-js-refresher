var artistInfo={};
Object.defineProperties(artistInfo,{
	"artists":{
		get:function(){
			return document.getElementById("artists").childNodes;
		},
		enumerable:true
	},
	"descriptions":{
		get:function(){
			return document.querySelectorAll("#artists~div");
		},
		enumerable:true
	}
});
findNodes(artistInfo.artists,function(artist){
	artist.addEventListener("click",selectArtist,true);
});

function selectArtist(e){
	clearSelectedArtist();
	this.className="selected";
	artistInfo.descriptions[
		Array.prototype.slice.call(
			document.querySelectorAll("#artists>li")
		).indexOf(this)
	].className="show";
}
function clearSelectedArtist(){
	findNodes(artistInfo.artists,function(artist){
		artist.className="";
	});
	findNodes(artistInfo.descriptions,function(desc){
		desc.className="hide";
	});
}
function findNodes(nodes,callback){
	for(var i=0; i<nodes.length; i++){
		if(nodes[i].nodeType!=3){
			callback(nodes[i]);
		}
	}
}