$(function(){
    $("#fullpage").fullpage({
        verticalCentered: false,
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9', 'page10'],
        navigation: true,
        navigationTooltips: ['首页', '视觉', '交互', '皮肤', '功能', '待办邮件', '联系人邮件', '科技', '连接易信', '马上体验'],
        afterLoad:function(anchorLink,index){
            if(index==1){
                $('.bg12').css({bottom:"90px",opacity:"1",transitionDelay:"0.7s"});
                $('.bg13').css({bottom:"0px",opacity:"1",transitionDelay:"0.7s"});
                $('.hgroup').css({opacity:"1",transform:"scale(1, 1)",transitionDelay:"0.7s"});
                $('.mail').css({top:"25px",transitionDelay:"0.7s"});
                $('.p11').css({opacity:"1",transitionDuration:"1s",transitionDelay:"2s"});
                $('.section1 strong').css({opacity:"1",transform:"scale(1, 1)",transitionDelay:"0.7s"});
                $('.section1 h3').css({opacity:"1",transform:"scale(1, 1)",transitionDelay:"0.7s"});
            }
            if(index==2){
                $('.bg21').css({opacity:"1",marginLeft:"-608px",transitionDelay:"0.7s"});
                $('.bg23').css({bottom:"15%",transitionDelay:"0.7s",opacity:"1"});
                $('.bg22').css({marginLeft:"-280px",opacity:"1",transitionDelay:"0.7s"});
                $('.section2 strong').css({opacity:"1",transform:"scale(1, 1)",transitionDelay:"0.7s"});
                $('.section2 h3').css({opacity:"1",transform:"scale(1, 1)",transitionDelay:"0.7s"});
                $('.section2 .p1').css({opacity:"1",transitionDelay:"1.7s"});
            }
            if(index==3){
                $('.p3').css({marginLeft:"-480px",opacity:"1",transitionDelay:"0.7s"});
                $('.bg31').css({opacity:"1",transitionDelay:"1s"});
                $('.bg32').css({opacity:"1",transitionDelay:"1s"});
                $('.bg33').css({marginLeft:"-120px",opacity:"1",transitionDelay:"0.7s"});
                $('.section3 strong').css({opacity:"1",transform:"scale(1, 1)",transitionDelay:"0.7s"});
                $('.section3 h3').css({opacity:"1",transform:"scale(1, 1)",transitionDelay:"0.7s"});
            }
            if(index==4){
                $('.bg41').css({bottom:"15%",transitionDelay:"0.7s"});
                $('.bg42').css({bottom:"15%",transitionDelay:"1.1s"});
                $('.bg43').css({bottom:"15%",transitionDelay:"0.9s"});
                $('.section4 strong').css({opacity:"1",transform:"scale(1, 1)",transitionDelay:"0.7s"});
                $('.section4 h3').css({opacity:"1",transform:"scale(1, 1)",transitionDelay:"0.7s"});
                $('.section4 .p1').css({opacity:"1",transitionDelay:"1.7s"});
            }
            if(index==5){
                $('.bg51').css({marginLeft:"-551px",opacity:"1",transitionDelay:"0.7s"});
                $('.bg52').css({marginLeft:"-253px",opacity:"1",transitionDelay:"0.7s"});
                $('.bg53').css({marginLeft:"45px",opacity:"1",transitionDelay:"0.7s"});
                $('.bg54').css({marginLeft:"345px",opacity:"1",transitionDelay:"0.7s"});
                $('.section5 strong').css({opacity:"1",transform:"scale(1, 1)",transitionDelay:"0.7s"});
                $('.section5 h3').css({opacity:"1",transform:"scale(1, 1)",transitionDelay:"0.7s"});
            }
            if(index==6){
                $('.bg61').css({top: "0",transitionDelay:"0.7s"});
                $('.bg62').css({left: "50%",opacity:"1",transitionDelay:"0.7s"});
                $('.txt6').css({left: "50%",opacity:"1",transitionDelay:"0.7s"});
                $('.section6 strong').css({opacity:"1",transform:"scale(1, 1)",transitionDelay:"0.7s"});
                $('.section6 h3').css({opacity:"1",transform:"scale(1, 1)",transitionDelay:"0.7s"});
            }
            if(index==7){
                $('.bg71').css({bottom: "250px",opacity:"1",transitionDelay:"0.7s"});
                $('.bg72').css({bottom: "350px",opacity:"1",transitionDelay:"0.9s"});
                $('.txt7').css({bottom: "420px",opacity:"1",transitionDelay:"1.1s"});
                $('.section7 strong').css({opacity:"1",transform:"scale(1, 1)",transitionDelay:"0.7s"});
                $('.section7 h3').css({opacity:"1",transform:"scale(1, 1)",transitionDelay:"0.7s"});
            }
            if(index==8){
                $('.bg82').css({bottom: "260px",marginLeft:"-280px",opacity:"1",transitionDelay:"0.7s"});
                $('.bg83').css({bottom: "380px",marginLeft:"-430px",opacity:"1",transitionDelay:"1s"});
                $('.bg84').css({bottom: "420px",marginLeft:"-510px",opacity:"1",transitionDelay:"1.2s"});
                $('.p8').css({opacity:"1",transitionDelay:"1.7s"});
                $('.section8 strong').css({opacity:"1",transform:"scale(1, 1)",transitionDelay:"0.7s"});
                $('.section8 h3').css({opacity:"1",transform:"scale(1, 1)",transitionDelay:"0.7s"});
            }
            if(index==9){
                $('.bg91').css({marginLeft:"-570px",opacity:"1",transitionDelay:"0.7s"});
                $('.bg92').css({opacity:"1",transitionDelay:"0.8s"});
                $('.bg93').css({marginLeft:"230px",opacity:"1",transitionDelay:"0.7s"});
                $('.section9 strong').css({opacity:"1",transform:"scale(1, 1)",transitionDelay:"0.7s"});
                $('.section9 h3').css({opacity:"1",transform:"scale(1, 1)",transitionDelay:"0.7s"});
            }
            if(index==10){
                $('.bg102').css({opacity:"1",transform:"scale(1, 1)",transitionDelay:"0.7s"});
                $('.bg103').css({opacity:"1",transform:"scale(1, 1)",transitionDelay:"0.7s"});
                $('.go').css({top:"25%",opacity:"1",transitionDelay:"1.2s"});
            }
        },
        onLeave: function (index){
            if(index==1){
                $('.bg12').css({bottom:"-392px",opacity:"0"});
                $('.bg13').css({bottom:"-377px",opacity:"0"});
                $('.hgroup').css({opacity:"0",transform:"scale(0.5, 0.5)"});
                $('.mail').css({top:"-26px"});
                $('.p11').css({opacity:"0"});
                $('.section1 strong').css({opacity:"0",transform:"scale(0.5, 0.5)"});
                $('.section1 h3').css({opacity:"0",transform:"scale(0.5, 0.5)"});
            }
            if(index==2){
                $('.bg21').css({opacity:"0",marginLeft:"-1108px"});
                $('.bg23').css({bottom:"-40%",opacity:"0"});
                $('.bg22').css({marginLeft:"320px",opacity:"0"});
                $('.section2 strong').css({opacity:"0",transform:"scale(0.5, 0.5)"});
                $('.section2 h3').css({opacity:"0",transform:"scale(0.5, 0.5)"});
                $('.section2 .p1').css({opacity:"0"});
            }
            if(index==3){
                $('.p3').css({marginLeft:"-100%",opacity:"0"});
                $('.bg31').css({opacity:"0"});
                $('.bg32').css({opacity:"0"});
                $('.bg33').css({marginLeft:"50%",opacity:"0"});
                $('.section3 strong').css({opacity:"0",transform:"scale(0.5, 0.5)"});
                $('.section3 h3').css({opacity:"0",transform:"scale(0.5, 0.5)"});
            }
            if(index==4){
                $('.bg41').css({bottom:"-372px"});
                $('.bg42').css({bottom:"-449px"});
                $('.bg43').css({bottom:"-449px"});
                $('.section4 strong').css({opacity:"0",transform:"scale(0.5, 0.5)"});
                $('.section4 h3').css({opacity:"0",transform:"scale(0.5, 0.5)"});
                $('.section4 .p1').css({opacity:"0"});
            }
            if(index==5){
                $('.bg51').css({marginLeft:"-851px",opacity:"0"});
                $('.bg52').css({marginLeft:"-403px",opacity:"0"});
                $('.bg53').css({marginLeft:"195px",opacity:"0"});
                $('.bg54').css({marginLeft:"645px",opacity:"0"});
                $('.section5 strong').css({opacity:"0",transform:"scale(0.5, 0.5)"});
                $('.section5 h3').css({opacity:"0",transform:"scale(0.5, 0.5)"});
            }
            if(index==6){
                $('.bg61').css({top: "-454px"});
                $('.bg62').css({left: "10%",opacity:"0"});
                $('.txt6').css({left: "90%",opacity:"0"});
                $('.section6 strong').css({opacity:"0",transform:"scale(0.5, 0.5)"});
                $('.section6 h3').css({opacity:"0",transform:"scale(0.5, 0.5)"});
            }
            if(index==7){
                $('.bg71').css({bottom: "-201px",opacity:"0"});
                $('.bg72').css({bottom: "-206px",opacity:"0"});
                $('.txt7').css({bottom: "-150px",opacity:"0"});
                $('.section7 strong').css({opacity:"0",transform:"scale(0.5, 0.5)"});
                $('.section7 h3').css({opacity:"0",transform:"scale(0.5, 0.5)"});
            }
            if(index==8){
                $('.bg82').css({bottom: "160px",marginLeft:"-180px",opacity:"0"});
                $('.bg83').css({bottom: "280px",marginLeft:"-330px",opacity:"0"});
                $('.bg84').css({bottom: "320px",marginLeft:"-410px",opacity:"0"});
                $('.p8').css({opacity:"0"});
                $('.section8 strong').css({opacity:"0",transform:"scale(0.5, 0.5)"});
                $('.section8 h3').css({opacity:"0",transform:"scale(0.5, 0.5)"});
            }
            if(index==9){
                $('.bg91').css({marginLeft:"-970px",opacity:"0"});
                $('.bg92').css({opacity:"0"});
                $('.bg93').css({marginLeft:"630px",opacity:"0"});
                $('.section9 strong').css({opacity:"0",transform:"scale(0.5, 0.5)"});
                $('.section9 h3').css({opacity:"0",transform:"scale(0.5, 0.5)"});
            }
            if(index==10){
                $('.bg102').css({opacity:"0",transform:"scale(0.5, 0.5)"});
                $('.bg103').css({opacity:"0",transform:"scale(0.5, 0.5)"});
                $('.go').css({top:"55%",opacity:"0"});
            }




        }
    });
})


/*.active .hgroup { opacity: 1; -webkit-transform:scale(1, 1); transform:scale(1, 1); transition-delay: 0.7s;}*/
/*.active .mail { top: 25px; transition-delay: 0.7s;}*/
/*.active .p11 { opacity: 1; transition-duration: 1s; transition-delay: 2s;}*/