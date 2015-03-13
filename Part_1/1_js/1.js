function validate()
	{
	
		var pat = /(?=^.{5,8}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/ 	;			

		var str= document.myform.pword.value;
	
		if (document.myform.uname.value=='')			
		{	
			alert ('UserName field can not be empty.');  
		}
		else if(document.myform.pword.value=='')
		{
			alert ('Password field can not be empty.');  
		}
	
		else if (str.search(pat) == -1)		 	 
		{		
				alert("Please enter in specified format!");
		}
	
		else
		{
			alert("Content Validated..!! ");
			window.location = "2.html";
		}
	}
