// shop now
const btnShop_now = document.querySelector(".btn__shop__now");
// btn close
const btnClose = document.querySelector(".btn__close");
// Button Unlock
const btnUnlock = document.querySelector(".btn__ulock");
// overlay
const overlay = document.querySelector(".overlay");
// modal
const modal = document.querySelector(".modal");
// btn__no__thanks
const btnNo = document.querySelector(".btn__no__thanks");
// Main Modal
const mainModal = document.querySelector(".main_modal");
// shop now 1
const btnShop_now1 = document.querySelector(".btn__shop_now1");
// shop now 2
const btnShopNow2 = document.querySelector(".btn-shopnow2");
// shop now 3
const btnShopNow3 = document.querySelector(".btn-shopnow3");
// shop now 4
const btnShopNow4 = document.querySelector(".btn-shopnow4");
// shop now 5
const btnShopNow5 = document.querySelector(".btn-shopnow5");
// shop now 6
const btnShopNow6 = document.querySelector(".btn-shopnow6");
// shop now 7
const btnShopNow7 = document.querySelector(".btn-shopnow7");

// btn sign in
const btnSigIn = document.querySelector(".btn-sign-in");
// modal sign in
const modalSignIn = document.querySelector(".modal-sign-in");
// btn-close-sign-in
const btnCloseSignIn = document.querySelector(".btn-close-sign-in");
// btn modal sign in
const btnModalSignIn = document.querySelector(".btn-modal-sign-in");
// btn modal create account
const btnCreateAccount = document.querySelector(".btn-create-account");
// modal create account
const modalCreateAccount =document.querySelector(".modal-create-account");
// btn close create account
const btnCloseCreateAcc = document.querySelector(".btn-close-create-account");




btnCloseCreateAcc.addEventListener("click",function(){
    modalCreateAccount.classList.remove("active");
    overlay.classList.remove("active");
})

btnCreateAccount.addEventListener("click",function(){
    modalCreateAccount.classList.add("active");
    overlay.classList.add("active");
})

btnSigIn.addEventListener("click",function(){
    modalSignIn.classList.add("active");
    overlay.classList.add("active");
})
btnCloseSignIn.addEventListener("click",function(){
    modalSignIn.classList.remove("active");
    overlay.classList.remove("active");
})
btnModalSignIn.addEventListener("click",function(e){
    e.preventDefault();
})

// hearts
const btnHeart1 = document.querySelector(".heart1");
var bool1 = true;
const btnHeart2 = document.querySelector(".heart2");
var bool2 = true;
const btnHeart3 = document.querySelector(".heart3");
var bool3 = true;
const btnHeart4 = document.querySelector(".heart4");
var bool4 = true;
const btnHeart5 = document.querySelector(".heart5");
var bool5 = true;
const btnHeart6 = document.querySelector(".heart6");
var bool6 = true;
const btnHeart7 = document.querySelector(".heart7");
var bool7 = true;
const btnHeart8 = document.querySelector(".heart8");
var bool8 = true;
const btnHeart9 = document.querySelector(".heart9");
var bool9 = true;
const btnHeart10 = document.querySelector(".heart10");
var bool10 = true;
const btnHeart11 = document.querySelector(".heart11");
var bool11 = true;
const btnHeart12 = document.querySelector(".heart12");
var bool12 = true;
const btnHeart13 = document.querySelector(".heart13");
var bool13 = true;
const btnHeart14 = document.querySelector(".heart14");
var bool14 = true;
const btnHeart15 = document.querySelector(".heart15");
var bool15 = true;
const btnHeart16 = document.querySelector(".heart16");
var bool16 = true;
const btnHeart17 = document.querySelector(".heart17");
var bool17 = true;
const btnHeart18 = document.querySelector(".heart18");
var bool18 = true;
const btnHeart19 = document.querySelector(".heart19");
var bool19 = true;
const btnHeart20 = document.querySelector(".heart20");
var bool20 = true;


// heart1
btnHeart1.addEventListener("click",function(){
    if (bool1 == true){
        btnHeart1.style.color = "red";
        bool1= false;
    }else {
        btnHeart1.style.color = "#74C0FC";
        bool1 = true;
    }
})
// heart2 
btnHeart2.addEventListener("click",function(){
    if(bool2 == true){
        btnHeart2.style.color = "red";
        bool2 = false;
    }else {
        btnHeart2.style.color ="#74c0fc"
        bool2 = true;
    }
})

// heart3
btnHeart3.addEventListener("click",function(){
    if(bool3 == true){
        btnHeart3.style.color = "red";
        bool3 = false;
    }else {
        btnHeart3.style.color = "#74c0fc";
        bool3 = true;
    }
})

// heart4
btnHeart4.addEventListener("click",function(){
    if(bool4 == true){
        btnHeart4.style.color = "red";
        bool4 = false;
    }else {
        btnHeart4.style.color = "#74c0fc";
        bool4 = true;
    }
})
// heart5
btnHeart5.addEventListener("click",function(){
    if(bool5 == true){
        btnHeart5.style.color = "red";
        bool5 = false;
    }else{
        btnHeart5.style.color = "#74c0fc";
        bool5 = true;
    }
})

