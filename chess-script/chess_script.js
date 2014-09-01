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
 
 
  var divId;
function divClick(element)
 {
 
 //alert("hey");
 var color=element.firstChild.id.charAt(0);
 var type= element.firstChild.id.charAt(1);
 alert(color);
 alert(type);
 divId=element.id;
// alert(divId);
 
 elementId=element.firstChild.id;
// alert(elementId);
 
 if(type=="r")
 {
 rmove(divId);
 }

 if(type=="k")
 {
 kmove(divId);
 }
 if(type=="b")
 {
 bmove(divId);
 }
  //////////////
  if(type=="q")
 {
 qMove(element);
 }
 
 if(type=='p')
   {
		if(color =='w'){
			wpawnMove(element);
			}
	  else{
		pawnMove(element)
		}
    }
 ////////////////////////
 
 }
 


 
function kmove(divId)
{
	alert("in king move function");
	alert(divId);

	var x=parseInt(divId.charAt(0));
	var y=parseInt(divId.charAt(1));
	//alert();

	//var count=0;
	i=x;


	for(j=y+1;j<=8;j++)
	{
	   if(isEmpty(i,j))
	   {
	    document.getElementById(""+i+j).setAttribute("style","border-color:red;");
	   }
	   else
	   break;
	
	
	}

	for(j=y-1;j>0;j--)
	{
	 if(isEmpty(i,j))
	   {
	    document.getElementById(""+i+j).setAttribute("style","border-color:red;");
	   }
	 else
	   break;
	
    }
	j=y;
	for(i=x-1;i>=0;i--)
	{
	  	  if(isEmpty(i,j))
	   {
	    document.getElementById(""+i+j).setAttribute("style","border-color:red;");
	   }
	    else
	   break;
	
	}
	for(i=x+1;i<=7;i++)
	{
		 if(isEmpty(i,j))
	   {
	    document.getElementById(""+i+j).setAttribute("style","border-color:red;");
	   }
	    else
	   break;
	
	}

}


function  bmove(divId,color)
{
    
    alert("in bishop move function");
	alert(divId);

	var x=parseInt(divId.charAt(0));
	var y=parseInt(divId.charAt(1));

	i=x;
    j=y;

	for(i=x+1,j=y+1;j<=8 && i<=7;j++,i++)
	{
	   if(isEmpty(i,j))
	   {
	    document.getElementById(""+i+j).setAttribute("style","border-color:red;");
	   }
	   else
	   break;
	
	}
	
	
	i=x;
	j=y;
	for(i=x-1,j=y-1;j>0 && i>0;j--,i--)
	{
	   if(isEmpty(i,j))
	   {
	    document.getElementById(""+i+j).setAttribute("style","border-color:red;");
	   }
	   else
	   break;
	
	alert("check it "+i+" "+j);
	}
	
	
	i=x;
	j=y;
	
	for(i=x-1,j=y+1;i>=0&&j<=8;j++,i--)
	{
	alert("for loop1")
	
	   if(isEmpty(i,j))
	   {
	    document.getElementById(""+i+j).setAttribute("style","border-color:red;");
	   }
	   else
	   break;
	
	
	}
		i=x;
	j=y;
	for(i=x+1,j=y-1;j>=1&& i<=7;j--,i++)
	{
	   if(isEmpty(i,j))
	   {
	    document.getElementById(""+i+j).setAttribute("style","border-color:red;");
	   }
	   else
	   break;
	}
	
	
	
	
	


}




 

 
 
 
 