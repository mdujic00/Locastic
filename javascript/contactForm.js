$(document).ready(function()
{
	$('div.send-msg').click(function(){

		var name = document.getElementById("name");
		var email = document.getElementById("email");
		var msg = document.getElementById("message");  
	 
		if(validateName(name)){
		
			if(validateEmail(email)){  
			
				if(validateMessage(msg)){ 
				
					$.ajax({
						type: 'POST',
						url: "http://www.locastic.com/api/v1/fe­dev",
						data:{
							name: name.value,
							email: email.value,
							msg: msg.value
						},
						success: function(){ 
								alert("Message sent.");
							},
						error: function(){
							alert("Message not sent.");
						},
						dataType: 'text'
					});
				}
			}	  
		}  
		 
		return false; 
		
		//--------------------------------------
		function validateName(name){	
			var letters = /^[A-Za-z\s]+$/;  
			if(name.value.match(letters)){  
				return true;  
			}  
			else{  
				alert('Please enter a valid name. Contact name must have alphabet characters only.');  
				name.focus();  
				return false;  
			}  
		}  
		
		function validateEmail(email){  
			var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
			
			if(email.value.match(mailformat)){  
				return true;  
			}  
			
			else{  
				alert("Invalid email address, please enter a valid e-mail.");  
				email.focus();  
				return false;  
			}  
		}  
		
		function validateMessage(msg){
			var msg_lenght = msg.value.length; 
			
			if (msg_lenght == 0 || msg_lenght < 3){  
				alert("Message too short.");  
				msg.focus();  
				return false;  
			}
			
			return true;  
		}
		  
	});
});
