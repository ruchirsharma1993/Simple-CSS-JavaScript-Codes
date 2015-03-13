user=0;
function myfunc(e)
{
	
	if (e.keyCode == 13 && user==1) 
	{
		
		//alert("here");
		var val=document.getElementById('ta1').value;
		document.getElementById('ta1').value="";
		
		var idiv = document.createElement('div');
		idiv.id = 'block0';
		
		var b = document.getElementsByTagName('body')[0];
		b.insertBefore(idiv,b.childNodes[4]);
		
		//Add Image 
		var elem = document.createElement("img");
		elem.src = '5_images/u2.jpeg';
		elem.width='100';
		elem.height='100';
		var foo = document.getElementById("block0");
		foo.appendChild(elem);
		
		//Add Username
		var elem = document.createElement("h2");
		node = document.createTextNode("User2");
		elem.appendChild(node);
		elem.className='like';
		element = document.getElementById("block0");
		element.appendChild(elem);
		
		//Append Date
		var currentTime = new Date()
		var month = currentTime.getMonth() + 1
		var day = currentTime.getDate()
		var year = currentTime.getFullYear()
		var now = month + "/" + day + "/" + year
		
		var para1 = document.createElement("p");
		node = document.createTextNode(now);
		para1.appendChild(node);
		para1.className='handate';
		element = document.getElementById("block0");
		element.appendChild(para1);
		
		//Append Comment
		var para = document.createElement("p");
		var node = document.createTextNode(val);
		para.appendChild(node);
		var element = document.getElementById("block0");
		element.appendChild(para);
		
		user=0;
		
		
		//Add Like Button
		var elem = document.createElement("img");
		elem.src = '5_images/like.jpeg';
		elem.like=0;
		elem.onclick=function(e) { 
		 var two = document.getElementById('one');
	    var number = two.innerHTML;
	    number++;
	    two.innerHTML = number;
		  };
		  
		  
		
		var foo = document.getElementById("block0");
		foo.appendChild(elem);
		
		
		//No of likes
		var show="0";
		var para2 = document.createElement("p");
		para2.id="one"
		para2.className='like';
		node = document.createTextNode(show);
		para2.appendChild(node);
		element = document.getElementById("block0");
		element.appendChild(para2);
		
		
		//Comment
		var but1 = document.createElement('input');
		
	    but1.type ='submit';
	    but1.value = 'Comment'; 
		but1.name = 'combut1';  
	    but1.onclick = function() 
	    { 
       		var input1 = document.createElement('input'); 
		input1.type = "text";
		input1.className='combox';
		input1.id = "combox1";
		input1.onkeypress=function(e) 
		{ 
			 if(e.keyCode == 13)
			 {
				 var two1 = document.getElementById('combox1');
			    	var text1 = two1.value;
			    	document.getElementById('combox1').value="";
					
					var para31 = document.createElement("p");
					para31.id="three"
					var node31 = document.createTextNode(text1);
					para31.appendChild(node31);
					var element1 = document.getElementById("block0");
					element1.appendChild(para31);
			 }
		 }; 
		var foo1 = document.getElementById("block0");
		foo1.appendChild(input1);
    };

	var fooo = document.getElementById("block0");
		fooo.appendChild(but1);	
		
		
		
		

	}
	else if (e.keyCode == 13 && user==0) 
	{
		user=1;
		//alert("here: "+user);
		var val=document.getElementById('ta1').value;
		document.getElementById('ta1').value="";
		
		var idiv = document.createElement('div');
		idiv.id = 'block1';
		idiv.className = 'block';
		
		var b = document.getElementsByTagName('body')[0];
		b.insertBefore(idiv,b.childNodes[4]);
		
		//Add Image 
		var elem = document.createElement("img");
		elem.src = '5_images/u1.jpg';
		elem.width='100';
		elem.height='100';
		var foo = document.getElementById("block1");
		foo.appendChild(elem);
		
		//Add Username
		var elem = document.createElement("h2");
		node = document.createTextNode("User1");
		elem.appendChild(node);
		elem.className='like';
		element = document.getElementById("block1");
		element.appendChild(elem);
		
		//Append Date
		var currentTime = new Date()
		var month = currentTime.getMonth() + 1
		var day = currentTime.getDate()
		var year = currentTime.getFullYear()
		var now = month + "/" + day + "/" + year
		
		var para1 = document.createElement("p");
		node = document.createTextNode(now);
		para1.appendChild(node);
		
		para1.className='handate';
		element = document.getElementById("block1");
		element.appendChild(para1);
		
		//Append Comment
		var para = document.createElement("p");
		var node = document.createTextNode(val);
		para.appendChild(node);
		var element = document.getElementById("block1");
		element.appendChild(para);
		
		
		
		
		//Add Like Button
		var elem = document.createElement("img");
		elem.src = '5_images/like.jpeg';
		elem.like=0;
		elem.onclick=function(e) { 
		 var two = document.getElementById('two');
		    var number = two.innerHTML;
		    number++;
		    two.innerHTML = number;
		  };
		
		var foo = document.getElementById("block1");
		foo.appendChild(elem);
	
	
		//No of likes
		var show="0";
		var para2 = document.createElement("p");
		para2.id="two"
		para2.className='like';
		node = document.createTextNode(show);
		para2.appendChild(node);
		element = document.getElementById("block1");
		element.appendChild(para2);
		
		
		//Comment
		var but = document.createElement('input');
		
	    but.type ='submit';
	    but.value = 'Comment'; 
		but.name = 'combut';  
	    but.onclick = function() 
	    { 
	       		var input = document.createElement('input'); 
			input.type = "text";
			input.className='combox';
			input.id = "combox";
			input.onkeypress=function(e) 
			{ 
				 if(e.keyCode == 13)
				 {
					 var two = document.getElementById('combox');
				    	var text = two.value;
				    	document.getElementById('combox').value="";
						//var br = document.createElement('BR');
						//element = document.getElementById("block1");
						//element.appendChild(br);
					
						var para3 = document.createElement("p");
						para3.id="three"
						var node3 = document.createTextNode(text);
						para3.appendChild(node3);
						element = document.getElementById("block1");
						element.appendChild(para3);
				 }
			 }; 
			var foo = document.getElementById("block1");
			foo.appendChild(input);
	    };

		var foo = document.getElementById("block1");
			foo.appendChild(but);	
		
		
		

		}
}

