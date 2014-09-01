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
			// var child = divId.firstChild;
			document.getElementById(divId).innerHTML = "";
			
			//var destId = element.id;
			
			 
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

