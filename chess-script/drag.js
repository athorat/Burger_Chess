
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
//	alert(this);
    ev.dataTransfer.setData("Text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(data));
}




function rookMove(divId)
{
//alert("in king move function");
//alert(pieceColorType);
	//alert(divId);

	var x=parseInt(divId.charAt(0));
	var y=parseInt(divId.charAt(1));
	//alert();

	//var count=0;
	divId_Index1=x;


	for(divId_Index2=y+1;divId_Index2<=8;divId_Index2++)
	{
	//alert(isEmpty(divId_Index1,divId_Index2));
	   if(isEmpty(divId_Index1,divId_Index2))
	   {
	    document.getElementById(""+divId_Index1+divId_Index2).setAttribute("style","border-color:red;");
	   document.getElementById(""+divId_Index1+divId_Index2).setAttribute("onclick","getId(this)");
	   }
	    else 
	   {
	   
	   if(!isFriend(divId_Index1,divId_Index2))
	   {
	   document.getElementById(""+divId_Index1+divId_Index2).setAttribute("style","border-color:red;");
	   document.getElementById(""+divId_Index1+divId_Index2).setAttribute("onclick","getId(this)");
	   }
	   break;
	   }
	
	
	}

	for(divId_Index2=y-1;divId_Index2>0;divId_Index2--)
	{
	 if(isEmpty(divId_Index1,divId_Index2))
	   {
	    document.getElementById(""+divId_Index1+divId_Index2).setAttribute("style","border-color:red;");
	   document.getElementById(""+divId_Index1+divId_Index2).setAttribute("onclick","getId(this)");
	   }
	   else 
	   {
	  
	   if(!isFriend(divId_Index1,divId_Index2))
	   {
	   document.getElementById(""+divId_Index1+divId_Index2).setAttribute("style","border-color:red;");
	   document.getElementById(""+divId_Index1+divId_Index2).setAttribute("onclick","getId(this)");
	   }
	   break;
	   }
	
    }
	divId_Index2=y;
	for(divId_Index1=x-1;divId_Index1>=0;divId_Index1--)
	{
	  	  if(isEmpty(divId_Index1,divId_Index2))
	   {
	    document.getElementById(""+divId_Index1+divId_Index2).setAttribute("style","border-color:red;");
	   document.getElementById(""+divId_Index1+divId_Index2).setAttribute("onclick","getId(this)");
	   }
	   else 
	   {
	   
	   if(!isFriend(divId_Index1,divId_Index2))
	   {
	   document.getElementById(""+divId_Index1+divId_Index2).setAttribute("style","border-color:red;");
	   document.getElementById(""+divId_Index1+divId_Index2).setAttribute("onclick","getId(this)");
	   }
	   break;
	   }
	
	
	}
	for(divId_Index1=x+1;divId_Index1<=7;divId_Index1++)
	{
		 if(isEmpty(divId_Index1,divId_Index2))
	   {
	    document.getElementById(""+divId_Index1+divId_Index2).setAttribute("style","border-color:red;");
	   document.getElementById(""+divId_Index1+divId_Index2).setAttribute("onclick","getId(this)");
	   }

	   else 
	   {
	   
	   if(!isFriend(divId_Index1,divId_Index2))
	   {
	   document.getElementById(""+divId_Index1+divId_Index2).setAttribute("style","border-color:red;");
	   document.getElementById(""+divId_Index1+divId_Index2).setAttribute("onclick","getId(this)");
	   }
	   break;
	   }
	
	}

}






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


