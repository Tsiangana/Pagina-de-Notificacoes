/* Made by Tsiangana Zau
    Date: 16/01/2024
    Todos direitos autoras reservados */

    let all = document.getElementById('all');
    let numbs = document.getElementById('numbs');

    let sms1 = document.getElementById('sms_one');
    let sms2 = document.getElementById('sms_two');
    let sms3 = document.getElementById('sms_three');

    let val = 3;

    window.onload = function valor() {
        numbs.innerHTML = val;
    }

    all.addEventListener('click', ()=>{
        sms1.style.background = "#fff";
        sms1.style.cursor = "default";

        sms2.style.background = "#fff";
        sms2.style.cursor = "default";

        sms3.style.background = "#fff";
        sms3.style.cursor = "default";

        val = 0;
        numbs.innerHTML = val;
    });

    let id1 = 1;
    sms1.addEventListener('click', ()=>{
        if (id1 == 1) {
            sms1.style.background = "#fff";
            sms1.style.cursor = "default";

            val-=1;
            numbs.innerHTML = val;
            id1 = 0;      
        }
    });

    let id2 = 1;
    sms2.addEventListener('click', ()=>{
        if (id2 == 1) {
            sms2.style.background = "#fff";
            sms2.style.cursor = "default";

            val-=1;
            numbs.innerHTML = val;
            id2 = 0;      
        }
    });

    let id3 = 1;
    sms3.addEventListener('click', ()=>{
        if (id3 == 1) {
            sms3.style.background = "#fff";
            sms3.style.cursor = "default";

            val-=1;
            numbs.innerHTML = val;
            id3 = 0;      
        }
    });

    

    