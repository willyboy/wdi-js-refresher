var artistInfo={};
Object.defineProperties(artistInfo,{
	"artists":{
		get:function(){
			return findNodes(document.getElementById("artists").childNodes);
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
document.getElementById("artists").addEventListener("click",selectArtist,false)
/*addEvents();
function addEvents(){
	findNodes(artistInfo.artists,function(artist){
		artist.addEventListener("click",selectArtist,true);
	});
}*/

document.getElementsByTagName("form")[0].addEventListener("submit",function(e){
	var artistName=document.getElementById("artist-name").value,artistDesc=document.getElementById("artist-description").value;
	var li=document.createElement("li"),div=document.createElement("div");
	div.innerHTML=artistDesc;
	div.className="hide";
	li.innerHTML=artistName;
	document.getElementById("artists").appendChild(li);
	document.getElementsByClassName("clearfix")[0].appendChild(div)
},
false)
function selectArtist(e){
	if(e.target.tagName!="LI") return false;
	clearSelectedArtist();
	e.target.className="selected";
	artistInfo.descriptions[
		Array.prototype.slice.call(
			artistInfo.artists
		).indexOf(e.target)
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
	var arr=[];
	for(var i=0; i<nodes.length; i++){
		if(nodes[i].nodeType!=3){
			arr.push(nodes[i]);
			if(callback) callback(nodes[i]);
		}
	}
	return arr;
}