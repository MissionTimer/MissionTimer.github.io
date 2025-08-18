console.log('Happy developing ✨');


const start_date = new Date('08/12/2025');
const last_date = new Date('06/02/2026');

// constants: https://drive.google.com/file/d/1KOf-CvOCKI8Q8EebEiJZOdhZ3wtnp18c/view

const holidays = [ '09/01/2025',
    '11/11/2025',
    '11/24/2025',
    '11/25/2025',
    '11/26/2025',
    '11/27/2025',
    '11/28/2025',
    '12/22/2025',
    '12/23/2025',
    '12/24/2025',
    '12/25/2025',
    '12/26/2025',
    '12/29/2025',
    '12/30/2025',
    '12/31/2025',
    '1/1/2026',
    '1/2/2026',
    '1/3/2026',
    '1/5/2026'

        ['11/24/2025', '11/28/2025'],
    ['12/22/2025', '01/05/2026'],

    '1/19/2025',
    '2/13/2025',
    '2/16/2025',
    '3/13/2025',
    '3/16/2025',
    '3/17/2025',
    '3/18/2025',
    '3/19/2025',
    '3/20/2025',

    ['03/16/2025', '03/20/2025'],

    '04/3/2025',
    '05/25/2025'
];


const total_day_time = 24060000 // ms
const total_days = 195 // days
const total_time_year = total_day_time * total_days // ms

const debugging = false;
var day_start = new Date()
day_start.setHours(8, 30, 0)
const day_end = new Date().setHours(15, 11, 0)

var _init_date = new Date().getDate()

function getBusinessDatesCount(startDate, endDate) {
    let count = 0;
    var curDate = new Date(startDate.getTime());
    if (curDate.getDate() === endDate.getDate()) {
        return 0;
    }
    else {
        curDate.setHours(8, 30, 0, 0);
    }
    while (curDate.getTime() <= endDate.getTime()) {
        let dayOfWeek = curDate.getDay();
        var _day = curDate.toLocaleDateString();
        if ((dayOfWeek !== 0 && dayOfWeek !== 6 && !(holidays.includes(_day)))) count++;
        curDate.setDate(curDate.getDate() + 1);
    }
    return count;
}

function isWeekend(date) {
    if (date.getDay() !== 0 && date.getDay() !== 6) { return false; }
    return true;
}

function isSchoolHours(date) {
    if ((date.getHours() >= 15 && date.getMinutes() >= 11) || (date.getHours() <= 8 && date.getHours() < 30)) { return true; }

    return false;

}

function convertTime(time) {
    const ms_per_second = 1000;
    const ms_per_minute = 60000; // 1000 * 60
    const ms_per_hour = 3600000; // 60000 * 60
    const ms_per_day = 86400000; // 3600000 * 24

    const d = (time / ms_per_day) | 0;
    const h = ((time % ms_per_day) / ms_per_hour) | 0;
    const m = ((time % ms_per_hour) / ms_per_minute) | 0;
    const s = ((time % ms_per_minute) / ms_per_second) | 0;
    const ms = time % ms_per_second;

    return [d, h, m, s, ms]
}

function schoolTomorrow(date) {
    if (date.getHours() <= 8 && date.getHours() >= 0) { return false; }
    return true
}

function timeTillEndOfDay(date) {
    if (isWeekend(date)) {
        return 0;
    }
    let end_of_day = new Date();
    end_of_day.setHours(15, 19, 0, 0);
    return end_of_day.getTime() - date.getTime();

}

var title_changes = false
function change_title() {
    title_changes = !(title_changes)
}

for (let i = 0; i < holidays.length; i++) {
    // holidays[i] = new Date(holidays[i]);
    console.log("HOLIDAY INIT! ")
}

function findNextSchoolDate(day) {
    let curDate = new Date(day.getTime());
    let end_of_day = new Date();
    end_of_day.setHours(15, 11, 0);
    if (curDate.getTime() >= end_of_day.getTime()) {
        curDate.setDate(curDate.getDate() + 1)
    }
    while (curDate.getTime() <= last_date.getTime()) {
        let dayOfWeek = curDate.getDay();
        var _day = curDate.toLocaleDateString();
        if ((dayOfWeek !== 0 && dayOfWeek !== 6 && !(holidays.includes(_day)))) {
            return curDate;
        }
        curDate.setDate(curDate.getDate() + 1);
    }

}

