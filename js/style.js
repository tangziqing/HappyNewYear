$(function() {
	//事件监听，当字符数超过2的时候允许点击
	$('#password').bind('input propertychange', function() {
		var GanYuanYou = $(this).val();
		var NameLength = $(this).val().length;
		if(NameLength >= 2) {
			$('#submit').text("新年快乐");
			$('#submit').removeAttr("disabled");
		} else {
			$('#submit').text("点击进入");
			$("#submit").attr("disabled", "disabled");
		}
	});

	//点击footer显示网站相关情况
	$(".belief").on("click", function(e) {
		$(".webInfo").fadeIn();
		$(".infoBox").addClass("showup");

		$(".close").one("click", function() {
			$(".webInfo").hide();
			$(".infoBox").removeClass("showup");
		});

		e.stopPropagation(); //阻止冒泡事件
	});
	$(".infoBox").on("click", function(e) {
		e.stopPropagation();
	});

	//判断输入的内容跳转到相应的页面，low bee方法，排名不分先后
	$('#submit').click(function() {
		var name = $('#password').val();
		if(typeof(Storage) !== "undefined") {
			sessionStorage.sitename = name;
		}
		if(name == "唐松") {
			location.href = "./tangsong.html";
		} else if(name == "甘元佑") {
			location.href = "./agan.html";
		} else if(name == "夏贞逸") {
			location.href = "./azhen.html";
		} else if(name == "尹佳怡") {
			location.href = "./azhu.html";
		} else if(name == "段预测") {
			location.href = "./duanzong.html";
		} else if(name == "於琳童") {
			location.href = "./ertong.html";
		} else if(name == "吴承涵") {
			location.href = "./hange.html";
		} else if(name == "张涵越") {
			location.href = "./hanyue.html";
		} else if(name == "王翔辉") {
			location.href = "./huige.html";
		} else if(name == "谭静") {
			location.href = "./jingjing.html";
		} else if(name == "董琳珏") {
			location.href = "./juejue.html";
		} else if(name == "胡世玲") {
			location.href = "./liangliang.html";
		} else if(name == "梁琦") {
			location.href = "./liangqi.html";
		} else if(name == "梁潇") {
			location.href = "./liangxiao.html";
		} else if(name == "李靖") {
			location.href = "./lijing.html";
		} else if(name == "李俊") {
			location.href = "./lijun.html";
		} else if(name == "胡胜男") {
			location.href = "./nannan.html";
		} else if(name == "冀倩倩") {
			location.href = "./qianqian.html";
		} else if(name == "赵帅帅") {
			location.href = "./shuaishuai.html";
		} else if(name == "刘爽") {
			location.href = "./shuangge.html";
		} else if(name == "王思思") {
			location.href = "./sisi.html";
		} else if(name == "张桃") {
			location.href = "./taotao.html";
		} else if(name == "李小芳") {
			location.href = "./xiaofang.html";
		} else if(name == "尹小芳") {
			location.href = "./xiaofangjie.html";
		} else if(name == "唐伶凤") {
			location.href = "./xiaofeng.html";
		} else if(name == "汪秀凤") {
			location.href = "./xiufeng.html";
		} else if(name == "李娅兰") {
			location.href = "./yalan.html";
		} else if(name == "雷琇麟") {
			location.href = "./xiulin.html";
		} else if(name == "周云津") {
			location.href = "./yunjin.html";
		} else if(name == "刘一锋") {
			location.href = "./yifeng.html";
		} else if(name == "周伟") {
			location.href = "./zhouwei.html";
		} else if(name == "余学海") {
			location.href = "./xuehai.html";
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