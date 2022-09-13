
// open and close navigation for mobile size and tablate size with javascript
function openNav(){
    document.getElementById("myNav").style.width = "60%";
}
  
function closeNav(){
    document.getElementById("myNav").style.width = "0%";
}

// switch form user with jquery
$('#go-register').click(function (){
  $('#user-register').show(300);
});

$('#go-register').click(function (){
  $('#user-login').hide(300);
});

$('#go-login').click(function(){
  $('#user-login').show(300);
});

$('#go-login').click(function(){
  $('#user-register').hide(300);
});