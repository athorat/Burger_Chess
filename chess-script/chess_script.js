// java script file 

//var chess=new chess();
var pieceId;
var divId="";

var alternate_move='n';
var checkFlag=true;

// var rook_black="<img src='images/rook_black.png' width=80%>";
// var knight_black="<img src='images/knight_black.png' width=80%>";
// var bishop_black="<img src='images/bishop_black.png' width=80%>";
// var queen_black="<img src='images/queen_black.png' width=80%>";
// var king_black="<img src='images/king_black.png' width=80%>";
// var pawn_black="<img src='images/pawn_black.png' width=80%>";
// var pawn_white="<img src='images/pawn_white.png' width=80%>";
/*
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
    rook_img.style.visibility = 'hidden';

 }
 */
 
function entry(element)
 {
 
 //alert("checkkk");
 
 var clear= document.getElementsByTagName("div");
 for(z=0;z<clear.length;z++)
 {
 clear[z].setAttribute("style","border-color:black;");
 }
 
 //alert("hey");
 var pieceColor=element.firstChild.id.charAt(0);
 var pieceType= element.firstChild.id.charAt(1);
// alternate_move=pieceColor;
 pieceColorType=pieceColor;
 //alert(pieceColor);
// alert(pieceType);
divId=element.id;
// alert(divId);
 
 pieceId=element.firstChild.id;
// alert(pieceId);

 if(checkFlag||alternate_move!=pieceColor)
 { 	
       alternate_move=pieceColor;
	   checkFlag=false;
 
  
 
 
 if(pieceType=="r")
 {
 rookMove(divId);
 }

 if(pieceType=="k")
 {
 kingMove(divId);
 }
 if(pieceType=="b")
 {
 bishopMove(divId);
 }
if(pieceType=="h")
{
horsemove(divId);
}

//////////////
  if(pieceType=="q")
 {
 queenMove(element);
 }
 
 if(pieceType=='p')
   {
		if(pieceColor =='w'){
			wpawnMove(element);
			}
	  else{
		pawnMove(element)
		}
    }
 ////////////////////////

 
 }
 else
	alert("Wrong Move.... Opponents move");
 }


 

function  bishopMove(divId,color)
{
    
  //  alert("in bishop move function");
	//var dId=divId;
	//alert(divId);

	var x=parseInt(divId.charAt(0));
	var y=parseInt(divId.charAt(1));

	divId_Index1=x;
    divId_Index2=y;

	for(divId_Index1=x+1,divId_Index2=y+1;divId_Index2<=8 && divId_Index1<=7;divId_Index2++,divId_Index1++)
	{
	   if(isEmpty(divId_Index1,divId_Index2))
	   {
	//   alert("in isEmpty forloop1");
	    document.getElementById(""+divId_Index1+divId_Index2).setAttribute("style","border-color:red;");
		document.getElementById(""+divId_Index1+divId_Index2).setAttribute("onclick","getId(this)");
		
		
	   }
	   else 
	   {
	  // alert("isfr");
	   if(!isFriend(divId_Index1,divId_Index2))
	   {
	   document.getElementById(""+divId_Index1+divId_Index2).setAttribute("style","border-color:red;");
	   document.getElementById(""+divId_Index1+divId_Index2).setAttribute("onclick","getId(this)");
	   }
	   break;
	   }
	
	}
	
	
	divId_Index1=x;
	divId_Index2=y;
	for(divId_Index1=x-1,divId_Index2=y-1;divId_Index2>0 && divId_Index1>=0;divId_Index2--,divId_Index1--)
	{
	   if(isEmpty(divId_Index1,divId_Index2))
	   {
	   //alert("in isEmpty forloop2");
	    document.getElementById(""+divId_Index1+divId_Index2).setAttribute("style","border-color:red;");
		document.getElementById(""+divId_Index1+divId_Index2).setAttribute("onclick","getId(this)");
		//document.getElementById(""+divId_Index1+divId_Index2).onclick("getId(this)");
		
	   }
	  else 
	   {
	 //  alert("isfr");
	   if(!isFriend(divId_Index1,divId_Index2))
	   {
	   document.getElementById(""+divId_Index1+divId_Index2).setAttribute("style","border-color:red;");
	   document.getElementById(""+divId_Index1+divId_Index2).setAttribute("onclick","getId(this)");
	   }
	   break;
	   }
	
//	alert("check it "+divId_Index1+" "+divId_Index2);
	}
	
	
	divId_Index1=x;
	divId_Index2=y;
	
	for(divId_Index1=x-1,divId_Index2=y+1;divId_Index1>=0&&divId_Index2<=8;divId_Index2++,divId_Index1--)
	{
	
	
	   if(isEmpty(divId_Index1,divId_Index2))
	   {
	//   alert("in isEmpty forloop1");
	    document.getElementById(""+divId_Index1+divId_Index2).setAttribute("style","border-color:red;");
		document.getElementById(""+divId_Index1+divId_Index2).setAttribute("onclick","getId(this)");
	   }
	  else 
	   {
	 //  alert("isfr");
	   if(!isFriend(divId_Index1,divId_Index2))
	   {
	   document.getElementById(""+divId_Index1+divId_Index2).setAttribute("style","border-color:red;");
	   document.getElementById(""+divId_Index1+divId_Index2).setAttribute("onclick","getId(this)");
	   }
	   break;
	   }
	
	
	}
		divId_Index1=x;
	divId_Index2=y;
	for(divId_Index1=x+1,divId_Index2=y-1;divId_Index2>=1&& divId_Index1<=7;divId_Index2--,divId_Index1++)
	{
	   if(isEmpty(divId_Index1,divId_Index2))
	   {
	 //  alert("in isEmpty forloop1");
	    document.getElementById(""+divId_Index1+divId_Index2).setAttribute("style","border-color:red;");
		document.getElementById(""+divId_Index1+divId_Index2).setAttribute("onclick","getId(this)");
	   }
	   else 
	   {
	//   alert("isfr");
	   if(!isFriend(divId_Index1,divId_Index2))
	   {
	   document.getElementById(""+divId_Index1+divId_Index2).setAttribute("style","border-color:red;");
	   document.getElementById(""+divId_Index1+divId_Index2).setAttribute("onclick","getId(this)");
	   }
	   break;
	   }
	}

}




 

 
 
 
 