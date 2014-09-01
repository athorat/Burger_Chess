var mo = new Array();
var l =0;
function getId(element)
{
alert("in getId");
alert(divId);

			var div2Id=element.id;
			alert(div2Id);
			var image= document.getElementById(divId).innerHTML;
			 alert(image);
			
			document.getElementById(divId).innerHTML = "";
			
			//var destId = element.id;
			
			// var imageInBox=document.getElementById(div2Id).innerHTML;
			 
			
			
			/* boxvar=135;
			 document.getElementById(boxvar).innerHTML=imageInBox;
			 */ 
			 
			// document.getElementById("chessBox").innerHTML=imageInBox;
			 
			// document.getElementById().setAttribute("style","border-color:red;");

			
			
			 
            document.getElementById(div2Id).innerHTML = image;
			 mo[l] =divId+'-'+div2Id;
			 alert(mo[l]);
			divId=div2Id;
			l++;
			
			var clear= document.getElementsByTagName("div");
 for(z=0;z<clear.length;z++)
 {
 clear[z].setAttribute("style","border-color:black;");
 }
		document.getElementById(div2Id).setAttribute("onclick","divClick(this)");	
			
}

