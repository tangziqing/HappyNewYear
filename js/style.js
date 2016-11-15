$(function() {
	//事件监听，当字符数超过2的时候允许点击
	$('#password').bind('input propertychange', function() {
		var NameLength = $(this).val().length;
		if(NameLength >= 2) {
			$('#submit').removeAttr("disabled");
		} else {
			$("#submit").attr("disabled", "disabled");
		}
	});
	//判断输入的内容跳转到相应的页面，low bee方法
	$('#submit').click(function() {
		var name = $('#password').val();
		if(typeof(Storage) !== "undefined") {
			sessionStorage.sitename = name;
		}
		if(name == "唐松") {
			location.href = "./tangsong.html";
		} else if(name == "赵帅帅") {
			location.href = "./shuaishuai.html";
		} else if(name == "帅帅哥") {
			location.href = "./shuaishuai.html";
		} else if(name == "张桃") {
			location.href = "./taotao.html";
		} else if(name == "梁琦") {
			location.href = "./liangqi.html";
		} else if(name == "於琳童") {
			location.href = "./ertong.html";
		} else if(name == "夏贞逸") {
			location.href = "./azhen.html";
		} else if(name == "段预测") {
			location.href = "./duanzong.html";
		} else if(name == "胡胜男") {
			location.href = "./nannan.html";
		} else if(name == "王思思") {
			location.href = "./sisi.html";
		} else if(name == "冀倩倩") {
			location.href = "./qianqian.html";
		} else if(name == "唐伶凤") {
			location.href = "./xiaofeng.html";
		} else if(name == "李小芳") {
			location.href = "./xiaofang.html";
		} else if(name == "董琳珏") {
			location.href = "./juejue.html";
		} else if(name == "甘元佑") {
			location.href = "./agan.html";
		} else if(name == "尹家怡") {
			location.href = "./azhu.html";
		} else if(name == "汪秀凤") {
			location.href = "./xiufeng.html";
		} else {
			location.href = "./friends.html";
		}
	});

});

$(function() {
	//遮眼效果
	$('#login #password').focus(function() {
		$('#owl-login').addClass('password');
	}).blur(function() {
		$('#owl-login').removeClass('password');
	});
});

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
			if(index == 2 || index == 3 || index == 4 || index == 5) {
				$('.inner').find('h1').each(function() {
					$(this).removeClass("infoHide").addClass("fadeInDown");
				});
				$('.inner').find('p').each(function() {
					$(this).removeClass("infoHide").addClass("fadeInUp");
				});				
			}
			if(index == 6) {
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
			if(index == 2 || index == 3 || index == 4 || index == 5) {
				$('.inner').find('h1').each(function() {
					$(this).addClass("infoHide").removeClass("fadeInDown");
				});
				$('.inner').find('p').each(function() {
					$(this).addClass("infoHide").removeClass("fadeInUp");
				});
			}
			if(index == 6) {
				$('.zanzhu-con a').fadeOut(1000);
			}
		}
	});
});