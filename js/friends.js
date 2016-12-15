//读取sessionStorage中的参数，并放入到网页中
$(function() {
//	$(".username").html(sessionStorage.sitename + ":");
    $(".username").html(sessionStorage.getItem("setname"));
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
			if(index == 2 || index == 3 || index == 4 || index == 5 || index == 6) {
				$('.inner').find('h1').each(function() {
					$(this).removeClass("infoHide").addClass("fadeInDown");
				});
				$('.inner').find('p').each(function() {
					$(this).removeClass("infoHide").addClass("fadeInUp");
				});
			}
			if(index == 8) {
				$('.zanzhu-con a').fadeIn(1000);
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
			if(index == 2 || index == 3 || index == 4 || index == 5 || index == 6) {
				$('.inner').find('h1').each(function() {
					$(this).addClass("infoHide").removeClass("fadeInDown");
				});
				$('.inner').find('p').each(function() {
					$(this).addClass("infoHide").removeClass("fadeInUp");
				});
			}
			if(index == 8) {
				$('.zanzhu-con a').fadeOut(1000);
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
	$('.high').click(function() {
		if(i < 2) {
			$(".yesReply2").fadeIn();
			i++;
		} else {
			$(".yesReply3").fadeIn().delay(3000).fadeOut();
			$('.high').attr("disabled", "disabled");
		}

	});
	$('.low').click(function() {
		$(".noReply").fadeIn().delay(3000).fadeOut();
		$('.low').attr("disabled", "disabled");
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
			alert("error");
		});
});