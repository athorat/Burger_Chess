

var moves;
function highlightBG(element) {
  
    var childs =element.childNodes;

    if (childs[0].nodeName=='IMG' && childs[0].style.visibility!= 'hidden')
    {
     element.style.backgroundColor = 'green';
    }
   
}

function pawnMove(ele){
    var firstStep = parseInt(ele.id)+ 10;
    //document.write(y>=11 && y<=18);
    if(ele.id>=11 && ele.id<=18)
    {
      var secondStep =  firstStep+10;
	 
	 //document.write((y+1).toString().charAt(1) );
	
	 //document.write((y+1).toString().charAt(1)>=1&& (y+1).toString().charAt(1)<=8);
				//document.write(document.getElementById(y+1).firstChild != null);
				// if((((y+1).toString().charAt(1)>=1&& (y+1).toString().charAt(1)<=8)  && (document.getElementById(y+1).firstChild != null) )&& ((document.getElementById(y+1).firstChild.id.charAt(0) == 'w' ))){
				 //document.write((document.getElementById(y+1).firstChild.id.charAt(0) == 'w' ));
				 
	  if(document.getElementById( firstStep).firstChild == null)
	  {
		document.getElementById( firstStep).style.borderColor="red";
		document.getElementById(firstStep).setAttribute("onclick","getId(this)");
		//document.getElementById(y + 1).style.borderColor="red
		
		 if(document.getElementById(secondStep ).firstChild == null){
			document.getElementById(secondStep ).style.borderColor="red";
			document.getElementById(secondStep ).setAttribute("onclick","getId(this)");
		}
		}
		
				//document.getElementById(y + 1).style.backgroundColor="red";
				
		
		if(((( firstStep+1).toString().charAt(1)>=1&& ( firstStep+1).toString().charAt(1)<=8)  && (document.getElementById( firstStep+1).firstChild != null) )&& ((document.getElementById( firstStep+1).firstChild.id.charAt(0) == 'w' ))){
		
			document.getElementById( firstStep + 1).style.backgroundColor="red";
			document.getElementById( firstStep+1).setAttribute("onclick","getId(this)");
		}
		if(((( firstStep-1).toString().charAt(1)>=1&& ( firstStep-1).toString().charAt(1)<=8)  && (document.getElementById( firstStep-1).firstChild != null) )&& ((document.getElementById( firstStep-1).firstChild.id.charAt(0) == 'w' ))){
		
			document.getElementById( firstStep - 1).style.backgroundColor="red";
			document.getElementById( firstStep-1).setAttribute("onclick","getId(this)");
		}
		
		
    }else
    {
	
       if(document.getElementById(firstStep).firstChild == null)  {
		document.getElementById(firstStep).style.borderColor="red";
			document.getElementById( firstStep).setAttribute("onclick","getId(this)");
		//document.getElementById(y - 1).style.borderColor="red";
		}
		if((((firstStep+1).toString().charAt(1)>=1&& (firstStep+1).toString().charAt(1)<=8)  && (document.getElementById(firstStep+1).firstChild != null) )&& ((document.getElementById(firstStep+1).firstChild.id.charAt(0) == 'w' ))){
		
			document.getElementById(firstStep + 1).style.backgroundColor="red";
			document.getElementById(firstStep+1).setAttribute("onclick","getId(this)");
		}
		if((((firstStep-1).toString().charAt(1)>=1&& (firstStep-1).toString().charAt(1)<=8)  && (document.getElementById(firstStep-1).firstChild != null) )&& ((document.getElementById(firstStep-1).firstChild.id.charAt(0) == 'w' ))){
		
			document.getElementById(firstStep - 1).style.backgroundColor="red";
			document.getElementById(firstStep-1).setAttribute("onclick","getId(this)");
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
				document.getElementById(y).setAttribute("onclick","getId(this)");
		
		 if(document.getElementById(x).firstChild == null){
			document.getElementById(x).style.borderColor="red";
			document.getElementById(x).setAttribute("onclick","getId(this)");
		}
		}
		
				//document.getElementById(y + 1).style.backgroundColor="red";
				//document.getElementById(y - 1).style.backgroundColor="red";
		
		if((((y+1).toString().charAt(1)>=1&& (y+1).toString().charAt(1)<=8)  && (document.getElementById(y+1).firstChild != null) )&& ((document.getElementById(y+1).firstChild.id.charAt(0) == 'b' ))){
		
			document.getElementById(y + 1).style.backgroundColor="red";
			document.getElementById(y + 1).setAttribute("onclick","getId(this)");
		}
		if((((y-1).toString().charAt(1)>=1&& (y-1).toString().charAt(1)<=8)  && (document.getElementById(y-1).firstChild != null) )&& ((document.getElementById(y-1).firstChild.id.charAt(0) == 'b' ))){
		
			document.getElementById(y - 1).style.backgroundColor="red";
			document.getElementById(y - 1).setAttribute("onclick","getId(this)");
		}
		
		
    }else
    {
	
       if(document.getElementById(y).firstChild == null)  {
		document.getElementById(y).style.borderColor="red";
		document.getElementById(y).setAttribute("onclick","getId(this)");
		//document.getElementById(y + 1).style.borderColor="red";
		//document.getElementById(y - 1).style.borderColor="red";
		}
		if((((y+1).toString().charAt(1)>=1&& (y+1).toString().charAt(1)<=8)  && (document.getElementById(y+1).firstChild != null) )&& ((document.getElementById(y+1).firstChild.id.charAt(0) == 'b' ))){
		
			document.getElementById(y + 1).style.backgroundColor="red";
			document.getElementById(y+1).setAttribute("onclick","getId(this)");
		}
		if((((y-1).toString().charAt(1)>=1&& (y-1).toString().charAt(1)<=8)  && (document.getElementById(y-1).firstChild != null) )&& ((document.getElementById(y-1).firstChild.id.charAt(0) == 'b' ))){
		
			document.getElementById(y - 1).style.backgroundColor="red";
			document.getElementById(y-1).setAttribute("onclick","getId(this)");
		}
    }
	
}



