let completeBtn = document.querySelectorAll('.completeBtn');
let qustatus = document.querySelectorAll('.status');



completeBtn.forEach((clicks) => {

    let click = true;

    clicks.addEventListener("click", () => {


        if (click === true) {
            let quest = clicks.closest('.quest');
            let questStatus = quest.querySelector(".status");
            questStatus.textContent = "Status :  Complete";
            click = false;

        } else {

            let quest = clicks.closest('.quest');
            let questStatus = quest.querySelector(".status");
            questStatus.textContent = "Status :  Incomplete"
            click = true;

        }
    })
})

