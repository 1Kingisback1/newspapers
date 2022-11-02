var modal = document.getElementById('myModal');


var btn = document.getElementById('btn-about');


var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
    modal.style.display = "block";
};


span.onclick = function() {
    modal.style.display = "none";
};


window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};


var modalTwo = document.getElementById('myModalTwo', 'myModalThree');


var btnTwo = document.getElementById('btn-aboutTwo', 'btn-aboutThree');


var spanTwo = document.getElementsByClassName("closeTwo", "closeThree")[0];


btnTwo.onclick = function() {
    modalTwo.style.display = "block";
};


spanTwo.onclick = function() {
    modalTwo.style.display = "none";
};


window.onclick = function(event) {
    if (event.target === modal) {
        modalTwo.style.display = "none";
    }
};

var modalThree = document.getElementById('myModalThree');


var btnThree = document.getElementById('btn-aboutThree');


var spanThree = document.getElementsByClassName("closeThree")[0];


btnThree.onclick = function() {
    modalThree.style.display = "block";
};


spanThree.onclick = function() {
    modalThree.style.display = "none";
};


window.onclick = function(event) {
    if (event.target === modal) {
        modalThree.style.display = "none";
    }
};