// heart6
btnHeart6.addEventListener("click",function(){
    if(bool6 == true){
        btnHeart6.style.color = "red";
        bool6 = false;
    }
    else{
        btnHeart6.style.color = "#74c0fc";
        bool6 = true;
    }
})
// heart7
btnHeart7.addEventListener("click",function(){
    if(bool7 == true){
        btnHeart7.style.color = "red";
        bool7 = false;
    }else{
        btnHeart7.style.color = "#74c0fc";
        bool7 = true;
    }
})
// heart8
btnHeart8.addEventListener("click",function(){
    if(bool8 == true){
        btnHeart8.style.color = "red";
        bool8 = false;
    }else{
        btnHeart8.style.color = "#74c0fc";
        bool8 = true;
    }
})
// heart9
btnHeart9.addEventListener("click",function(){
    if(bool9 == true){
        btnHeart9.style.color = "red";
        bool9 = false;
    }else {
        btnHeart9.style.color = "#74c0fc";
        bool9 = true;
    }
})

// heart10 
btnHeart10.addEventListener("click",function(){
    if(bool10 == true){
        btnHeart10.style.color = "red";
        bool10 = false;
    }else{
        btnHeart10.style.color = "#74c0fc";
        bool10 = true;
    }
})
// heart11
btnHeart11.addEventListener("click",function(){
    if(bool11 == true){
        btnHeart11.style.color = "red";
        bool11 = false;
    }else {
        btnHeart11.style.color = "#74c0fc";
        bool11 = true;
    }
})
// heart12
btnHeart12.addEventListener("click",function(){
    if(bool12 == true){
    btnHeart12.style.color = "red";
    bool12 = false;
    }else{
        btnHeart12.style.color = "#74c0fc";
        bool12 = true;
    }
})
// heart13
btnHeart13.addEventListener("click",function(){
    if(bool13 == true){
        btnHeart13.style.color = "red";
        bool13 = false;
    }else{
        btnHeart13.style.color = "#74c0fc";
        bool13 = true;
    }
})
// heart14
btnHeart14.addEventListener("click",function(){
    if(bool14 == true){
        btnHeart14.style.color = "red";
        bool14 = false;
    }else{
        btnHeart14.style.color = "#74c0fc";
        bool14 = true;
    }
})
// heart15
btnHeart15.addEventListener("click",function(){
    if(bool15 == true){
        btnHeart15.style.color = "red";
        bool15 = false;
    }else{
        btnHeart15.style.color = "#74c0fc";
        bool15 = true;
    }
})
// heart16 
btnHeart16.addEventListener("click",function(){
    if(bool16 == true){
        btnHeart16.style.color = "red";
        bool16 = false;
    }else{
        btnHeart16.style.color = "#74c0fc";
        bool16 = true;
    }
})

// heart 17 
btnHeart17.addEventListener("click",function(){
    if(bool17 == true){
        btnHeart17.style.color = "red";
        bool17 = false;
    }else {
        btnHeart17.style.color = "#74c0fc";
        bool17 = true;
    }
})

// heart 18
btnHeart18.addEventListener("click",function(){
    if(bool18 == true){
        btnHeart18.style.color = "red";
        bool18 = false;
    }else {
        btnHeart18.style.color = "#74c0fc";
        bool18 = true;
    }
})

// heart 19
btnHeart19.addEventListener("click",function(){
    if(bool19 == true){
        btnHeart19.style.color = "red";
        bool19 = false;
    }else{
        btnHeart19.style.color = "#74c0fc";
        bool19 = true;
    }
})
// heart20
btnHeart20.addEventListener("click",function(){
    if(bool20 == true){
        btnHeart20.style.color = "red";
        bool20 = false;
    }else{
        btnHeart20.style.color = "#74c0fc";
        bool20 = true;
    }
})


// shop now 
btnShop_now.addEventListener("click",function(){
    mainModal.classList.add("active");
    modal.classList.add("active");
    overlay.classList.add("active");
})
// shop now 1
btnShop_now1.addEventListener("click",function(){
    mainModal.classList.add("active");
    modal.classList.add("active");
    overlay.classList.add("active");
    

})
// shop now 2
btnShopNow2.addEventListener("click",function(){
    mainModal.classList.add("active");
    modal.classList.add("active");
    overlay.classList.add("active");
})
// shop now 3
btnShopNow3.addEventListener("click",function(){
    mainModal.classList.add("active");
    modal.classList.add("active");
    overlay.classList.add("active");
})
// shop now 4
btnShopNow4.addEventListener("click",function(){
    mainModal.classList.add("active");
    modal.classList.add("active");
    overlay.classList.add("active");
})
// shop now 5
btnShopNow5.addEventListener("click",function(){
    mainModal.classList.add("active");
    modal.classList.add("active");
    overlay.classList.add("active");
})
// shop now 6
btnShopNow6.addEventListener("click",function(){
    mainModal.classList.add("active");
    modal.classList.add("active");
    overlay.classList.add("active");
})
// shop now 7
btnShopNow7.addEventListener("click",function(){
    mainModal.classList.add("active");
    modal.classList.add("active");
    overlay.classList.add("active");
})

btnClose.addEventListener("click",function(){
    overlay.classList.remove("active");
    modal.classList.remove("active");
    mainModal.classList.remove("active");
})

btnNo.addEventListener("click",function(){
    overlay.classList.remove("active");
    modal.classList.remove("active");
    mainModal.classList.remove("active");
})

// date times

var countDownDate = new Date("january 14, 2024 7:15:20").getTime();

var x = setInterval(() => {
    
    var now = new Date().getTime();
    var distance = now - countDownDate;

    var days = Math.floor(distance/(1000*60*60*24));
    var hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
    var minutes = Math.floor((distance%(1000*60*60))/(1000*60));
    var seconds = Math.floor((distance % (1000*60))/1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}, 1000);






