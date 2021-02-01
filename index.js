const pics = [
    "https://images.unsplash.com/photo-1536257104079-aa99c6460a5a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
"https://images.unsplash.com/photo-1508556497405-ed7dcd94acfc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
"https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
"https://images.unsplash.com/photo-1515961896317-adf9e14bdcc0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
"https://images.unsplash.com/photo-1600337752115-de2c09d6704f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"];

let index = 0;
const currentPic = document.getElementById("pic-car");
const prevPic = document.getElementById("prev-pic");
const nextPic = document.getElementById("next-pic");
const changePic = function(){
    console.log(index);
    currentPic.style.backgroundImage = "url("+pics[index]+")";
};

changePic();
prevPic.addEventListener("click", ()=>{
    if(index){
        index--;
        changePic();
    }
    else{
        index = 4;
        changePic();
    }
});

nextPic.addEventListener("click", ()=>{
    if(index !== 4){
        index++;
        changePic();
    }
    else{
        index = 0;
        changePic();
    }
});



