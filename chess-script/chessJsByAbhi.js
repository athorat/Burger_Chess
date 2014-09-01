////var col1 =getElementById(A8).style.background;
//var col2 =getElementById(A7).style.background;
 //var c;

/* function defaultBg(ele){
	ele.style.background='#CCF5FF';
}*/

function highlightBG(element) {
  /*if(element.style.background == 'green')
    {
       defaultBg(element);
    }
   else{*/
    var x =element.childNodes;

    if (x[0].nodeName=='IMG' && x[0].style.visibility!= 'hidden')
    {
     element.style.backgroundColor = 'green';
    }
   
}
/*
function isEmpty(i,j)
{
//alert("in empty");
var newId=""+i+j;
var emptiness=document.getElementById(newId).getElementsByTagName("img")[0];
if(emptiness)
{
 return false;
 }
else
{
return true;
}

}


function divClick(ele){
  //var x =ele.firstNode.id;
  alert(ele.getElementsByTagName('img')[0].id.charAt(0));
  var x=ele.getElementsByTagName('img')[0].id;
    //if(x=='pawn_black')
	
	if(x.charAt(0)=='w')
   {
      wpawnMove(ele);
    }else{
		pawnMove(ele)
	}

}
*/  

function pawnMove(ele){
    var y = parseInt(ele.id)+ 10;
    //document.write(y>=11 && y<=18);
    if(ele.id>=11 && ele.id<=18)
    {
      var x = y+10;
	 
	 //document.write((y+1).toString().charAt(1) );
	
	 //document.write((y+1).toString().charAt(1)>=1&& (y+1).toString().charAt(1)<=8);
				//document.write(document.getElementById(y+1).firstChild != null);
				// if((((y+1).toString().charAt(1)>=1&& (y+1).toString().charAt(1)<=8)  && (document.getElementById(y+1).firstChild != null) )&& ((document.getElementById(y+1).firstChild.id.charAt(0) == 'w' ))){
				 //document.write((document.getElementById(y+1).firstChild.id.charAt(0) == 'w' ));
				 
	  if(document.getElementById(y).firstChild == null)  {
		document.getElementById(y).style.borderColor="red";
		//document.getElementById(y + 1).style.borderColor="red
		
		 if(document.getElementById(x).firstChild == null){
			document.getElementById(x).style.borderColor="red";
		}
		}
		
				document.getElementById(y + 1).style.backgroundColor="red";
				
		
		if((((y+1).toString().charAt(1)>=1&& (y+1).toString().charAt(1)<=8)  && (document.getElementById(y+1).firstChild != null) )&& ((document.getElementById(y+1).firstChild.id.charAt(0) == 'w' ))){
		
			document.getElementById(y + 1).style.backgroundColor="red";
		}
		if((((y-1).toString().charAt(1)>=1&& (y-1).toString().charAt(1)<=8)  && (document.getElementById(y-1).firstChild != null) )&& ((document.getElementById(y-1).firstChild.id.charAt(0) == 'w' ))){
		
			document.getElementById(y - 1).style.backgroundColor="red";
		}
		
		
    }else
    {
	
       if(document.getElementById(y).firstChild == null)  {
		document.getElementById(y).style.borderColor="red";
		//document.getElementById(y + 1).style.borderColor="red";
		//document.getElementById(y - 1).style.borderColor="red";
		}
		if((((y+1).toString().charAt(1)>=1&& (y+1).toString().charAt(1)<=8)  && (document.getElementById(y+1).firstChild != null) )&& ((document.getElementById(y+1).firstChild.id.charAt(0) == 'w' ))){
		
			document.getElementById(y + 1).style.backgroundColor="red";
		}
		if((((y-1).toString().charAt(1)>=1&& (y-1).toString().charAt(1)<=8)  && (document.getElementById(y-1).firstChild != null) )&& ((document.getElementById(y-1).firstChild.id.charAt(0) == 'w' ))){
		
			document.getElementById(y - 1).style.backgroundColor="red";
		}
    }
	
}





