$(window).scroll(function(){
    if($(window).scrollTop() > 650){
        $(".grid").css({
            "max-height": "60px",
            "padding": "0px",
            "box-shadow": "0px 0px 5px 0px",
        })
    }else{
        $(".grid").css({
            "max-height": "100px",
            "padding": "20px",
            "box-shadow": "none",
        })
}
})
        $(document).ready(function () {
            $(".li-element a").click(function () {
                $(".nav a").css({ "border-bottom": "none" })
                $(this).css({
                    "border-bottom": "2px solid black",

                })
            })
        })
        $(window).scroll(function () {
            if ($(window).scrollTop() == 0) {
                $(".grid").css({
                    "box-shadow": "none"
                })
            } else {
                $(".grid").css({
                    "box-shadow": "0px 0px 5px 0px"
                })
            }
        })

