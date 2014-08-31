function getId(element)
{

			var divId=element.id;
			alert(divId);
			var image= document.getElementById(divId).innerHTML;
			 alert(image);
			// var child = divId.firstChild;
			document.getElementById(divId).innerHTML = "";
			
			//var destId = element.id;
			
			
            document.getElementById('55').innerHTML = image;
}