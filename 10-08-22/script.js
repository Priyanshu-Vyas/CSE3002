function validateForm() {
    var x = document.forms["MyForm"]["name"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
    var y = document.forms["MyForm"]["email"].value;
    if (y == "") {
      alert("Email cannot be Empty!!");
      return false;
    }
    var z = document.forms["MyForm"]["no"].value;
    if (z == "") {
      alert("Number must be filled out");
      return false;
    }
    var m = document.forms["MyForm"]["msg"].value;
    if (m == "") {
      alert("Message must be filled out, Please Specify the purpose!!");
      return false;
    }
    var select = document.getElementById('topic');
    var v = select.options[select.selectedIndex].value;
    if(v=="none") {
        alert("Please select a valid Topic");
        return false;
    }
    var c = document.forms["MyForm"]["cap"].value;
    if (c == "") {
      alert("Enter the captcha code..");
      return false;
    }
  }