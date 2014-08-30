////var col1 =getElementById(A8).style.background;
//var col2 =getElementById(A7).style.background;
 //var c;

 function defaultBg(ele){
	ele.style.background='#CCF5FF';
}

function highlightBG(element) {
  if(element.style.background == 'green')
    {
      //var col=element.style.background;
      //element.style.background ='red'; defaultBg(ele);

       defaultBg(element);
    }
   else{
     element.style.backgroundColor = 'green';
   }   
}

function pawnPosibleMove(ele){
	//ele.style.background='red';
	//var r =ele.id.split("-");
  var r =ele.parentNode.id.split("-");
  var x =r[0];
    var y = parseInt(r[1]) + 1;
    var xy =x+y;
   // varz="xy";
    getElementById("xy").style.backgroundColor='green';
 // document.write(xy);

}/*
function change(ele) {
//document.getElementById('col')
ele.style.background='red';
}*/