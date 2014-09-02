
function kmove(divId)
{
	// alert("in king move function");
	//var dId=divId;
	//alert(divId);

	var firstChar=parseInt(divId.charAt(0)); 
	//alert(firstChar);
	var secondChar=parseInt(divId.charAt(1)); 
	//alert(secondChar);

	i=firstChar;
    j=secondChar;
	


	if(divId <="78")
	{
	  // alert("cheking if");
		i= firstChar+1; 
		//alert(i);
	//alert(firstChar.toString()+j.toString())
		//var firstCharsecondChar =firstChar.toString()+i.toString();
		if(i<8)
	 {
	   if(isEmpty(i,j))
	   {
	    //document.getElementById(""+i+j).style.borderColor='red';
		document.getElementById(""+i+j).setAttribute("style","border-color:red;");
		document.getElementById(""+i+j).setAttribute("onclick","getId(this)");
	   }
	 }
	 
	   i=firstChar-1;
	   if(i>=0)
	   {
	    if(isEmpty(i,j))
	   {
	    //document.getElementById(""+i+j).style.borderColor='red';
		document.getElementById(""+i+j).setAttribute("style","border-color:red;");
		document.getElementById(""+i+j).setAttribute("onclick","getId(this)");
	   }
	   }
	   
	   i=firstChar;
	   j=secondChar+1;
	   if(j<9)
	   {
	    if(isEmpty(i,j))
	   {
	    //document.getElementById(""+i+j).style.borderColor='red';
		document.getElementById(""+i+j).setAttribute("style","border-color:red;");
		document.getElementById(""+i+j).setAttribute("onclick","getId(this)");
	   }
	   }
	   
	   i=firstChar;
	   j=secondChar-1;
	   if(j>0)
	   {
	    if(isEmpty(i,j))
	   {
	    //document.getElementById(""+i+j).style.borderColor='red';
		document.getElementById(""+i+j).setAttribute("style","border-color:red;");
		document.getElementById(""+i+j).setAttribute("onclick","getId(this)");
	   }
	   }
	   
	   
	    i=firstChar+1;
	   j=secondChar+1;
	   if(i<8 && j<9)
	   {
	    if(isEmpty(i,j))
	   {
	    //document.getElementById(""+i+j).style.borderColor='red';
		document.getElementById(""+i+j).setAttribute("style","border-color:red;");
		document.getElementById(""+i+j).setAttribute("onclick","getId(this)");
	   }
	   }
	   
	   
	    i=firstChar-1;
	   j=secondChar-1;
	   if(i>=0 && j>0)
	   {
	    if(isEmpty(i,j))
	   {
	    //document.getElementById(""+i+j).style.borderColor='red';
		document.getElementById(""+i+j).setAttribute("style","border-color:red;");
		document.getElementById(""+i+j).setAttribute("onclick","getId(this)");
	   }
	   }
	   
	     i=firstChar+1;
	   j=secondChar-1;
	   if(i<8 && j>0)
	   {
	    if(isEmpty(i,j))
	   {
	    //document.getElementById(""+i+j).style.borderColor='red';
		document.getElementById(""+i+j).setAttribute("style","border-color:red;");
		document.getElementById(""+i+j).setAttribute("onclick","getId(this)");
	   }
	   }
	   
	     i=firstChar-1;
	   j=secondChar+1;
	   if(i>=0 && j<9)
	   {
	    if(isEmpty(i,j))
	   {
	    //document.getElementById(""+i+j).style.borderColor='red';
		document.getElementById(""+i+j).setAttribute("style","border-color:red;");
		document.getElementById(""+i+j).setAttribute("onclick","getId(this)");
	   }
	   }
	
	}
	
	}
	