function period(time_local) {
    let phrase = ""
    let timeToNext = 0
    next_period = new Date()
    if (time_local < "08:30:00" || time_local >= "15:19:00" || Weekend) {
        next_school_day = findNextSchoolDate(today)
        next_school_day.setHours(8, 30, 0)
        timeToNext = next_school_day.getTime() - today.getTime()
        phrase = "SCHOOL'S OUT! ";
    }
    else if (time_local < "09:22:00" && time_local >= "08:30:00") {
        phrase = "FIRST PERIOD! ";
        next_period.setHours(9, 22, 0)
        timeToNext = next_period.getTime() - today.getTime()
    }
    else if ((time_local < "09:28:00" && time_local >= "09:22:00") ||
        (time_local < "10:31:00" && time_local >= "10:25:00") ||
        (time_local < "11:48:00" && time_local >= "11:42:00") ||
        (time_local < "13:21:00" && time_local > "13:15:00") ||
        (time_local < "14:19:00" && time_local >= "14:13:00")) {
        hours = [[[9, 22, 0], [9, 28, 0]], [[10, 25, 0], [10, 31, 0]], [[11, 42, 0], [11, 48, 0]], [[13, 15, 0], [13, 21, 0]], [[14, 13, 0], [14, 19, 0]]]
        time_delta = [0, 0, 0, 0, 0]
        phrase = "PASSING PERIOD! ";
        for (i = 0; i < 4; i++) {
            time_delta[i] = [next_period.setHours(hours[i][0][0], hours[i][0][1], hours[i][0][2]) - today.getTime(), i]
        }
        time_delta.sort()
        next_period.setHours(hours[time_delta[-1][-1]])
        timeToNext = next_period.getTime() - today.getTime();


    }

    else if ((time_local < "10:20:00" && time_local >= "09:28:00")) {
        phrase = "SECOND PERIOD! "
        next_period.setHours(10, 20, 0)
        timeToNext = next_period.getTime() - today.getTime()
    }

    else if ((time_local < "10:25:20" && time_local >= "10:20:00")) {
        phrase = "BREAK! ";
        next_period.setHours(10, 20, 0);
        timeToNext = next_period.getTime() - today.getTime();
    }

    else if ((time_local < "10:50:00" && time_local >= "10:31:00")) {
        phrase = "READ! ";
        next_period.setHours(10, 50, 0);
        timeToNext = next_period.getTime() - today.getTime();
    }

    else if ((time_local < "11:42:00" && time_local >= "10:50:00")) {
        phrase = "THIRD PERIOD! ";
        next_period.setHours(11, 42, 0);
        timeToNext = next_period.getTime() - today.getTime();
    }

    else if ((time_local < "12:40:00" && time_local >= "11:48:00")) {
        phrase = "FOURTH PERIOD! ";
        next_period.setHours(12, 40, 0);
        timeToNext = next_period.getTime() - today.getTime();
    }

    else if ((time_local < "13:15:00" && time_local >= "12:40:00")) {
        phrase = "LUNCH! "
        next_period.setHours(13, 15, 0);
        timeToNext = next_period.getTime() - today.getTime();
    }

    else if ((time_local < "14:13:00" && time_local >= "13:21:00")) {
        phrase = "FIFTH PERIOD! ";
        next_period.setHours(14, 13, 0);
        timeToNext = next_period.getTime() - today.getTime();
    }

    else if ((time_local < "13:11:00" && time_local >= "14:19:00")) {
        phrase = "SIXTH PERIOD! ";
        next_period.setHours(15, 11, 0);
        timeToNext = next_period.getTime() - today.getTime();
    }
    if (today.getTime() < start_date.getTime()) {
        phrase = "SCHOOL'S OUT! "
        timeToNext = day_start.getTime() - today.getTime();
    }
    return [phrase, timeToNext]

}

var arr = [0, 0, 0, 0, 0]
function time_converter(time, arr) {
    arr[4] = time % 1000; // ms
    time = (time / 1000) | 0;
    arr[3] = time % 60; // s
    time = (time / 60) | 0;
    arr[2] = time % 60; // m
    time = (time / 60) | 0;
    arr[1] = time % 24; // h
    arr[0] = (time / 24) | 0; // d
}

today = new Date()

