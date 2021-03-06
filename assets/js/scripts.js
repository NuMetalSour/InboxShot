$(document).ready(function() {
    $.backstretch("../assets/img/background.jpg");
    
    $('.login-form input[type="text"], .login-form input[type="password"], .login-form textarea').on('focus', function() {
    	$(this).removeClass('input-error');
    });
    
    $('.login-form').on('submit', function(e) {
    	
    	$(this).find('input[type="text"], input[type="password"], textarea').each(function(){
    		if( $(this).val() == "" ) {
    			e.preventDefault();
    			$(this).addClass('input-error');
    		}
    		else {
    			$(this).removeClass('input-error');
    		}
    	});
    });
	
	$('#show-hide-pass').mousedown(function(){
		$('#pass').attr('type', 'text');
		$('#iconic').removeClass('fa-eye').addClass('fa-eye-slash');
	});
	
	$('#show-hide-pass').mouseup(function(){
		$('#pass').attr('type', 'password');
		$('#iconic').removeClass('fa-eye-slash').addClass('fa-eye');
	});
});
