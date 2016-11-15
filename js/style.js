$(function() {
	//事件监听，当字符数超过2的时候允许点击
	$('#password').bind('input propertychange', function() {
    var NameLength = $(this).val().length;
    if(NameLength >= 2){
			$('#submit').removeAttr("disabled");
		}else{
			$("#submit").attr("disabled","disabled");
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
		}else {
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