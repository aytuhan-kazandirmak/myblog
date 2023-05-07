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
