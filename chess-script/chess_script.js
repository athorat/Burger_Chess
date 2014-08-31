// java script file 

//var chess=new chess();
var elementId;

var rook_black="<img src='images/rook_black.png' width=80%>";
var knight_black="<img src='images/knight_black.png' width=80%>";
var bishop_black="<img src='images/bishop_black.png' width=80%>";
var queen_black="<img src='images/queen_black.png' width=80%>";
var king_black="<img src='images/king_black.png' width=80%>";
var pawn_black="<img src='images/pawn_black.png' width=80%>";
var pawn_white="<img src='images/pawn_white.png' width=80%>";

 function Start_chess()
 {
 // alert("hiii");
 
 document.getElementById("01").innerHTML=rook_black;
 document.getElementById("02").innerHTML=knight_black;
 document.getElementById("03").innerHTML=bishop_black;
 document.getElementById("04").innerHTML=queen_black;
 document.getElementById("05").innerHTML=king_black;
 document.getElementById("06").innerHTML=bishop_black;
 document.getElementById("07").innerHTML=knight_black;
 document.getElementById("08").innerHTML=rook_black;
 
 document.getElementById("11").innerHTML=pawn_black;
 document.getElementById("12").innerHTML=pawn_black;
 document.getElementById("13").innerHTML=pawn_black;
 document.getElementById("14").innerHTML=pawn_black;
 document.getElementById("15").innerHTML=pawn_black;
 document.getElementById("16").innerHTML=pawn_black;
 document.getElementById("17").innerHTML=pawn_black;
 document.getElementById("18").innerHTML=pawn_black;
 
 }
 
function clear_chess()
 {
 alert("hiii");
  //var pawn_img = document.getElementById('pawn_black');
  /*  pawn_black.style.visibility = 'hidden';

	var rook_img = document.getElementById('rook_black');
    rook_img.style.visibility = 'hidden';*/

 }
 
 function divClick(element)
 {
 var color=element.firstChild.id.charAt(0);
 var type= element.firstChild.id.charAt(1);
 alert(color);
 alert(type);
var divId=element.id;
 alert(divId);
 
 elementId=element.firstChild.id;
 alert(elementId);
 
 if(type=="r")
 {
 rmove(divId);
 }

 if(type=="k")
 kmove(divId);
 
 }
function rmove(divId)
{

alert("in rook move function");
alert(divId);


}
 
 function kmove(divId)
{
alert("in Knight move function");
}

 
 
 
 
 
 