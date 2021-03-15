
// ☛TODO: 啟用AOS.js
// AOS.init();
AOS.init({
	/**
		 * class設定參考
		<div
				data-aos="fade-up"
				data-aos-offset="200"
				data-aos-delay="50"
				data-aos-duration="1000"
				data-aos-easing="ease-in-out"
				data-aos-mirror="true"
				data-aos-once="false"
				data-aos-anchor-placement="top-bottom"
			data-aos-anchor="#example-anchor" 根據id 錨點觸發>
		</div>
		 */

	// ---------------〖Global settings:〗---------------
	// disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
	// startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
	// initClassName: 'aos-init', // class applied after initialization
	// animatedClassName: 'aos-animate', // class applied on animation
	// useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
	// disableMutationObserver: false, // disables automatic mutations' detections (advanced)
	// debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
	// throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

	// ---------------〖Settings that can be overridden on per-element basis, by `data-aos-*` attributes:〗---------------
	// offset: 120, // 以像素(px)為單位，水平移動 | offset (in px) from the original trigger point
	// delay: 500, //延遲時間，範圍：0~ 3000 | values from 0 to 3000, with step 50ms
	duration: 2000, //動畫時間，範圍：0~ 3000 | values from 0 to 3000, with step 50ms
	easing: "ease-in-out", // 動畫速率效果 | default easing for AOS animations
	/**
	 * 動畫速率效果：
	 * linear
	 * ease
	 * ease-in
	 * ease-out
	 * ease-in-out
	 * ease-in-back
	 * ease-out-back
	 * ease-in-out-back
	 * ease-in-sine
	 * ease-out-sine
	 * ease-in-out-sine
	 * ease-in-quad
	 * ease-out-quad
	 * ease-in-out-quad
	 * ease-in-cubic
	 * ease-out-cubic
	 * ease-in-out-cubic
	 * ease-in-quart
	 * ease-out-quart
	 * ease-in-out-quart
	 *
	 */
	once: true, // 是否重複觸發動畫 def:false | whether animation should happen only once - while scrolling down
	// mirror: false, // 是否超過滾動範圍時，做移出的動畫效果 預設：false | whether elements should animate out while scrolling past them
	// anchorPlacement: "top-bottom", // 滾動方向觸發動畫，預設由上到下 | defines which position of the element regarding to window should trigger the animation
	/*
	 * 滾動方向的設定值：
	 * top-bottom
	 * top-center
	 * top-top
	 * center-bottom
	 * center-center
	 * center-top
	 * bottom-bottom
	 * bottom-center
	 * bottom-top 
	*/
});



// <!-------------------------- hamber JS ----------------->
$(".hb-skin").click(function () {
	// $(".nav-function").toggleClass(function () {
	// 	return $(this).is('.active, .inactive') ? 'active inactive' : 'active';
	// });
	// $(".hb").toggleClass(function () {
	// 	return $(this).is('.open, .close') ? 'open close' : 'open';
	// });
	$(".nav-function").toggleClass('active');
	$(".hb").toggleClass('open');


	// ☛TODO: 
	const SearchIconOrNot = $(".nav-btn-m input").css("width") === "0px";
	// console.log('〖$(".nav-btn-m input") ==「', $(".nav-btn-m input"), '」〗');
	// console.log('〖$(".nav-btn-m input").css("width") ==「', $(".nav-btn-m input").css("width"), '」〗');
	console.log('〖SearchIconOrNot ==「', SearchIconOrNot, '」〗');
	if (!SearchIconOrNot) {
		$(".nav-btn-m input").css({ "width": "0", "padding": "0", "border-width": "0" });
	}
});



// $(".nav-btn.search").on("click", function () {
// 	// console.log('〖$(this) ==「', $(this), '」〗');
// 	// console.log('〖$(this).find("label") ==「', $(this).find("label"), '」〗');
// 	console.log('〖$(this).find("label").css("opacity") ==「', $(this).find("label").css("opacity"), '」〗');
// 	console.log('〖$(this).find("label").css("opacity")==="0" ==「', $(this).find("label").css("opacity")==="0", '」〗');
// 	// if ($(this).find("label").css("opacity") === "0") {
// 	// 	$(this).find("label").css({ "opacity": 1, "z-index": 10 });
// 	// } else {
// 	// 	$(this).find("label").css({ "opacity": 0, "z-index": -1 });
// 	// }
// 	$(".hb-skin").trigger("click");
// 	// $(".nav-function.nav-function1").removeClass("active");
// });

