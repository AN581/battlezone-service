document.addEventListener("DOMContentLoaded", function(){

// ===== Scroll Reveal =====
const sections = document.querySelectorAll(".section");
function reveal(){
sections.forEach(sec=>{
if(sec.getBoundingClientRect().top < window.innerHeight - 100){
sec.classList.add("active");
}
});
}
window.addEventListener("scroll", reveal);
reveal();

// ===== Coming Soon =====
const modal = document.getElementById("soonModal");
const closeBtn = document.getElementById("closeSoon");

document.querySelectorAll(".service-card").forEach(card=>{
card.addEventListener("click", ()=>{
modal.classList.add("active");
});
});

if(closeBtn){
closeBtn.addEventListener("click", ()=>{
modal.classList.remove("active");
});
}

// ===== Maintenance Page Logic =====
const osRadios = document.querySelectorAll("input[name='os']");
const totalDisplay = document.getElementById("maintenanceTotal");
const orderBtn = document.getElementById("maintenanceOrder");

if(osRadios.length){
let basePrice = 10;

osRadios.forEach(radio=>{
radio.addEventListener("change", function(){
let total = basePrice + parseInt(this.value);
totalDisplay.textContent = total;
});
});

orderBtn.addEventListener("click", ()=>{
let total = totalDisplay.textContent;
let message = `Hello, I want PC Maintenance service. Total price: $${total}`;
window.open(`https://wa.me/76523475?text=${encodeURIComponent(message)}`, '_blank');
});
}

});
