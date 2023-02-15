
const signinEmail=document.getElementById('signinEmail');
const signinPassword=document.getElementById('signinPassword');
const loginBtn=document.getElementById('loginBtn');
const incorrect=document.getElementById('incorrect');
const allInput=document.querySelectorAll('input');
var listUser=[];
var message;
function checkGetUserList(){
    if(localStorage.getItem("users")){
        listUser=JSON.parse(localStorage.getItem("users").valueOf());
        return true;
    }
    return false;

}
loginBtn.addEventListener('click',function(){
    if(signinEmail.value==""||signinPassword.value==""){
        message = document.createElement('span');
        message.textContent='All inputs is required';
        message.classList.add("text-danger", "m-3","d-block");
        incorrect.appendChild(message);
    }
    else if(checkGetUserList()){
        if(listUser[0].email==signinEmail.value && listUser[0].password==signinPassword.value){
            message = document.createElement('span');
            message.textContent='success';
            message.classList.add("text-success", "m-3","d-block");
            incorrect.appendChild(message);
            setTimeout(function(){
                window.open('welcome.html', "_self");
            },1000)
        }
        else{
            message = document.createElement('span');
            message.textContent='incorrect email or password';
            message.classList.add("text-danger", "m-3","d-block");
            incorrect.appendChild(message);
    }
    }
    else{
            message = document.createElement('span');
            message.textContent='invalid user please sign Up';
            message.classList.add("text-danger", "m-3","d-block");
            incorrect.appendChild(message);
    }
    for(var i=0;i<allInput.length;i++){
        allInput[i].addEventListener('focus',()=>{
            message.classList.replace("d-block","d-none");
        });
    };
});