function wpawnMove(ele){
    var y = parseInt(ele.id)- 10;
    //document.write(y>=11 && y<=18);
    if(ele.id>=61 && ele.id<=68)
    {
      var x = y-10;
	 
	 //document.write((y+1).toString().charAt(1) );
	
	 //document.write((y-1).toString().charAt(1)>=1&& (y+1).toString().charAt(1)<=8);
				//document.write(document.getElementById(y+1).firstChild != null);
			//	document.write 
				 //document.write((document.getElementById(y+1).firstChild.id.charAt(0) == 'w' ));
				 
	  if(document.getElementById(y).firstChild == null)  {
		document.getElementById(y).style.borderColor="red";
		//document.getElementById(y + 1).style.borderColor="red
		
		 if(document.getElementById(x).firstChild == null){
			document.getElementById(x).style.borderColor="red";
		}
		}
		
				//document.getElementById(y + 1).style.backgroundColor="red";
				//document.getElementById(y - 1).style.backgroundColor="red";
		
		if((((y+1).toString().charAt(1)>=1&& (y+1).toString().charAt(1)<=8)  && (document.getElementById(y+1).firstChild != null) )&& ((document.getElementById(y+1).firstChild.id.charAt(0) == 'b' ))){
		
			document.getElementById(y + 1).style.backgroundColor="red";
		}
		if((((y-1).toString().charAt(1)>=1&& (y-1).toString().charAt(1)<=8)  && (document.getElementById(y-1).firstChild != null) )&& ((document.getElementById(y-1).firstChild.id.charAt(0) == 'b' ))){
		
			document.getElementById(y - 1).style.backgroundColor="red";
		}
		
		
    }else
    {
	
       if(document.getElementById(y).firstChild == null)  {
		document.getElementById(y).style.borderColor="red";
		//document.getElementById(y + 1).style.borderColor="red";
		//document.getElementById(y - 1).style.borderColor="red";
		}
		if((((y+1).toString().charAt(1)>=1&& (y+1).toString().charAt(1)<=8)  && (document.getElementById(y+1).firstChild != null) )&& ((document.getElementById(y+1).firstChild.id.charAt(0) == 'b' ))){
		
			document.getElementById(y + 1).style.backgroundColor="red";
		}
		if((((y-1).toString().charAt(1)>=1&& (y-1).toString().charAt(1)<=8)  && (document.getElementById(y-1).firstChild != null) )&& ((document.getElementById(y-1).firstChild.id.charAt(0) == 'b' ))){
		
			document.getElementById(y - 1).style.backgroundColor="red";
		}
    }
	
}



function qMove(divId){
	//alert("in king move function");
	alert(divId);

	var x=parseInt(divId.id.charAt(0));
	var y=parseInt(divId.id.charAt(1));
	alert(x);
	alert(y);
	


	for(j=y+1;j<=8;j++)
	{
	//alert(x.toString()+j.toString())
		var xy =x.toString()+j.toString() ;
	   if(isEmpty(x,j))
	   {
	    document.getElementById(xy).style.borderColor='red';
	   }
	   else
	   break;
	}
	
	for(j=y-1;j>=0;j--)
	{
		var xy =x.toString()+j.toString() ;
	   if(isEmpty(x,j))
	   {
	    document.getElementById(xy).style.borderColor='red';
	   }
	   else
	   break;
	}
	
	for(i=x-1;i>=0;i--)
	{
	//alert(i.toString()+y.toString());
		var xy =i.toString()+y.toString() ;
	   if(isEmpty(i,y))
	   {
	    document.getElementById(xy).style.borderColor='red';
	   }
	   else
	   break;
	}
	
	for(i=x+1;i<=8;i++)
	{
	//alert(i.toString()+y.toString());
		var xy =i.toString()+y.toString() ;
	   if(isEmpty(i,y))
	   {
	    document.getElementById(xy).style.borderColor='red';
	   }
	   else
	   break;
	}
	
	for (i = x+1,j=y+1; i <= 8,j<=8; i++,j++)
	{
		
		alert(i.toString()+j.toString());
			var xy =i.toString()+j.toString() ;
			   if(isEmpty(i,j))
			   {
				document.getElementById(xy).style.borderColor='red';
				break;
			   }
			   else
			   	break;
				
	}
	
	for (i = x-1,j=y-1; i >= 0,j>= 0; i--,j--)
	{
		
		alert(i.toString()+j.toString());
			var xy =i.toString()+j.toString() ;
			   if(isEmpty(i,j))
			   {
				document.getElementById(xy).style.borderColor='red';
				//break;
			   }
			   else
			   	break;
				
	}
	for (i = x-1,j=y+1; i >= 0,j<= 8; i--,j++)
	{
		
		alert(i.toString()+j.toString());
			var xy =i.toString()+j.toString() ;
			   if(isEmpty(i,j))
			   {
				document.getElementById(xy).style.borderColor='red';
				//break;
			   }
			   else
			   	break;
				
	}
	for (i = x+1
	
	,j=y-1; i <= 8,j >= 0;i++,j--)
	{
		
		alert(i.toString()+j.toString());
			var xy =i.toString()+j.toString() ;
			   if(isEmpty(i,j))
			   {
				document.getElementById(xy).style.borderColor='red';
				//break;
			   }
			   else
			   	break;
				
	}
	
	
	
	}

