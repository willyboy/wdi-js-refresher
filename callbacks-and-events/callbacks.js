//1) SIMPLE ITERATOR
var findNodes = function () {
    var nodes = [], // stores the result
        found; // the next node found
    // get all the DOM elements
    var testElements = document.getElementsByClassName("test");

    for(var i = 0; i < testElements.length; i++){
        nodes.push(testElements[i]);
    };
    return nodes;
};

var hide = function (nodes) {
    var i = 0, max = nodes.length;
    for (; i < max; i += 1) {
        nodes[i].style.display = "none";
    };
};

// executing the functions hide(findNodes());
hide(findNodes());

//2) SIMPLE CALLBACK
var findNodes = function (callback) {
    var nodes = [], // stores the result
        found; // the next node found
    // get all the DOM elements
    var testElements = document.getElementsByClassName("test");
    for(var i = 0; i < testElements.length; i++){
        callback(testElements[i]);
    };
    return nodes;
};
var hide = function (node) {
    node.style.display = "none";
};

findNodes(hide);

//3) ANON CALLBACKS
var findNodes = function (callback) {
        var nodes = [], // stores the result
        found; // the next node found 
        // get all the DOM elements
        var testElements = document.getElementsByClassName("test");
        for(var i = 0; i < testElements.length; i++){
                        callback(testElements[i]);
        };
        return nodes; 
};

findNodes(function(node){
        node.style.display = "none";
});

//4) CALLBACKS WITH THIS POINTER
var myapp = {};
myapp.color = "green";
myapp.paint = function (node) {
    node.style.color = this.color;
};

var findNodes = function (callback) {
    var nodes = [], // stores the result
        found; // the next node found
    // get all the DOM elements
    var testElements = document.getElementsByClassName("test");
    for(var i = 0; i < testElements.length; i++){
        // AAAAAAhhhhgggg, the callback's this pointer is wrong.
        // The 'this' pointer is pointing to the window object, NOT to myapp object!
        callback(testElements[i]);
    };
    return nodes;
};

var findNodes_fixed = function (callback,callback_obj) {
    var nodes = [], // stores the result
        found; // the next node found
    // get all the DOM elements
    var testElements = document.getElementsByClassName("test");
    for(var i = 0; i < testElements.length; i++){
        // Use the javascript 'call' method to set the 'this' pointer
        // to myapp/callback_obj.
        callback.call(callback_obj, testElements[i]);
    };
    return nodes;
};

// findNodes(myapp.paint);

findNodes_fixed(myapp.paint, myapp)