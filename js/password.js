$(document).ready(function () {
	//	@ Yizhou Ding 
	//your js code goes here...

	$("#username").after("<span id = 'infoID1' class='info'></span>");
	$("#password").after("<span id = 'infoID2' class='info'></span>");
	$("#email").after("<span id = 'infoID3' class='info'></span>");
	
	$("span").hide();


	// get focus show info message
	$("#username").focus(function () {
		$("#infoID1").removeClass();
		$("#infoID1").text("only letters and numeric characters");
		$("#infoID1").addClass("info");
		$("#infoID1").show();
	});

	$("#password").focus(function () {
		$("#infoID2").removeClass();
		$("#infoID2").text("example: Aa1234@#");
		$("#infoID2").addClass("info");
		$("#infoID2").show();
	});

	$("#email").focus(function () {
		$("#infoID3").removeClass();
		$("#infoID3").text("Valid E-mail should be like: apple@tree.com");
		$("#infoID3").addClass("info");
		$("#infoID3").show();
	});




	//out of focus 
	$("#username").blur(function () {
		$("#infoID1").removeClass();
		var a = $(this).val();

		// If the field is empty, the notification element should be hidden.
		if (a.length == 0) {
			$("#infoID1").hide();
			return;
		}

		//check if less than 4 characters
		if (a.length < 4) {
			set_error("#infoID1", "At least 4 characters long");
		} else {
			//contains invalid characters-> error
			if (a.search(/[^A-Za-z0-9]/) != -1) {
				set_error("#infoID1", "ERROR, invalid characters for username");
			} else {
				//check if contains at least one letter
				if (a.search(/[A-Za-z]/) == -1) {
					set_error("#infoID1", "At least one letter.");
				} else {
					//check if username start with number -> error
					//str.charAt(0)
					if (a.search(/[0-9]/) == 0) {
						set_error("#infoID1", "username can NOT begin with number.");
					} else {
						set_ok("#infoID1");
					}
				}
			}
		}
    });


	$("#password").blur(function () {
		$("#infoID2").removeClass();
		var a = $(this).val();

		// If the field is empty, the notification element should be hidden.
		if (a.length == 0) {
			$("#infoID2").hide();
			return;
		}

		//check if less than 8 characters
		if (a.length < 8) {
			set_error("#infoID2", "at least 8 characters long");
		} else {
			//check if contains upper case
			if (a.search(/[A-Z]/) == -1) {
				set_error("#infoID2", "at least one upper case letter");
			} else {
				//check if contains lower case
				if (a.search(/[a-z]/) == -1) {
					set_error("#infoID2", "at least one lower case letter");
				} else {
					//check if contains one number
					if (a.search(/[0-9]/) == -1) {
						set_error("#infoID2", "at least one number 0~9");
					} else {
						//check if contains one special character !,@,#,$,%,^,&,*
						if (a.search(/[!@#$%^&*]/) == -1) {
							set_error("#infoID2", "at least one special character !,@,#,$,%,^,&,*");
						} else {
							set_ok("#infoID2");
						}
					}
				}
			}
		}
    });

	/*
	if ((a.search(/[A-Z]/) == -1) || (a.search(/[a-z]/) == -1) || (a.search(/[0-9]/) == -1) || (a.search(/[!@#$%^&*]/) == -1)) {
					set_error("#infoID2", "at least one upper case, lower case, 0~9, !,@,#,$,%,^,&,*");
				} else {
					set_ok("#infoID2");
				}
	
	*/

	$("#email").blur(function () {
		$("#infoID3").removeClass();
		var a = $(this).val();

		// If the field is empty, the notification element should be hidden.
		if (a.length == 0) {
			$("#infoID3").hide();
			return;
		}

		//if a contains valid email->OK, else error
		//valid email means like: str@str 
		//check if contains @
		if (a.indexOf("@") == -1) {
			set_error("#infoID3", "ERROR, email should contain @ sign");
		} else {
			//check if begins with @
			if (a.indexOf("@") == 0) {
				set_error("#infoID3", "ERROR, email should NOT begin with @ sign");
			} else {
				//check if ends with @
				if (a.indexOf("@") == a.length - 1) {
					set_error("#infoID3", "ERROR, email should NOT end with @ sign");
				} else {
					set_ok("#infoID3");
				}
			}
		}
    });

	//validate form, enable/disable the login link
	$("input").on("blur keyup", function () {
        if (($("#infoID1").text() != "OK") || ($("#infoID2").text() != "OK")
			|| ($("#infoID3").text() != "OK")) {
            $("#login").prop("disabled", "disabled");
        } else {
            $("#login").prop("disabled", false);
        }
    });

	
});

function set_error(id, msg) {
	$(id).text(msg);
	$(id).addClass("error");
}

function set_ok(id) {
	$(id).text("OK");
	$(id).addClass("ok");
}



