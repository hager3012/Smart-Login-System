const logoutBtn =document.getElementById('logoutBtn');
const username =document.getElementById('username');
var listUser=JSON.parse(localStorage.getItem("users"));
logoutBtn.addEventListener('click',function(){
    window.open('index.html', "_self");
});
username.textContent=`Welcome ${listUser[0].name}`;