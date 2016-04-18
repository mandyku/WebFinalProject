$(document).ready(function () {
	//	@ Yizhou Ding 
	//your js code goes here...

	$("#usernamer").after("<span id = 'infoID1r' class='info'></span>");
	$("#passwordr").after("<span id = 'infoID2r' class='info'></span>");
	$("#emailr").after("<span id = 'infoID3r' class='info'></span>");
	$("#confirm").after("<span id = 'infoID4r' class='info'></span>");
	$("span").hide();

	// get focus show info message
	$("#usernamer").focus(function () {
		$("#infoID1r").removeClass();
		$("#infoID1r").text("only letters and numeric characters");
		$("#infoID1r").addClass("info");
		$("#infoID1r").show();
	});

	$("#passwordr").focus(function () {
		$("#infoID2r").removeClass();
		$("#infoID2r").text("example: Aa1234@#");
		$("#infoID2r").addClass("info");
		$("#infoID2r").show();
	});

	$("#emailr").focus(function () {
		$("#infoID3r").removeClass();
		$("#infoID3r").text("Valid E-mail should be like: apple@tree.com");
		$("#infoID3r").addClass("info");
		$("#infoID3r").show();
	});
	$("#confirm").focus(function () {
		$("#infoID4r").removeClass();
		$("#infoID4r").text("Confirm your password");
		$("#infoID4r").addClass("info");
		$("#infoID4r").show();
	});




	//out of focus 
	$("#usernamer").blur(function () {
		$("#infoID1r").removeClass();
		var a = $(this).val();

		// If the field is empty, the notification element should be hidden.
		if (a.length == 0) {
			$("#infoID1r").hide();
			return;
		}

		//check if less than 4 characters
		if (a.length < 4) {
			set_error("#infoID1r", "At least 4 characters long");
		} else {
			//contains invalid characters-> error
			if (a.search(/[^A-Za-z0-9]/) != -1) {
				set_error("#infoID1r", "ERROR, invalid characters for username");
			} else {
				//check if contains at least one letter
				if (a.search(/[A-Za-z]/) == -1) {
					set_error("#infoID1r", "At least one letter.");
				} else {
					//check if username start with number -> error
					//str.charAt(0)
					if (a.search(/[0-9]/) == 0) {
						set_error("#infoID1r", "username can NOT begin with number.");
					} else {
						set_ok("#infoID1r");
					}
				}
			}
		}
    });


	$("#passwordr").blur(function () {
		$("#infoID2r").removeClass();
		var a = $(this).val();

		// If the field is empty, the notification element should be hidden.
		if (a.length == 0) {
			$("#infoID2r").hide();
			return;
		}

		//check if less than 8 characters
		if (a.length < 8) {
			set_error("#infoID2r", "at least 8 characters long");
		} else {
			//check if contains upper case
			if (a.search(/[A-Z]/) == -1) {
				set_error("#infoID2r", "at least one upper case letter");
			} else {
				//check if contains lower case
				if (a.search(/[a-z]/) == -1) {
					set_error("#infoID2r", "at least one lower case letter");
				} else {
					//check if contains one number
					if (a.search(/[0-9]/) == -1) {
						set_error("#infoID2r", "at least one number 0~9");
					} else {
						//check if contains one special character !,@,#,$,%,^,&,*
						if (a.search(/[!@#$%^&*]/) == -1) {
							set_error("#infoID2r", "at least one special character !,@,#,$,%,^,&,*");
						} else {
							set_ok("#infoID2r");
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

	$("#emailr").blur(function () {
		$("#infoID3r").removeClass();
		var a = $(this).val();

		// If the field is empty, the notification element should be hidden.
		if (a.length == 0) {
			$("#infoID3r").hide();
			return;
		}

		//if a contains valid email->OK, else error
		//valid email means like: str@str 
		//check if contains @
		if (a.indexOf("@") == -1) {
			set_error("#infoID3r", "ERROR, email should contain @ sign");
		} else {
			//check if begins with @
			if (a.indexOf("@") == 0) {
				set_error("#infoID3r", "ERROR, email should NOT begin with @ sign");
			} else {
				//check if ends with @
				if (a.indexOf("@") == a.length - 1) {
					set_error("#infoID3r", "ERROR, email should NOT end with @ sign");
				} else {
					set_ok("#infoID3r");
				}
			}
		}
    });

    $("#confirm").blur(function () {
		$("#infoID4r").removeClass();
		var a = $(this).val();
		var pass = $("#passwordr").val();
		// If the field is empty, the notification element should be hidden.
		if (a.length == 0) {
			$("#infoID4r").hide();
			return;
		}

		//if same as password->OK, else error
		if (a != pass) {
			set_error("#infoID4r", "ERROR, Password does not match!");
		} else {
			set_ok("#infoID4r");
		}
    });


	//validate form, enable/disable the register link
	$("input").on("blur keyup", function () {
        if (($("#infoID1r").text() != "OK") || ($("#infoID2r").text() != "OK")
			|| ($("#infoID3r").text() != "OK" )|| ($("#infoID4r").text() != "OK")) {
            $("#register").prop("disabled", "disabled");
        } else {
            $("#register").prop("disabled", false);
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



