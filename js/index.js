// Get the modal
var modal = document.getElementById('id01');
var modal1 = document.getElementById('id02');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  else if(event.target == modal1)
  modal1.style.display = "none";
}

function login(){
  document.getElementById('id01').style.display="none";
    document.getElementById('id02').style.display="block";
}

function checkpass() {
  var psw = document.getElementById('psw1').value;
  var psw_repeaat = document.getElementById('psw_repeaat1').value;

  if (psw == psw_repeaat)
    document.getElementById('msg').innerHTML = null;

   else
     if(psw_repeaat=="")
     document.getElementById('msg').innerHTML = null;
     else
    document.getElementById('msg').innerHTML = ' كلمة المرور غير متطابقة *';

}
