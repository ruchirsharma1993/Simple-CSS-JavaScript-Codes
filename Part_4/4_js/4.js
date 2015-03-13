function myFunction(ele)
{
	var s = '4_images/' + ele.id + '.png';
	var elem = document.createElement("img");
	elem.src = s;
	var foo = document.getElementById("div2");
	foo.appendChild(elem);

	var foo = document.getElementById("div1");
	foo.removeChild(ele);

}
function reset()
{
	location.reload();

}

 
