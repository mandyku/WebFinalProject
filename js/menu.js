$(document).ready(function()
{

	$("#signin_menu").click(function()
	{
		$("#loginclick").fadeIn();
		$("#registerclick").hide();
		

	}
		)

	$("#home_menu").click(function()
	{
		$("#registerclick").hide();
		$("#loginclick").hide();

	}
		)


	$("#registernew").click(function()
	{
		$("#loginclick").hide();
		$("#registerclick").fadeIn();
		

	}
		)
}

);