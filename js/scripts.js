var bgImageArray = ["https://st3.depositphotos.com/1017228/19282/i/1600/depositphotos_192820048-stock-photo-portrait-of-a-happy-young.jpg", "https://www.singleblackmale.org/wp-content/uploads/2014/06/African-American-Couple-Kissing1.jpg", "https://thumbs.dreamstime.com/z/african-couple-hugging-cheerful-young-each-other-30492135.jpg", "https://imgix.bustle.com/uploads/image/2019/4/4/d65394f1-de0c-4018-8374-72f88edfabd5-2t4a0735.JPG?w=970&h=546&fit=crop&crop=faces&auto=format&q=70", "https://image.shutterstock.com/image-photo/portrait-happy-young-african-couple-450w-1141848392.jpg"];
base = "",
secs = 6;
bgImageArray.forEach(function(img){
    new Image().src = base + img; 
});
function backgroundSequence() {
    window.clearTimeout();
        var k = 0;
        for (var i = 0; i < bgImageArray.length; i++) {
            setTimeout(function(){
    document.documentElement.style.background = "url(" + base + bgImageArray[k] + ") no-repeat center center fixed";
    document.documentElement.style.backgroundSize ="cover";
                if ((k + 1) === bgImageArray.length) {
                    setTimeout(function() {
                        backgroundSequence() }, (secs * 1000))
                } else { k++; }
            }, (secs * 1000) * i) 
        }
    }
    backgroundSequence();

   // Document Ready.
   function reset(){
    $("#message").val("");
}
   $(function () {
    cycleBackgrounds();
   });
   
   $(document).ready(function(){
       $("#plus").click(function(){
           $("#more").toggle();

       });
       $("#chat").hide();
       $('#start-chat').click(function(){
        $('#chat').show()
        $('#chatbox').hide()
        });
        $('#newChat').click(function(){
        $('#chat').hide()
        $('.info').show()
        // $('#more').hide()
        $('#chatbox').show()
        });
        $("#submit").click(function(){
            Message=$("#message").val();
            if(Message!==""){
                $("div#talk").append("<p>" + Message + "</p>");
            }
            reset();
        });
        
   });
