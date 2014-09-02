var mo = new Array();
var l =0;
function getId(element)
{
//alert("in getId");
//alert(divId);

			var destinationDivId=element.id;
	//		alert(destinationDivId);
			var sourceImage= document.getElementById(divId).innerHTML;
		//	 alert(sourceImage);
			
			document.getElementById(divId).innerHTML = "";

			var destinationImage=document.getElementById(destinationDivId).innerHTML;
			//alert(destinationImage);
			
		/*	if(element.firstChild.id == "br1")
			{
			alert("tru");
			 document.getElementById("101").innerHTML = destinationImage;
			 }
			 */
			 
			
             document.getElementById(destinationDivId).innerHTML = sourceImage;
			 
			 
			 
			 
			 
			 mo[l] =divId+'-'+destinationDivId;
		//	 alert(mo[l]);
			divId=destinationDivId;
			l++;
			
			var clear= document.getElementsByTagName("div");
 for(z=0;z<clear.length;z++)
 {
 if(clear[z].innerHTML=="")
 {
 clear[z].removeAttribute("onclick");
 }

 clear[z].setAttribute("style","border-color:black;");
  
 }
		document.getElementById(destinationDivId).setAttribute("onclick","entry(this)");	
			
}

