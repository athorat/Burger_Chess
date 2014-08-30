// java script file 

//var chess=new chess();

var rook_black="<img src='images/rook_black.png' width=80%>";
var knight_black="<img src='images/knight_black.png' width=80%>";
var bishop_black="<img src='images/bishop_black.png' width=80%>";
var queen_black="<img src='images/queen_black.png' width=80%>";
var king_black="<img src='images/king_black.png' width=80%>";
var pawn_black="<img src='images/pawn_black.png' width=80%>";
var pawn_white="<img src='images/pawn_white.png' width=80%>";






 function Start_chess()
 {
  //alert("hiii");
 
 document.getElementById("A1").innerHTML=rook_black;
 document.getElementById("A2").innerHTML=knight_black;
 document.getElementById("A3").innerHTML=bishop_black;
 document.getElementById("A4").innerHTML=queen_black;
 document.getElementById("A5").innerHTML=king_black;
 document.getElementById("A6").innerHTML=bishop_black;
 document.getElementById("A7").innerHTML=knight_black;
 document.getElementById("A8").innerHTML=rook_black;
 
 document.getElementById("B1").innerHTML=pawn_black;
 document.getElementById("B2").innerHTML=pawn_black;
 document.getElementById("B3").innerHTML=pawn_black;
 document.getElementById("B4").innerHTML=pawn_black;
 document.getElementById("B5").innerHTML=pawn_black;
 document.getElementById("B6").innerHTML=pawn_black;
 document.getElementById("B7").innerHTML=pawn_black;
 document.getElementById("B8").innerHTML=pawn_black;
 
 
 

 }
 
function clear_chess()
 {
  //var pawn_img = document.getElementById('pawn_black');
    pawn_black.style.visibility = 'hidden';

	var rook_img = document.getElementById('rook_black');
    rook_img.style.visibility = 'hidden';
	

	
// alert("hiii");
 
 }
 
 