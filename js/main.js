$( document ).ready(function() 
{	
	var container = document.getElementById("binary");
	var str = container.innerHTML;
	var newText = "";
	
	for (var i = 0; i < str.length; i++) 
	{
		if (str[i] == 'A')  newText+= str.charAt(i).fontcolor("#3399ff");
		else newText+= str.charAt(i).fontcolor("#ff704d");
    }
    
	container.innerHTML = newText; 
});