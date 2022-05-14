/********************** DOM Definition Start **********************/
let circles=document.querySelector(".circle");
let img_area=document.querySelector('.img')
let images=document.querySelectorAll(".img>img");
let rightbtn=document.querySelector(".right>a");
let leftbtn=document.querySelector(".left>a");
let submit=document.querySelector("#submit");
let input=document.querySelector("#input");
/********************** DOM Definition End **********************/

/********************** Like Button Click Event Start **********************/
like.addEventListener("click",function(){

    if(!(like.classList.contains('fa-solid'))){
        like.classList.add("fa-solid",'color-red');
        like.classList.remove('fa-regular')
    }

    else{
        like.classList.remove("fa-solid",'color-red');
        like.classList.add('fa-regular')

    }

})
/********************** Like Button Click Event End **********************/

/********************** Save Button Click Event Start **********************/
save.addEventListener('click',()=>{
    if(!(save.classList.contains('fa-solid'))){
        save.classList.add("fa-solid");
        save.classList.remove('fa-regular')
    }

    else{
        save.classList.remove("fa-solid");
        save.classList.add('fa-regular')

    }
})
/********************** Save Button Click Event End **********************/

/********************** Input Key Down Event Start **********************/
function inputKeyDown(){
    
    if(input.value.length>0){
        submit.style.color='#0095f6';
    }

    else{
        submit.style.color='#CAE9FD';
    }
}
/********************** Input Key Down Event End **********************/

/********************** Carousel's Circles Start **********************/
for(let i=0;i<images.length;i++){
   circles.innerHTML+=`<i class="fa-solid fa-circle"></i>`
}

let circle=document.querySelectorAll(".circle>i");

rightbtn.addEventListener("click", rightBtn)
leftbtn.addEventListener("click", leftBtn)
leftbtn.style.display="none";

/********************** Right Button Start **********************/
function rightBtn(){
    leftbtn.style.display="block";
        img_area.scrollLeft+=601

        if(img_area.scrollLeft==0){
            circle[1].style.color="#0095f6";
            circle[0].style.color="#A8A8A8";
        }

        else if(Math.round(img_area.scrollLeft)>=599){

            rightbtn.style.display="none";
            circle[2].style.color="#0095f6";
            circle[1].style.color="#A8A8A8";
        }
}
/********************** Right Button End **********************/

/********************** Left Button Start **********************/
function leftBtn(){
    rightbtn.style.display="block";
    
    img_area.scrollLeft-=600

    if(Math.round(img_area.scrollLeft)<=601){
        leftbtn.style.display="none";
        circle[0].style.color="#0095f6";
        circle[1].style.color="#A8A8A8";
    }

    else{
        circle[2].style.color="#A8A8A8";
        circle[1].style.color="#0095f6";
    }
       
}
/********************** Left Button End **********************/
/********************** Carousel's Circles End **********************/





