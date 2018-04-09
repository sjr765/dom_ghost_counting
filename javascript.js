function firstFunction(){
    var x = document.getElementsByTagName("p");
    alert("There are "  + x.length + " ghosts on this page!" )
}


function secondFunction(){
    var x = document.getElementById("paragraphOne");
    var y = x.getElementsByTagName('p');
    alert("There are "  + y.length + " pink ghosts on this page" );
    x.style.color = "pink";
}

function thirdFunction(){
    var x = document.getElementById("paragraphTwo");
    var y = x.getElementsByTagName("p")
    alert("There are "  + y.length + " old ghosts on the page" );
}

function fourthFunction(){
    var surprise = document.getElementById("four");
    surprise.innerHTML = "BOOO!";
    surprise.style.color = "blue";

}