function toggleDropdown() {
    var dropdown = document.getElementById("myDropdown");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}


window.onclick = function(event) {
    var dropdown = document.getElementById("myDropdown");
    if (event.target.classList.contains('dropdown-button')) return; 
    if (!event.target.matches('.dropdown')) {
        dropdown.style.display = "none";
    }
}

var countDownDate = new Date("March 16, 2024 00:00:00").getTime();

var x = setInterval(function() {

    var now = new Date().getTime();

    var distance = countDownDate - now;
    var DAYS = Math.floor(distance / (1000 * 60 * 60 * 24));
    var HOURS = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var MINS = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60 ));
    var SECS = Math.floor((distance % (1000 * 60 )) / 1000);

    document.getElementById("DAYS").innerHTML = DAYS + "DAYS";
    document.getElementById("HOURS").innerHTML = HOURS + "HRS";
    document.getElementById("MINS").innerHTML = MINS + "MINS";
    document.getElementById("SECS").innerHTML = SECS + "SECS";

    if (distance <= 0) {
        clearInterval(x);
        document.getElementById("Countdown-container").innerHTML = "EXPIRED";
    }
    
}, 1000);