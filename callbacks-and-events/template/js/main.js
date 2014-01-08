/*function findNodes(){
	var nodes=[],found;
	var testElements=document.getElementsByClassName("test");
	nodes=Array.prototype.slice.call(testElements);
	return nodes;
}
function hide(nodes){
	for(var i=0; i<nodes.length; i++){
		nodes[i].style.display="none";
	}
}
hide(findNodes());*/
/*Anonymous callback*/
/*function findNodes(callback){
	var testElements=document.getElementsByClassName("test"),nodes=[];
	for(var i=0; i<testElements.length; i++){
		nodes.push(testElements[i]);
		callback(testElements[i]);
	}
}
findNodes(function(node){
	node.style.display="none";
});*/

var coloring={};
coloring.color="purple";
coloring.paint=function(node){
	node.style.backgroundColor=this.color;
}
function findNodes(callback){
	var testElements=document.getElementsByClassName("test"),nodes=[];
	for(var i=0; i<testElements.length; i++){
		nodes.push(testElements[i]);
		callback(testElements[i]);
	}
	return nodes;
}

findNodes(coloring.paint.bind(coloring));

(function(that){
	that.myfunction();
}(this))






