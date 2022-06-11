var hh = 0;
var mm = 0;
var ss = 0;

var interval;


function start() {

    clearInterval(interval);
    ss = ss + 1;
    if (ss == 60) {
        mm++;
        ss = 0;
    }

    if (mm == 60) {
        hh++;
        mm = 0;
    }

    $(".time").text(hh.toString().padStart(2, "0") + " : " + mm.toString().padStart(2, "0") + " : " + ss.toString().padStart(2, "0"));

    interval = setInterval(start, 1000);
}

function pause(event) {
    clearInterval(interval);

}

function stop() {
    clearInterval(interval);
    ss = 0;
    mm = 0;
    hh = 0;
    $(".time").text(hh.toString().padStart(2, "0") + " : " + mm.toString().padStart(2, "0") + " : " + ss.toString().padStart(2, "0"));
}

$(".start-btn").on('click', start);

$(".pause-btn").on('click', pause);

$(".stop-btn").on('click', stop);