function isFriend(i,j)
{


if(pieceColorType==document.getElementById(""+i+j).firstChild.id.charAt(0))
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
  //             alert(pieceColorType);
               var x=parseInt(divId.charAt(0));
               var y=parseInt(divId.charAt(1));
			   
			   var divId_Index1=x+2;
			   var divId_Index2=y-1;
			   
	   if(divId_Index1<=7)
	   {
               if(divId_Index2>=1)
			   {
						 if(isEmpty(divId_Index1,divId_Index2))
                     	   {
							document.getElementById(""+divId_Index1+divId_Index2).setAttribute("style","border-color:red;");
	                       document.getElementById(""+divId_Index1+divId_Index2).setAttribute("onclick","getId(this)");
							}

							else 
								
	   
									if(!isFriend(divId_Index1,divId_Index2))
									{
										document.getElementById(""+divId_Index1+divId_Index2).setAttribute("style","border-color:red;");
	                                    document.getElementById(""+divId_Index1+divId_Index2).setAttribute("onclick","getId(this)");
									}
									
								
			   }	
			   divId_Index2=y+1;
			   if(divId_Index2<=8)
			   {
			   if(isEmpty(divId_Index1,divId_Index2))
                     	   {
							document.getElementById(""+divId_Index1+divId_Index2).setAttribute("style","border-color:red;");
	   document.getElementById(""+divId_Index1+divId_Index2).setAttribute("onclick","getId(this)");
	   }

							else 
								
	   
									if(!isFriend(divId_Index1,divId_Index2))
									{
										document.getElementById(""+divId_Index1+divId_Index2).setAttribute("style","border-color:red;");
	   document.getElementById(""+divId_Index1+divId_Index2).setAttribute("onclick","getId(this)");
									}
									
								
			   
			   }
			   
		}
			   divId_Index1=x-2;
			   divId_Index2=y-1;
			   if(divId_Index1>=0)
			   {
	//		   alert("seconn");
			   if(divId_Index2>=1)
			   {
					if(isEmpty(divId_Index1,divId_Index2))
                     	   {
							document.getElementById(""+divId_Index1+divId_Index2).setAttribute("style","border-color:red;");
	                         document.getElementById(""+divId_Index1+divId_Index2).setAttribute("onclick","getId(this)");
						   }

							else 
								
	   
									if(!isFriend(divId_Index1,divId_Index2))
									{
										document.getElementById(""+divId_Index1+divId_Index2).setAttribute("style","border-color:red;");
	                                    document.getElementById(""+divId_Index1+divId_Index2).setAttribute("onclick","getId(this)");
									}
									
			   }
			   divId_Index2=y+1;
			   if(divId_Index2<=8)
			   {
			   if(isEmpty(divId_Index1,divId_Index2))
                     	   {
							document.getElementById(""+divId_Index1+divId_Index2).setAttribute("style","border-color:red;");
	   document.getElementById(""+divId_Index1+divId_Index2).setAttribute("onclick","getId(this)");
							}

							else 
								
	   
									if(!isFriend(divId_Index1,divId_Index2))
									{
										document.getElementById(""+divId_Index1+divId_Index2).setAttribute("style","border-color:red;");
	   document.getElementById(""+divId_Index1+divId_Index2).setAttribute("onclick","getId(this)");
									}
						
			   }
			   
			         
			   }
			   
			   
			   
			    divId_Index1=x-1;
			   divId_Index2=y-2;
			   if(divId_Index2>=1)
			   {
		//	   alert("seconn");
			   if(divId_Index1>=0)
			   {
					if(isEmpty(divId_Index1,divId_Index2))
                     	   {
							document.getElementById(""+divId_Index1+divId_Index2).setAttribute("style","border-color:red;");
	   document.getElementById(""+divId_Index1+divId_Index2).setAttribute("onclick","getId(this)");
							}

							else 
								
	   
									if(!isFriend(divId_Index1,divId_Index2))
									{
										document.getElementById(""+divId_Index1+divId_Index2).setAttribute("style","border-color:red;");
	   document.getElementById(""+divId_Index1+divId_Index2).setAttribute("onclick","getId(this)");
									}
									
								
			   
			   }
			   divId_Index1=x+1;
			   if(divId_Index1<=7)
			   {
			   if(isEmpty(divId_Index1,divId_Index2))
                     	   {
							document.getElementById(""+divId_Index1+divId_Index2).setAttribute("style","border-color:red;");
	   document.getElementById(""+divId_Index1+divId_Index2).setAttribute("onclick","getId(this)");
							}

							else 
								
	   
									if(!isFriend(divId_Index1,divId_Index2))
									{
										document.getElementById(""+divId_Index1+divId_Index2).setAttribute("style","border-color:red;");
	   document.getElementById(""+divId_Index1+divId_Index2).setAttribute("onclick","getId(this)");
									}
						
			   }
			   
			         
			   }
			   
			   divId_Index1=x-1;
			   divId_Index2=y+2;
			   if(divId_Index2<=8)
			   {
			//   alert("seconn");
			   if(divId_Index1>=0)
			   {
					if(isEmpty(divId_Index1,divId_Index2))
                     	   {
							document.getElementById(""+divId_Index1+divId_Index2).setAttribute("style","border-color:red;");
	   document.getElementById(""+divId_Index1+divId_Index2).setAttribute("onclick","getId(this)");
							}

							else 
								
	   
									if(!isFriend(divId_Index1,divId_Index2))
									{
										document.getElementById(""+divId_Index1+divId_Index2).setAttribute("style","border-color:red;");
	   document.getElementById(""+divId_Index1+divId_Index2).setAttribute("onclick","getId(this)");
									}
									
								
			   
			   }
			   divId_Index1=x+1;
			   if(divId_Index1<=7)
			   {
			   if(isEmpty(divId_Index1,divId_Index2))
                     	   {
							document.getElementById(""+divId_Index1+divId_Index2).setAttribute("style","border-color:red;");
	   document.getElementById(""+divId_Index1+divId_Index2).setAttribute("onclick","getId(this)");
							}

							else 
								
	   
									if(!isFriend(divId_Index1,divId_Index2))
									{
										document.getElementById(""+divId_Index1+divId_Index2).setAttribute("style","border-color:red;");
	   document.getElementById(""+divId_Index1+divId_Index2).setAttribute("onclick","getId(this)");
									}
						
			   }
			   
			         
			   }
			   
			   
			   
			   
			   
			   
}