// ☛TODO: 手機漢堡與放大鏡處理
const searchMIcon = $(".nav-btn-m .search-icon-mark");
searchMIcon.on("click", function () {
	if (document.body.clientWidth <= 767) {
		const $this = $(this);
		const $thisMInput = $this.siblings("label").find("input");
		// console.log('〖$this.siblings("label").find("input").css("width") ==「', $this.siblings("label").find("input").css("width"), '」〗');
		if ($thisMInput.css("width") === "0px") {
			// $thisMInput.css({ "width": "calc(100vw - 18px)", "padding": "4px 8px", "border-width": "1px" });
			// $thisMInput.css({ "width": "calc(100vw - 36px)", "padding": "4px 8px", "border-width": "1px" });
			$thisMInput.css({ "width": "50vw", "padding": "4px 8px", "border-width": "1px" });
		} else {
			$thisMInput.css({ "width": "0", "padding": "0", "border-width": "0" });
		}
		const hbOrNot = $(".nav-function.nav-function1").hasClass("active");
		// console.log('〖hbOrNot ==「', hbOrNot, '」〗');
		if (hbOrNot) {
			$(".hb-skin").trigger("click");
		}
	}
});

// ☛TODO: RWD
window.onresize = function () {
	// alert("視窗改變了");
	// console.log($(".nav-btn-m input").css("width") !== "0px");
	// console.log($(".nav-function.nav-function1").hasClass('active'));
	if ($(".nav-function.nav-function1").hasClass('active')) {
		$(".hb-skin").trigger("click");
		// $(".nav-function.nav-function1").removeClass('active');
	}

	if ($(".nav-btn-m input").css("width") !== "0px") {
		$(".nav-btn-m input").css({ "width": "0", "padding": "0", "border-width": "0" });
	}
}

// <!-------------------------- nav JS ----------------->
$(".nav-btn1").mousemove(function (e) {
	$('.thehText').show().css({
		// left: e.clientX + 15,
		bottom: e.clientY + 15,
	});
}).mouseout(function () {
	$('.theText').hide();
});

// ===============【選單】===============
$(".href-model-fontB").on("click", function () {
	// console.log('〖$this.value ==「', $this.value, '」〗');
});


// ☛TODO: Gallery 圖片篩選
$(".select-group").on("click", function () {
	$(this).addClass('active');
	if ($(this).hasClass("active")) {
		$(".select-group").not(this).removeClass('active');
	}

	// 圖片篩選
	// switch ($(this).text().trim()) {
	// 	case "Upcoming":
	// 		console.log("Upcoming");
	// 		$('.col-gallery-photo[data-select-upcoming="off"]').addClass("d-none");
	// 		break;
	// 	case "Popular":
	// 		console.log("Popular");
	// 		$('.col-gallery-photo[data-select-upcoming="off"]').removeClass("d-none");
	// 		break;
	// 	default:
	// }
});




// (function () { 
// 	// const screenWidth = window.matchMedia('screen and (min-width:768px)');
// 	// console.log('〖screenWidth ==「', screenWidth, '」〗');
// 	// console.log('〖window.screenWidth ==「', window.screenWidth, '」〗');
// 	// console.log('〖window.innerWidth ==「', window.innerWidth, '」〗');
// 	// console.log('〖window.outerWidth ==「', window.outerWidth, '」〗');
// 	console.log('〖window.screen.width ==「', window.screen.width, '」〗');
// 	console.log('〖window.screen.availWidth ==「', window.screen.availWidth, '」〗');
// 	if () {

// 	}
// })();



// 動態偵測螢幕上的x和y座標
// $(document).ready(function(){
// 	$('.textHover').mousemove(function(e){
// 		var theText = $(this).attr('housetext');

// 		$('#theDiv').text(theText).show().css({
// 			left: e.clientX + 15,
// 			top: e.clientY + 15,
// 		});
// 	}).mouseout(function(){
// 		$('#theDiv').hide();
// 	});
// });






// window.onscroll = function () {
// 	if (document.documentElement.scrollTop > 350) {
// 		$id("topnav").className = "navbar2";
// 		$id("burger_menu").className = "burger_menu2";
// 	}
// 	else {
// 		$id("topnav").className = "navbar1";
// 		$id("burger_menu").className = "burger_menu1";
// 	}

// }

// function openNav() {
// 	document.getElementById("myNav").style.width = "100%";
// 	document.getElementById("burger_menu").style.display = "none";
// }
// function closeNav() {
// 	document.getElementById("myNav").style.width = "0%";
// 	document.getElementById("burger_menu").style.display = "block";
// }
