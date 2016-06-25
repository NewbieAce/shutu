$(document).ready(function() {
							$(".nav>li>a").wrapInner('<span class="out"></span>');
							$(".nav>li>a").each(function() {
								$('<span class="over">' + $(this).text() + '</span>').appendTo(this);
							});
							$("#nav_menu li a").hover(function() {
								$(".out", this).stop().animate({
									'top': '45px'
								}, 200);
								$(".over", this).stop().animate({
									'top': '0px'
								}, 200);
							}, function() {
								$(".out", this).stop().animate({
									'top': '0px'
								}, 200);
								$(".over", this).stop().animate({
									'top': '-45px'
								}, 200);
							});
						});