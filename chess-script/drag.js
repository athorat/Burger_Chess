
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
	//alert(divId);

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
 