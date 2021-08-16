$("h1").css("color","red");
console.log($("h1").css("color"));
$("h1").addClass("big-head margin-50");
$("a").attr("href", "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js");
$("h1").click(function(){
    $("h1").css("color","purple");
});
// $("input").keypress(function(event){
//  console.log(event.key);
// });
// $(document).keypress(function(event){
//     $("h1").text(event.key);
//    });
// $("h1").on("mouseover",function(){
//     $("h1").css("color","pink");
//    });
$("h1").on("click",function(){
    $("h1").hide().show().slideUp().slideDown().animate({opacity : 0.5});
});
// $("button").on("click",function(){
//     $("h1").show();
// });
