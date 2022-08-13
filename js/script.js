
document.addEventListener('DOMContentLoaded',function(){

    //메인페이지 눈동자 움직이기
    document.addEventListener("mousemove", function(e){
    //     //커서
    //     const eye = document.querySelector(".eye span");
    //     gsap.to(eye, { right:2+'px', top: 5+'px'});
    
    //     //마우스 좌표 값
    //     let pageX = e.pageX;
    //     let pageY = e.pageX;
    
    //     //기준점 가운데로 변경
    //     let standardX = window.innerWidth/5 - pageX;
    //     let standardY = window.innerHeight/5 - pageY;
    
    //     //이미지 움직임
        
    //     eye.style.transform = "translate(" + standardX/80 + "px," + standardY/60 + "px)";
    
       
        

    // document.addEventListener("mousemove", function(e){
    //     const effect=document.querySelector(".eye_effect");
    //     const eye = effect.querySelectorAll(".black");
    //     // console.log(eye);

    //     //마우스 좌표 값
    //     let pageX = e.pageX;
    //     let pageY = e.pageY;
    
    //     gsap.to(eye, { right:2+'vw', top: 2+'vw'});
    
    //     //기준점 가운데로 변경
    //     let standardX = window.innerWidth/5 - pageX;
    //     let standardY = window.innerHeight/5 - pageY;
    
    //     //이미지 움직임
        
    //     eye.style.transform = "translate(" + standardX/30+ "vw," + standardY/30 + "vw)";

    // })


    
            // mouseX = Math.max(-50, Math.min(50, window.innerWidth/2 - x));
            // mouseY = Math.max(-50, Math.min(50, window.innerHeight/2 -y));
        
            // clientX=(mouseX *12)/100;
            // clientY=(mouseY *12)/100;
            
            // fmouseX += (clientX - fmouseX) *1/10;
            // fmouseY += (clientY - fmouseY) *1/10;
            
            // eye.style.transform = "translate(-50%, -50%) rotateX("+ fmouseY +"deg) rotateY("+ -fmouseX +"deg)";


    });
    
              //project button event
        // const button = document.querySelectorAll('.project .btn a');
            
        // button.forEach(btn => {
        //     btn.addEventListener('mouseover',function(e){
        //         let x= e.clientX -e.target.offsetLeft;
        //         let y= e.clientY -e.target.offsetTop;
        //         let ripples = document.createElement('span');

        //         ripples.style.left= x/3+'px';
        //         ripples.style.top= y/3+'px';

        //         this.appendChild(ripples);
        //         setTimeout(()=>{
        //             ripples.remove();
        //         },1000);

        //     });
        // });
    
});