if ((today < start_date || today > last_date) && !(debugging)) { //debugging set to True
    var x = setInterval(function()
    {
        today = new Date()
        times_to_next = period(today)
        time_converter(times_to_next[1], arr)
        document.getElementById("TIMER").innerHTML = "YOU ARE OUT OF SCHOOL RIGHT NOW!"; // if there is no school
        document.getElementById("next_class").innerHTML =
            ((arr[0] || "") + ((arr[0] && "d ") || "")) +
            (((arr[1] || (arr[1] || "")) && ((arr[1] || arr[0]) || "")) + ((((arr[1] && "h ")) || "") || ((arr[0] && "h ") || ""))) + //       ((arr[1] || (arr[1] && (arr[0] || "")) || "") + ((((arr[1] && "h ")) || "") && ((arr[0] && "h ") || "")))
            (((arr[2] || (arr[2] || "")) && (((arr[2] || arr[1]) || "") || ((arr[2] || arr[1]) || ""))) + (((arr[2] && "m ") || "") || ((arr[1] && "m ") || "") || ((arr[0] && "m ") || ""))) + // (((arr[2] || "") || ())
            arr[3] + "s " + (arr[4] || "") +
            ((arr[4] && "ms ") || "");
        document.getElementById("schedule").innerHTML = times_to_next[0];

        if (title_changes) {
            document.getElementById("title1").innerHTML = ((arr[0] || "") + ((arr[0] && "d ") || "")) +
                (((arr[1] && (arr[1] || "")) && ((arr[1] || arr[0]) || "")) + ((((arr[1] && "h ")) || "") || ((arr[0] && "h ") || ""))) + //       ((arr[1] || (arr[1] && (arr[0] || "")) || "") + ((((arr[1] && "h ")) || "") && ((arr[0] && "h ") || "")))
                (((arr[2] && (arr[2] || "")) && (((arr[2] || arr[1]) || "") || ((arr[2] || arr[1]) || ""))) + (((arr[2] && "m ") || "") || ((arr[1] && "m ") || "") || ((arr[0] && "m ") || ""))) + // (((arr[2] || "") || ())
                arr[3] + "s " + (arr[4] || "") +
                ((arr[4] && "ms ") || "");;
        }
        else if (!(title_changes) && (title_changes !== prev_title_change)) {
            document.getElementById("title1").innerHTML = "MISSION (MSJHS) TIMER ";
        }
        var prev_title_change = title_changes

    }, 100)

}

else { // else there is school
    const day_time = day_end - day_start; // roughly ~ 349 minutes in the past
    var today = new Date();
    var Weekend = isWeekend(today);
    var notSchoolHours = isSchoolHours(today);
    var days_left = getBusinessDatesCount(today, last_date);
    var time_left = days_left - days_left * day_time + timeTillEndOfDay(today);
    var count = 0;
    var total_time = 0;
    var x = setInterval(function() {
        z = performance.now()
        if (debugging) {today.setTime(today.getTime() + 333);}
        else {today = new Date(); }

        notSchoolHours = isSchoolHours(today);
        if (today.getDate() !== _init_date) {
            _init_date = today.getDate();
        }
        time_left = days_left * day_time + timeTillEndOfDay(today);
        time_left_total_percent = Math.floor(((1 - (time_left/total_time_year)) * 100000)) / 1000
        // let convertedTime = convertTime(time_left);
        time_converter(time_left, arr)
        var time = arr[0] + 'd ' + arr[1] + "h " + arr[2] + "m " + arr[3] + "s " + arr[4] + 'ms ';
        document.getElementById("TIMER").innerHTML = time + ', ' + time_left_total_percent + '% ';
        count += 1
        if (title_changes) {
            document.getElementById("title1").innerHTML = time;
        }
        else if (!(title_changes) && (title_changes !== prev_title_change)) {
            document.getElementById("title1").innerHTML = "MISSION (MSJHS) TIMER ";
        }

        times_to_next = period(today.toTimeString());
        time_converter(times_to_next[1], arr)
        document.getElementById("next_class").innerHTML =
            ((arr[0] || "") + ((arr[0] && "d ") || "")) +
            (((arr[1] && (arr[1] || "")) && ((arr[1] || arr[0]) || ""))  + ((((arr[1] && "h ")) || "") || ((arr[0] && "h ") || ""))) + //       ((arr[1] || (arr[1] && (arr[0] || "")) || "") + ((((arr[1] && "h ")) || "") && ((arr[0] && "h ") || "")))
            (((arr[2] && (arr[2] || "")) && (((arr[2] || arr[1]) || "") || ((arr[2] || arr[1]) || ""))) + (((arr[2] && "m ") || "") || ((arr[1] && "m ") || "") || ((arr[0] && "m ") || ""))) + // (((arr[2] || "") || ())
            arr[3] + "s " + (arr[4] || "") +
            ((arr[4] && "ms ") || "");
        document.getElementById("schedule").innerHTML = times_to_next[0];


        if (count % 2000 === 0) {
            console.log(total_time / count);
            console.log(total_time)
        }
        y = performance.now()
        total_time += (y - z)
        var prev_title_change = title_changes
    }, 333)


}
