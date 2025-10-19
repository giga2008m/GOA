function subscribe() {
const email = document.getElementById("email").value;
if(email === "") {
alert("გთხოვთ შეიყვანოთ ელფოსტა");
} else {
document.getElementById("subscribe-card").style.display = "none";
document.getElementById("success-message").style.display = "block";
}
}
function dismiss() {
document.getElementById("success-message").style.display = "none";
}
