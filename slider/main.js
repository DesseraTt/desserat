
    $(document).ready(function(){
        var toLeft= $('.prev');
        var toRight= $('.next');
        var elList=$('.list');
        
        var step =420;
        var currentLeftValue = 0;
        var elCount = elList.find('li').length;

        var minStep = -((elCount-8)*step);
        var maxStep = 0;

        toLeft.click(function(){
            if (currentLeftValue != maxStep) {
                currentLeftValue += step;
                elList.animate({ left : currentLeftValue + "px"}, 600);
            }else{
                currentLeftValue = minStep;
                elList.animate({ left : currentLeftValue + "px"}, 600);
            }
        })
        toRight.click(function(){
            if (currentLeftValue != minStep) {
                currentLeftValue -= step;
                elList.animate({ left : currentLeftValue + "px"},600);
            }
            else{
                currentLeftValue =0;
                elList.animate({ left : currentLeftValue + "px"}, 600);
            }
        })
        $('.item').click(function (e){
            if( $('.big img').attr('src')!==$(this).attr('src'))
            {
                $('.big img').hide().attr('src', $(this).attr('src')).fadeIn(600);

            }
            e.preventDefault();
        });
    });