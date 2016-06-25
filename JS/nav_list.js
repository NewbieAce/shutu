$(document).ready(function() {
	$('.nav li').eq(1).mouseenter(function() {
		$('.nav_list ul').eq(0).slideDown(500);
	});
	$('.nav li').eq(1).mouseleave(function() {
		$('.nav_list ul').eq(0).hide();
	});
	$('.nav_list ul').eq(0).mouseenter(function() {
		$('.nav_list ul').eq(0).show();
	});
	$('.nav_list ul').eq(0).mouseleave(function() {
		$('.nav_list ul').eq(0).hide(200);
	});
	
	
	$('.nav li').eq(2).mouseenter(function() {
		$('.nav_list ul').eq(1).slideDown(500);
	});
	$('.nav li').eq(2).mouseleave(function() {
		$('.nav_list ul').eq(1).hide();
	});
	$('.nav_list ul').eq(1).mouseenter(function() {
		$('.nav_list ul').eq(1).show();
	});
	$('.nav_list ul').eq(1).mouseleave(function() {
		$('.nav_list ul').eq(1).hide(200);
	});
	
	
	$('.nav li').eq(3).mouseenter(function() {
		$('.nav_list ul').eq(2).slideDown(500);
	});
	$('.nav li').eq(3).mouseleave(function() {
		$('.nav_list ul').eq(2).hide();
	});
	$('.nav_list ul').eq(2).mouseenter(function() {
		$('.nav_list ul').eq(2).show();
	});
	$('.nav_list ul').eq(2).mouseleave(function() {
		$('.nav_list ul').eq(2).hide(200);
	});
	
	$('.nav li').eq(4).mouseenter(function() {
		$('.nav_list ul').eq(3).slideDown(500);
	});
	$('.nav li').eq(4).mouseleave(function() {
		$('.nav_list ul').eq(3).hide();
	});
	$('.nav_list ul').eq(3).mouseenter(function() {
		$('.nav_list ul').eq(3).show();
	});
	$('.nav_list ul').eq(3).mouseleave(function() {
		$('.nav_list ul').eq(3).hide(200);
	});
	
	

});