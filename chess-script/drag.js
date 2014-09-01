
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
	alert(this);
    ev.dataTransfer.setData("Text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(data));
}




function rmove(divId)
{
alert("in king move function");
alert(colorType);
	//alert(divId);

	var x=parseInt(divId.charAt(0));
	var y=parseInt(divId.charAt(1));
	//alert();

	//var count=0;
	i=x;


	for(j=y+1;j<=8;j++)
	{
	alert(isEmpty(i,j));
	   if(isEmpty(i,j))
	   {
	    document.getElementById(""+i+j).setAttribute("style","border-color:red;");
	   }
	    else 
	   {
	   
	   if(!isFriend(i,j))
	   {
	   document.getElementById(""+i+j).setAttribute("style","border-color:red;");
	   }
	   break;
	   }
	
	
	}

	for(j=y-1;j>0;j--)
	{
	 if(isEmpty(i,j))
	   {
	    document.getElementById(""+i+j).setAttribute("style","border-color:red;");
	   }
	   else 
	   {
	  
	   if(!isFriend(i,j))
	   {
	   document.getElementById(""+i+j).setAttribute("style","border-color:red;");
	   }
	   break;
	   }
	
    }
	j=y;
	for(i=x-1;i>=0;i--)
	{
	  	  if(isEmpty(i,j))
	   {
	    document.getElementById(""+i+j).setAttribute("style","border-color:red;");
	   }
	   else 
	   {
	   
	   if(!isFriend(i,j))
	   {
	   document.getElementById(""+i+j).setAttribute("style","border-color:red;");
	   }
	   break;
	   }
	
	
	}
	for(i=x+1;i<=7;i++)
	{
		 if(isEmpty(i,j))
	   {
	    document.getElementById(""+i+j).setAttribute("style","border-color:red;");
	   }

	   else 
	   {
	   
	   if(!isFriend(i,j))
	   {
	   document.getElementById(""+i+j).setAttribute("style","border-color:red;");
	   }
	   break;
	   }
	
	}

}






function isEmpty(i,j)
{

alert("in empty");
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


function isFriend(i,j)
{


if(colorType==document.getElementById(""+i+j).firstChild.id.charAt(0))
{
return true;
}
else 
{
return	false;
}

} 


function horsemove(divId)
{
               alert(colorType);
               var x=parseInt(divId.charAt(0));
               var y=parseInt(divId.charAt(1));
			   
			   var i=x+2;
			   var j=y-1;
			   
	   if(i<=7)
	   {
               if(j>=1)
			   {
						 if(isEmpty(i,j))
                     	   {
							document.getElementById(""+i+j).setAttribute("style","border-color:red;");
							}

							else 
								
	   
									if(!isFriend(i,j))
									{
										document.getElementById(""+i+j).setAttribute("style","border-color:red;");
									}
									
								
			   }	
			   j=y+1;
			   if(j<=8)
			   {
			   if(isEmpty(i,j))
                     	   {
							document.getElementById(""+i+j).setAttribute("style","border-color:red;");
							}

							else 
								
	   
									if(!isFriend(i,j))
									{
										document.getElementById(""+i+j).setAttribute("style","border-color:red;");
									}
									
								
			   
			   }
			   
		}
			   i=x-2;
			   j=y-1;
			   if(i>=0)
			   {
			   alert("seconn");
			   if(j>=1)
			   {
					if(isEmpty(i,j))
                     	   {
							document.getElementById(""+i+j).setAttribute("style","border-color:red;");
							}

							else 
								
	   
									if(!isFriend(i,j))
									{
										document.getElementById(""+i+j).setAttribute("style","border-color:red;");
									}
									
								
			   
			   }
			   j=y+1;
			   if(j<=8)
			   {
			   if(isEmpty(i,j))
                     	   {
							document.getElementById(""+i+j).setAttribute("style","border-color:red;");
							}

							else 
								
	   
									if(!isFriend(i,j))
									{
										document.getElementById(""+i+j).setAttribute("style","border-color:red;");
									}
						
			   }
			   
			         
			   }
			   
			   
			   
			    i=x-1;
			   j=y-2;
			   if(j>=1)
			   {
			   alert("seconn");
			   if(i>=0)
			   {
					if(isEmpty(i,j))
                     	   {
							document.getElementById(""+i+j).setAttribute("style","border-color:red;");
							}

							else 
								
	   
									if(!isFriend(i,j))
									{
										document.getElementById(""+i+j).setAttribute("style","border-color:red;");
									}
									
								
			   
			   }
			   i=x+1;
			   if(i<=7)
			   {
			   if(isEmpty(i,j))
                     	   {
							document.getElementById(""+i+j).setAttribute("style","border-color:red;");
							}

							else 
								
	   
									if(!isFriend(i,j))
									{
										document.getElementById(""+i+j).setAttribute("style","border-color:red;");
									}
						
			   }
			   
			         
			   }
			   
			   i=x-1;
			   j=y+2;
			   if(j<=8)
			   {
			   alert("seconn");
			   if(i>=0)
			   {
					if(isEmpty(i,j))
                     	   {
							document.getElementById(""+i+j).setAttribute("style","border-color:red;");
							}

							else 
								
	   
									if(!isFriend(i,j))
									{
										document.getElementById(""+i+j).setAttribute("style","border-color:red;");
									}
									
								
			   
			   }
			   i=x+1;
			   if(i<=7)
			   {
			   if(isEmpty(i,j))
                     	   {
							document.getElementById(""+i+j).setAttribute("style","background-color:red;");
							}

							else 
								
	   
									if(!isFriend(i,j))
									{
										document.getElementById(""+i+j).setAttribute("style","background-color:red;");
									}
						
			   }
			   
			         
			   }
			   
			   
			   
			   
			   
			   
}