//         <-------------------Adding mobile last 4 dugit ----------------->

let loger = JSON.parse(localStorage.getItem('triedToLoginUser'))
let mob = JSON.parse(localStorage.getItem('mobRegistration'))
mob = mob+ ""
let lastDigit = mob[6]+mob[7]+mob[8]+mob[9]
// console.log(lastDigit)

 document.querySelector("a>span").innerText= lastDigit;
  //         <-------------------Submit Function ----------------->     

 function AsubmitmyOTP(){

    let otp = document.querySelectorAll(".otp-field")
    if((otp[0].value=="" && otp[1].value=="" && otp[2].value=="" && otp[3].value=="")
                   ||
    otp[0].value=="" || otp[1].value=="" || otp[2].value=="" || otp[3].value==""){
        document.querySelector(".BpopupOTP").innerHTML = `<p>Please enter OTP to Login</p>`
    }else{
        if(otp[0].value=="1" && otp[1].value=="2" && otp[2].value=="3" && otp[3].value=="4"){
            localStorage.setItem('ActiveUser',JSON.stringify(loger))
            window.location.href="index.html"
            alert('you are logged in')

        }else{
            document.querySelector(".BpopupOTP").innerHTML = `<p>Invalid OTP , Please Try Again with Correct OTP
            </p>`
        }
    }
    document.querySelector(".AEnterText").style.color='red'
    otp[0].style.border='2px solid red'
    otp[1].style.border='2px solid red'
    otp[2].style.border='2px solid red'
    otp[3].style.border='2px solid red'
      
 }


//         <-------------------Resend OTP Timer ----------------->

const resendCode = ()=>{
    document.querySelector(".AresentOTP>span").innerText=""
        let i=30;
        let time = setInterval((resendTimer)=>{
        if(i>0){

            document.querySelector(".AresentOTP").style.color='grey';
            document.querySelector(".AresentOTP>span").style.color='#00aeef';
            document.querySelector(".AresentOTP>span").innerText = `00:${i}`
        }else{
            console.log('else Part')
            document.querySelector(".AresentOTP>span").innerText ="";
            document.querySelector(".AresentOTP").style.color='#00aeef'
            clearInterval(time);
        }
        i--;
        },1000)
        
}
 //         <------------------- Calling Resend OTP Timer function on click----------------->

document.querySelector(".AresentOTP").addEventListener('click',()=>{
    resendCode();
 });



//         <------------------- Calling Resend OTP Timer function at every refresh----------------->

 resendCode()