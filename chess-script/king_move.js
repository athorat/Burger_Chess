
function kmove(divId)
{
	 alert("in bishop move function");
	//var dId=divId;
	alert(divId);

	var x=parseInt(divId.charAt(0)); alert(x);
	var y=parseInt(divId.charAt(1)); alert(y);

	i=x;
    j=y;
	


	if(divId <=79)
	alert("hi");
	{
	    var i; alert("hi");
		i= y+1; alert("hi");
	//alert(x.toString()+j.toString())
		var xy =x.toString()+i.toString();
	   if(isEmpty(x,i))
	   {
	    document.getElementById(""+x+i).style.borderColor='red';
		document.getElementById(""+x+i).setAttribute("onclick","getId(this)");
	   }
	    
	   
	
	}
	
	
	i=x;
    j=y;
	
    if(divId <=79)
	alert("hi");
	{
	    var i; alert("hi");
		i= y-1; alert("hi");
	//alert(x.toString()+j.toString())
		var xy =x.toString()+i.toString();
	   if(isEmpty(x,i))
	   {
	    document.getElementById(""+x+i).style.borderColor='red';
		document.getElementById(""+x+i).setAttribute("onclick","getId(this)");
	   }
	    
	}
	
	i=x;
    j=y;
	
    if(divId <=79)
	alert("hi");
	{
	    var i; alert("hi");
		i= x-1; alert("hi");
	//alert(x.toString()+j.toString())
		var xy =y.toString()+i.toString();
	   if(isEmpty(i,y))
	   {
	    document.getElementById(""+i+y).style.borderColor='red';
		document.getElementById(""+i+y).setAttribute("onclick","getId(this)");
	   }
	    
	}
	
	i=x;
    j=y;
	
    if(divId <=79)
	alert("hi");
	{
	    var i; alert("hi");
		i= x+1; alert("hi");
	//alert(x.toString()+j.toString())
		var xy =y.toString()+i.toString();
	   if(isEmpty(i,y))
	   {
	    document.getElementById(""+i+y).style.borderColor='red';
		document.getElementById(""+i+y).setAttribute("onclick","getId(this)");
	   }
	    
	}
	
	i=x;
    j=y;
	
    if(divId <=79)
	alert("hi");
	{
	     var i; alert("hi");
         var j;
		 
		i= x+1; alert("hi");
		j=y-1;
		
	//alert(x.toString()+j.toString())
		var xy =i.toString()+j.toString();
	   if(isEmpty(i,j))
	   {
	    document.getElementById(""+i+j).style.borderColor='red';
		document.getElementById(""+i+j).setAttribute("onclick","getId(this)");
	   }
	    
	}
	
	i=x;
    j=y;
	
    if(divId <=79)
	alert("hi");
	{
	     var i; alert("hi");
         var j;
		 
		i= x+1; alert("hi");
		j=y+1;
		
	//alert(x.toString()+j.toString())
		var xy =i.toString()+j.toString();
	   if(isEmpty(i,j))
	   {
	    document.getElementById(""+i+j).style.borderColor='red';
		document.getElementById(""+i+j).setAttribute("onclick","getId(this)");
	   }
	    
	}
	
	i=x;
    j=y;
	
    if(divId <=79)
	alert("hi");
	{
	     var i; alert("hi");
         var j;
		 
		i= x-1; alert("hi");
		j=y-1;
		
	//alert(x.toString()+j.toString())
		var xy =i.toString()+j.toString();
	   if(isEmpty(i,j))
	   {
	    document.getElementById(""+i+j).style.borderColor='red';
		document.getElementById(""+i+j).setAttribute("onclick","getId(this)");
	   }
	   
	}
	
	i=x;
    j=y;
	
    if(divId <=79)
	alert("hi");
	{
	     var i; alert("hi");
         var j;
		 
		i= x-1; alert("hi");
		j=y+1;
		
	//alert(x.toString()+j.toString())
		var xy =i.toString()+j.toString();
	   if(isEmpty(i,j))
	   {
	    document.getElementById(""+i+j).style.borderColor='red';
		document.getElementById(""+i+j).setAttribute("onclick","getId(this)");
	   }
	   
	    
	}
}





 // if(isEmpty(i,j))
                     	   // {
							// document.getElementById(""+i+j).setAttribute("style","background-color:red;");
							// }

							// else 
								
	   
									// if(!isFriend(i,j))
									// {
										// document.getElementById(""+i+j).setAttribute("style","background-color:red;");
									// }
