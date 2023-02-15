const signupName =document.getElementById('signupName');
const signupEmail =document.getElementById('signupEmail');
const signupPassword =document.getElementById('signupPassword');
const siginupBtn=document.getElementById('siginupBtn');
const exist =document.getElementById('exist');
const allInput=document.querySelectorAll('input');
var listUser=[];
var message;
var getEmailUser=[];
function setUserData(){
   var user ={
            name:signupName.value,
            email:signupEmail.value,
            password:signupPassword.value
    }
    listUser.push(user);
    localStorage.setItem("users",JSON.stringify(listUser));
};
function existUser(emailUser){
    if(localStorage.getItem("users")){
        getEmailUser=JSON.parse(localStorage.getItem("users"));
        if(getEmailUser[0].email==emailUser)
        {
            return true;
        }

        return false;    
    }
    return false;
}
siginupBtn.addEventListener('click',function(){
    if(signupName.value==""||signupEmail.value==""||signupPassword.value==""){
        message = document.createElement('span');
        message.textContent='All inputs is required';
        message.classList.add("text-danger", "m-3","d-block");
        exist.appendChild(message);
    }
    else if(existUser(signupEmail.value)){
        message = document.createElement('span');
        message.textContent='email already exists';
        message.classList.add("text-danger", "m-3","d-block");
        exist.appendChild(message);
    }
    else{
        message = document.createElement('span');
        message.textContent='success';
        message.classList.add("text-success", "m-3","d-block");
        exist.appendChild(message);
        setUserData();
        setTimeout(function(){
            window.open('index.html', "_self");
        },1000)
    }
    for(var i=0;i<allInput.length;i++){
        allInput[i].addEventListener('focus',()=>{
            message.classList.replace("d-block","d-none");
        });
    };
});

