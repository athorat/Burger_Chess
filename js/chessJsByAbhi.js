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
/*
function pawnMove(ele){
	//ele.style.background='red';
	var r =ele.id.split("-");
	var x =r[0];
    var y =r[1] + 1;
    var xy =x+y;
   // varz="xy";
  // document.write(xy);
    xy.style.background='green';
}
function change(ele) {
//document.getElementById('col')
ele.style.background='red';
}*/