/*	
	i=firstChar;
    j=secondChar;

	
    if(divId <="78")
	{
	alert(divId);
	    var i; 
		alert("2nd if");
		i= secondChar-1;
		alert(i);
	//alert(firstChar.toString()+j.toString())
		//var firstCharsecondChar =firstChar.toString()+i.toString();
	   if(isEmpty(firstChar,i))
	   {
	    document.getElementById(""+firstChar+i).style.borderColor='red';
		document.getElementById(""+firstChar+i).setAttribute("onclick","getId(this)");
	   }
	    
	}
	
	i=firstChar;
    j=secondChar;
	
    if(divId <="78")
	{
	    var i; alert("hi");
		i= firstChar-1; alert("hi");
	//alert(firstChar.toString()+j.toString())
		var firstCharsecondChar =secondChar.toString()+i.toString();
	   if(isEmpty(i,secondChar))
	   {
	    document.getElementById(""+i+secondChar).style.borderColor='red';
		document.getElementById(""+i+secondChar).setAttribute("onclick","getId(this)");
	   }
	    
	}
	i=firstChar;
    j=secondChar;
    if(divId <="78")
	{
	    var i; alert("hi");
		i= firstChar+1; alert("hi");
	//alert(firstChar.toString()+j.toString())
		var firstCharsecondChar =secondChar.toString()+i.toString();
	   if(isEmpty(i,secondChar))
	   {
	    document.getElementById(""+i+secondChar).style.borderColor='red';
		document.getElementById(""+i+secondChar).setAttribute("onclick","getId(this)");
	   }
	    
	}
	
	i=firstChar;
    j=secondChar;
	
    if(divId <="78")
	{
	     var i; alert("hi");
         var j;
		 
		i= firstChar+1; alert("hi");
		j=secondChar-1;
		
	//alert(firstChar.toString()+j.toString())
		var firstCharsecondChar =i.toString()+j.toString();
	   if(isEmpty(i,j))
	   {
	    document.getElementById(""+i+j).style.borderColor='red';
		document.getElementById(""+i+j).setAttribute("onclick","getId(this)");
	   }
	    
	}
	
	i=firstChar;
    j=secondChar;
	
    if(divId <="78")
	{
	     var i; alert("hi");
         var j;
		 
		i= firstChar+1; alert("hi");
		j=secondChar+1;
		
	//alert(firstChar.toString()+j.toString())
		var firstCharsecondChar =i.toString()+j.toString();
	   if(isEmpty(i,j))
	   {
	    document.getElementById(""+i+j).style.borderColor='red';
		document.getElementById(""+i+j).setAttribute("onclick","getId(this)");
	   }
	    
	}
	
	i=firstChar;
    j=secondChar;
	
    if(divId <="78")
	{
	     var i; alert("hi");
         var j;
		 
		i= firstChar-1; alert("hi");
		j=secondChar-1;
		
	//alert(firstChar.toString()+j.toString())
		var firstCharsecondChar =i.toString()+j.toString();
	   if(isEmpty(i,j))
	   {
	    document.getElementById(""+i+j).style.borderColor='red';
		document.getElementById(""+i+j).setAttribute("onclick","getId(this)");
	   }
	   
	}
	
	i=firstChar;
    j=secondChar;
	
    if(divId <="78")
	{
	     var i;
		 alert("hi");
         var j;
		 
		i= firstChar-1; 
		alert("hi");
		j=secondChar+1;
		
	//alert(firstChar.toString()+j.toString())
		var firstCharsecondChar =i.toString()+j.toString();
	   if(isEmpty(i,j))
	   {
	    document.getElementById(""+i+j).style.borderColor='red';
		document.getElementById(""+i+j).setAttribute("onclick","getId(this)");
	   }
	   
	    
	}
	

	







	
}
*/
 // if(isEmpty(i,j))
                     	   // {
							// document.getElementById(""+i+j).setAttribute("style","background-color:red;");
							// }

							// else 
								
	   
									// if(!isFriend(i,j))
									// {
										// document.getElementById(""+i+j).setAttribute("style","background-color:red;");
									// }
