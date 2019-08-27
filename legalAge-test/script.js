


function validation() {
  let legalAge = 2019;
  let myAge = document.getElementById("myYear").value;
  if (myAge == "") {
    alert("You have to type a year");
  } else if (legalAge - myAge >= 18) {
    window.location.href = "file:///home/dci-l223/wi-fighters/my-projects/legalAge-test/page-two.html";
  } else {
    alert("Oh, no... You are not allowed to be here, my friend...");
  }
}
