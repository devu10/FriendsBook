const slider = document.getElementById("mySlider");

slider.addEventListener("change",(e)=>{
 const value = e.target.value;

 if (value > 70){
    gotoSecondScreen();
 }
});

const gotoSecondScreen = ()=>{
    document.querySelector(".Slide-Screen").style.display = "none";
    document.querySelector(".list-icon").style.display ="block";
}