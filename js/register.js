
$(document).ready(function(){
	
    $('#register').click(function(){

        var username = $('#usernamer').val();
        var password = $('#passwordr').val();
        var email = $('#emailr').val();

		//var post_str = $('form').serialize();

         event.preventDefault();

			$.ajax({
     			type: "POST",
     			url: "includes/register.php",
                data: "username=" + username + "&password=" + password + "&email=" + email,
	
     			success: function(msg) {
          			if(msg == "success")
                    {
                        $('#signin').hide();
                        $('#signout').show();
                        $("#my_form").hide();
                        $("#registerform").hide();
                        //$("#product").fadeIn();
                    }
                    else if(msg == "email")
                    {
                        
                        $('#registerErr').update('This email has already registered, please try another.');
                    }
                    else
                    {
                        $('#registerErr').update('This username has already registered, please try another.');
                    }
     			},
               
     			 error: function (request, error) {
        			console.log(arguments);
        			alert(" Can't do because: " + error);
    				},

                complete:function()
                {
                    $('#my_form').hide();
                    $('#registerform').hide();     
                }
			});


		     
		})

})