function queenMove(obj){
//alert("in q move");
//	alert(obj);
//alert("in q move function");
	var x=parseInt(obj.id.charAt(0));
	var y=parseInt(obj.id.charAt(1));
//	alert(x);
//	alert(y);
	

i=x;
	for(j=y+1;j<=8;j++)
	{
		var xy =x.toString()+j.toString() ;
	   if(isEmpty(x,j))
	   { // alert("in is empty for 1");
	    document.getElementById(xy).style.borderColor='red';
		document.getElementById(xy).setAttribute("onclick","getId(this)");
	   }
	    else 
	   {
	//   alert("isfr");
	   if(!isFriend(i,j))
	   {
	   document.getElementById(""+i+j).setAttribute("style","border-color:red;");
	   document.getElementById(""+i+j).setAttribute("onclick","getId(this)");
	   }
	   break;
	   }
	}
	
	i=x;
	for(j=y-1;j>0;j--)
	{
		var xy =x.toString()+j.toString() ;
	   if(isEmpty(x,j))
	   {
//	   alert("in is empty for 2");
	    document.getElementById(xy).style.borderColor='red';
		document.getElementById(xy).setAttribute("onclick","getId(this)");
	   }
	   else 
	   {
	//   alert("isfr");
	   if(!isFriend(i,j))
	   {
	   document.getElementById(""+i+j).setAttribute("style","border-color:red;");
	   document.getElementById(""+i+j).setAttribute("onclick","getId(this)");
	   }
	   break;
	   }
	}
	j=y;
	for(i=x-1;i>=0;i--)
	{
	//alert(i.toString()+y.toString());
		var xy =i.toString()+y.toString() ;
	   if(isEmpty(i,y))
	   { //alert("in is empty for 3");
	    document.getElementById(xy).style.borderColor='red';
		document.getElementById(xy).setAttribute("onclick","getId(this)");
	   }
	  else 
	   {
	 //  alert("isfr");
	   if(!isFriend(i,j))
	   {
	   document.getElementById(""+i+j).setAttribute("style","border-color:red;");
	   document.getElementById(""+i+j).setAttribute("onclick","getId(this)");
	   }
	   break;
	   }
	}
	j=y;
	for(i=x+1;i<=7;i++)
	{
	//alert(i.toString()+y.toString());
		var xy =i.toString()+y.toString() ;
	   if(isEmpty(i,y))
	   {
//	   alert("in is empty for 4");
	    document.getElementById(xy).style.borderColor='red';
		document.getElementById(xy).setAttribute("onclick","getId(this)");
	   }
	   else 
	   {
//	   alert("isfr");
	   if(!isFriend(i,j))
	   {
	   document.getElementById(""+i+j).setAttribute("style","border-color:red;");
	   document.getElementById(""+i+j).setAttribute("onclick","getId(this)");
	   }
	   break;
	   }
	}
	
	for (i = x+1,j=y+1; i <= 7 && j<=8; i++,j++)
	{
		
			var xy =i.toString()+j.toString() ;
			   if(isEmpty(i,j))
			   {
				document.getElementById(xy).style.borderColor='red';
				document.getElementById(xy).setAttribute("onclick","getId(this)");
				
			   }
			   else 
	   {
//	   alert("isfr");
	   if(!isFriend(i,j))
	   {
	   document.getElementById(""+i+j).setAttribute("style","border-color:red;");
	   document.getElementById(""+i+j).setAttribute("onclick","getId(this)");
	   }
	   break;
	   }
				
	}
	
	for (i = x-1,j=y-1; i >= 0 && j>= 1; i--,j--)
	{
			var xy =i.toString()+j.toString() ;
			   if(isEmpty(i,j))
			   {
				document.getElementById(xy).style.borderColor='red';
				document.getElementById(xy).setAttribute("onclick","getId(this)");
				//break;
			   }
			   else 
	   {
	//   alert("isfr");
	   if(!isFriend(i,j))
	   {
	   document.getElementById(""+i+j).setAttribute("style","border-color:red;");
	   document.getElementById(""+i+j).setAttribute("onclick","getId(this)");
	   }
	   break;
	   }
				
	}
	for (i = x-1,j=y+1; i >= 0 && j<= 8; i--,j++)
	{
			var xy =i.toString()+j.toString() ;
			   if(isEmpty(i,j))
			   {
				document.getElementById(xy).style.borderColor='red';
				document.getElementById(xy).setAttribute("onclick","getId(this)");
				//break;
			   }
			  else 
	   {
	//   alert("isfr");
	   if(!isFriend(i,j))
	   {
	   document.getElementById(""+i+j).setAttribute("style","border-color:red;");
	   document.getElementById(""+i+j).setAttribute("onclick","getId(this)");
	   }
	   break;
	   }
				
	}
	for (i = x+1,j=y-1; i <= 7 && j >= 1;i++,j--)
	{
			var xy =i.toString()+j.toString() ;
			   if(isEmpty(i,j))
			   {
				document.getElementById(xy).style.borderColor='red';
				document.getElementById(xy).setAttribute("onclick","getId(this)");
				//break;
			   }
			 else 
	   {
//	   alert("isfr");
	   if(!isFriend(i,j))
	   {
	   document.getElementById(""+i+j).setAttribute("style","border-color:red;");
	   document.getElementById(""+i+j).setAttribute("onclick","getId(this)");
	   }
	   break;
	   }
				
	}
	
	
	
	}

