let completeBtn = document.querySelectorAll('.completeBtn');
let qustatus = document.querySelectorAll('.status');
let summaryBoard = document.querySelector('#summary');
let completeAllbtn = document.querySelector("#completeAll");


let count = 0;


completeAllbtn.addEventListener("click", () => {

    count = 3;
    summaryBoard.textContent = count;

    completeBtn.forEach((clicks) => {

        let quest = clicks.closest('.quest');
        let questStatus = quest.querySelector(".status");
        questStatus.textContent = "Status :  Complete";



    })

})


completeBtn.forEach((clicks) => {


    let quest = clicks.closest('.quest');
    let questStatus = quest.querySelector(".status");

    clicks.addEventListener("click", () => {



        if (questStatus.textContent === "Status :  Complete") {

            count--;
            summaryBoard.textContent = count;

        } else {


            count++;
            summaryBoard.textContent = count;


        }

        if (questStatus.textContent === "Status :  Complete") {
            questStatus.textContent = "Status :  Incomplete"
        } else {
            questStatus.textContent = "Status :  Complete"
        }


    })
})

