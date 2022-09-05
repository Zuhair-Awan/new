function signup(){
let main_arr=[JSON.parse(localStorage.getItem('data'))];
 var obj={
"fname":document.getElementById('fname').value,
"username":document.getElementById('username').value,
"pwd":document.getElementById('pwd').value,
 }
 console.log(obj);
//  main_arr.push(obj);
//  localStorage.setItem('data',JSON.stringify(main_arr));





}
