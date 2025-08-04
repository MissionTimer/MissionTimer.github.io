/*
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

 */

let msjhs_calendar = document.getElementById("calendar");
let real_calendar = new FullCalendar.Calendar(msjhs_calendar, {
    initialView: 'dayGridMonth',
    headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: "dayGridMonth"
    },
    events: [
        {
            id: 'first_day',
            title: "First Day! ",
            start: "2025-08-12",
            description: "First day of school. "
        },
        {
            id: 'labor_day',
            title: "Labor Day! ",
            start: "2025-09-01",
            description: "Labor day---celebrating the hard work of Americans. MURICA! "
        },
        {
            id: 'verterans_day',
            title: "Veterans' Day! ",
            start: "2025-11-11",
            description: "Veteran's day---celebrating the veterans of America! "
        },
        {
            id: 'thanks_giving',
            title: "Thanksgiving! BREAK",
            start: "2025-11-24",
            end: "2025-11-29",
            description: "THANKSGIVING BOCK BOCK BOCK TURKEY TURKEY TURKEY! "
        },
        {
            id: 'winter_break',
            title: "WINTER! BREAK",
            start: "2025-12-22",
            end: "2026-01-06",
            description: "YUMMY YUMMY YUMMY WINTER CHRISTMAS NEW YEARS YAY!!! "
        },
        {
            id: 'mlk_day',
            title: "MLK DAY",
            start: "2026-01-19",
            description: "Where we celebrate MLK Junior, one of our nation's greatest heroes who led the charge against the discrimination of Americans. (Civil Rights) ",
            url: "https://en.wikipedia.org/wiki/Martin_Luther_King_Jr."
        },
        {
            id: 'non_school_day_1_uno',
            title: "Non-School Day",
            start: "2026-02-13",
            description: "Yeah, non-school day idk. Free day, though. "
        },
        {
            id: 'presidents_day',
            title: "Presidents' Day",
            start: "2026-02-16",
            description: "Where we celebrate our greatest presidents, and look to the future of presidency. "
        },
        {
            id: 'non_school_day_2_dos',
            title: "Non-School Day 2: Electric Boogooloo idk spelling",
            start: "2026-03-13",
            description: "Yeah idk, another non-school day"
        },
        {
            id: 'spring_break',
            title: "SPRING! BREAK",
            start: "2026-03-16",
            end: "2026-03-21",
            description: "SPRING BREAK TAKE A BREAK GUYS YA'LL (or is it Y'all idk)"
        },
        {
            id: 'non_school_day_3_tres',
            title: "IDK THE THIRD NON-SCHOOL DAY",
            start: "2026-04-03",
            description: "Another non-school day. Sleep well YOU ALL. APRIL"
        },
        {
            id: 'memorial_day',
            title: "Where we remember our nation's greatest heroes, and the people who served us. Remember. ",
            start: "2026-05-25",
            description: "Memorial Day"
        },
        {
            id: 'last_day',
            start: "2026-06-02",
            title: "LAST DAY! ",
            description: "LAST DAY OF SCHOOL Y'ALL YA'LL YOUSE? HAVE FUN@ "
        }



    ]

});

real_calendar.render();

console.log("HELLO WORLD! ")