//读取sessionStorage中的参数，并放入到网页中
$(function() {
	$(".username").html(sessionStorage.sitename + ":");
});

//Fullpage.js回调函数的使用
$(function() {
	$('#fullpage').fullpage({
		//sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE'],
		css3: true,
		//页面加载完成后执行的回调函数
		afterRender: function() {
			$('.intro1 h1').each(function() {
				$(this).addClass("fadeInDown").addClass("animated");
			});
			$('.intro1 p').each(function() {
				$(this).addClass("fadeInUp").addClass("animated");
			});
			$('.inner h1').each(function() {
				$(this).removeClass("fadeInDown").addClass("infoHide").addClass("animated");
			});
			$('.inner p').each(function() {
				$(this).removeClass("fadeInUp").addClass("infoHide").addClass("animated");
			});
			$('.headLogo').addClass("infoHide");
			$('.telPhone').addClass("infoHide");
			$('.mypic').addClass("infoHide");
			$('.mybtn').addClass("infoHide");
			$('footer').addClass("infoHide");
			$('.kePublic').addClass("infoHide");
		},
		//进入到某屏页面之后触发的回调函数
		afterLoad: function(anchorLink, index) {
			if(index == 1) {
				$('.intro1 h1').each(function() {
					$(this).removeClass("infoHide").addClass("fadeInDown");
				});
				$('.intro1 p').each(function() {
					$(this).removeClass("infoHide").addClass("fadeInUp");
				});
			}
			if(index == 2 || index == 3 || index == 4) {
				$('.inner').find('h1').each(function() {
					$(this).removeClass("infoHide").addClass("fadeInDown");
				});
				$('.inner').find('p').each(function() {
					$(this).removeClass("infoHide").addClass("fadeInUp");
				});
			}
			if(index == 5) {
				$('.inner').find('h1').each(function() {
					$(this).removeClass("infoHide").addClass("zoomIn");
				});
				$('.inner').find('p').each(function() {
					$(this).removeClass("infoHide").addClass("zoomIn");
				});
				$('.headLogo').removeClass("infoHide").addClass("showup");
				$('.telPhone').removeClass("infoHide").addClass("showup");
			}
			if(index == 6){
				$('.inner').find('h1').each(function() {
					$(this).removeClass("infoHide").addClass("zoomIn");
				});
				$('.inner').find('p').each(function() {
					$(this).removeClass("infoHide").addClass("zoomIn");
				});
				$('.mypic').removeClass("infoHide").addClass("showup");
				$('.mybtn').removeClass("infoHide").addClass("showup");
			}
			if(index == 7){
				$('.inner').find('h1').each(function() {
					$(this).removeClass("infoHide").addClass("zoomIn");
				});
				$('footer').removeClass("infoHide").addClass("zoomIn");
				$('.kePublic').removeClass("infoHide").addClass("zoomIn");
			}
		},
		//离开页面时执行的回调函数
		onLeave: function(index, direction) {
			if(index == 1) {
				$('.intro1').find('h1').each(function() {
					$(this).addClass("infoHide").removeClass("fadeInDown");
				});
				$('.intro1').find('p').each(function() {
					$(this).addClass("infoHide").removeClass("fadeInUp");
				});
			}
			if(index == 2 || index == 3 || index == 4) {
				$('.inner').find('h1').each(function() {
					$(this).addClass("infoHide").removeClass("fadeInDown");
				});
				$('.inner').find('p').each(function() {
					$(this).addClass("infoHide").removeClass("fadeInUp");
				});
			}
			if(index == 5) {
				$('.inner').find('h1').each(function() {
					$(this).addClass("infoHide").removeClass("zoomIn");
				});
				$('.inner').find('p').each(function() {
					$(this).addClass("infoHide").removeClass("zoomIn");
				});
				$('.headLogo').addClass("infoHide").removeClass("showup");
				$('.telPhone').addClass("infoHide").removeClass("showup");
			}
			if(index == 6) {
				$('.inner').find('h1').each(function() {
					$(this).addClass("infoHide").removeClass("zoomIn");
				});
				$('.inner').find('p').each(function() {
					$(this).addClass("infoHide").removeClass("zoomIn");
				});
				$('.mypic').addClass("infoHide").removeClass("showup");
				$('.mybtn').addClass("infoHide").removeClass("showup");
			}
			if(index == 7) {
				$('.inner').find('h1').each(function() {
					$(this).addClass("infoHide").removeClass("zoomIn");
				});
				$('footer').addClass("infoHide").removeClass("zoomIn");
				$('.kePublic').addClass("infoHide").removeClass("zoomIn");
			}
		}
	});
});

//选择题环节的趣味回答1
$(function() {
	var i = 1;
	$('.yes').click(function() {
		if(i < 2) {
			$(".yesReply").fadeIn().delay(3000).fadeOut();
			i++;
		} else {
			$(".yesReply3").fadeIn().delay(3000).fadeOut();
			$('.yes').attr("disabled", "disabled");
		}

	});
	$('.no').click(function() {
		$(".noReply").fadeIn().delay(3000).fadeOut();
		$('.no').attr("disabled", "disabled");
	});
});

//选择题环节的趣味回答2
$(function() {
	var i = 1;
	var j = 1;
//	$('.high').click(function() {
//		if(i < 2) {
//			$(".yesReply2").fadeIn();
//			i++;
//		} else {
//			$(".yesReply3").fadeIn().delay(3000).fadeOut();
//			$('.high').attr("disabled", "disabled");
//		}
//
//	});
	$(".high").on("click", function(e) {
		if(i < 2) {
			$(".yesReply2").fadeIn();
			$(".closes").one("click", function() {
				$(".yesReply2").fadeOut();
			});
			e.stopPropagation();   //阻止冒泡事件
			i++;
		}else {
			$(".yesReply3").fadeIn().delay(3000).fadeOut();
			$('.high').attr("disabled", "disabled");
			$('.low').attr("disabled", "disabled");
		}

				
	});
	$('.low').click(function() {
		if(j < 2){
			$('.low').css("top", "40px");
			j++;
		}else if(j >= 2 & j < 3){
			$('.low').css("right", "105px");
			j++;			
		}else if(j >= 3 & j < 4){
			$('.low').css("top", "0px").css("right", "0");
			j++;
		}else{
			$(".noReply").fadeIn().delay(3000).fadeOut();
			$('.low').attr("disabled", "disabled");
		}
	});
});

//复制密令
$(function() {
	var c = document.getElementById("pwd");
	var s = c.innerHTML;
	var clipboard = new Clipboard('.copy', {
		text: function() {
			return s;
		}
	});
	clipboard.on('success',
		function(e) {
			$(".yesReply2").fadeOut();
			$(".copyRight").fadeIn().delay(3000).fadeOut();
		});
	clipboard.on('error',
		function(e) {
			console.log(e);			
			alert("对不起，Android版微信不支持该功能，请手动长按复制");
		});
});