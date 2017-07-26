$(function () {
    // 导航的动态获取
    $.ajax({
        url: "http://139.199.192.48:9090/api/getindexmenu",
        success: function (data) {
            console.log(data);
            data.result[4].titlehref = "haitao.html";
            var result = template("nav-modal", data);
            result = result.replace(/&#60;/g, "<");
            result = result.replace(/&#62;/g, ">");
            result = result.replace(/&#34;/g, "'");
            // console.log(result);
            $("nav").append(result);
            $("nav .nav-opation:eq(7)").nextAll().css("display", "none");
            $("nav .nav-opation:eq(7)").click(function () {
                if ($(this).next().css("display") == "none") {
                    $(this).nextAll().css("display", "block");
                } else {
                    $(this).nextAll().css("display", "none");
                }
            })
        }
    });


    // 超值折扣推荐的动态获取
    $.ajax({
        url: "http://139.199.192.48:9090/api/getmoneyctrl",
        success: function (data) {
            console.log(data);
            var result = template("superValue-modal", data);
            result = result.replace(/&#60;/g, "<");
            result = result.replace(/&#62;/g, ">");
            result = result.replace(/&#34;/g, "'");
            $(".superValue-items").append(result);
            var swiper = new Swiper('.scroll-container', {
                scrollbar: '.scroll-bar',
                direction: 'vertical',
                slidesPerView: 'auto',
                mousewheelControl: true,
                freeMode: true,
                roundLengths: true, //防止文字模糊\
            });
            
            // 回到顶部
            $("footer > .footer-links a:eq(2)").on("click", function () {
                swiper.slideTo(0, 500, true);
            });
        }
    });
})