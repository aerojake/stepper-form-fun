//Get title elements
const step1Title = document.getElementById("emailTitle");
const step2Title = document.getElementById("passwordTitle");
const step3Title = document.getElementById("updatesTitle");
const step4Title = document.getElementById("reviewTitle");

//Get step elements
const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");
const step4 = document.getElementById("step4");
const thankYou = document.getElementById("thankYou");

//get next buttons for each step
const nextButton1 = document.getElementById("next1");
const nextButton2 = document.getElementById("next2");
const nextButton3 = document.getElementById("next3");
const submitButton = document.getElementById("submit");

//get back buttons for each step
const backButton2 = document.getElementById("back2");
const backButton3 = document.getElementById("back3");
const backButton4 = document.getElementById("back4");

//display for review page
const emailDisplay = document.getElementById("emailDisplay");
const updatesDisplay = document.getElementById("updatesDisplay");

//Step 1 Email event listeners
nextButton1.addEventListener("click", event => {
    showStep2();
});

//Step 2 Password event listeners
nextButton2.addEventListener("click", event => {
    showStep3();
});

backButton2.addEventListener("click", event => {
    showStep1();
});


//Step 3 updates event listeners
nextButton3.addEventListener("click", event => {
    showStep4();
});

backButton3.addEventListener("click", event => {
    showStep2();
});


//Step 4 Review/submit event listeners
backButton4.addEventListener("click", event => {
    showStep3();
});

submitButton.addEventListener("click", event => {
    submit();
});


//show step 1
function showStep1() {
    step1.removeAttribute("hidden");
    step2.setAttribute("hidden", true);
    step1Title.classList.add("focus");
    step2Title.classList.remove("focus");

}

//show step 2
function showStep2() {
    step1.setAttribute("hidden", true);
    step2.removeAttribute("hidden");
    step3.setAttribute("hidden", true);
    step2Title.classList.add("focus");
    step1Title.classList.remove("focus");
    step3Title.classList.remove("focus");

}

//show step 3
function showStep3() {
    step2.setAttribute("hidden", true);
    step3.removeAttribute("hidden");
    step4.setAttribute("hidden", true);
    step3Title.classList.add("focus");
    step2Title.classList.remove("focus");
    step4Title.classList.remove("focus");

}
//show step 4
function showStep4() {
    step3.setAttribute("hidden", true);
    step4.removeAttribute("hidden");
    step4Title.classList.add("focus");
    step3Title.classList.remove("focus");

    let userEmail = document.getElementById("emailAddress").value;
    let userUpdates = document.getElementById("updatesForm").elements["updates"].value;

    emailDisplay.innerHTML = "<strong>Email:  </strong>" + userEmail;
    updatesDisplay.innerHTML = "<strong>Updates:  </strong>" + userUpdates;

}

function submit() {
    step4Title.classList.remove("focus");
    step4.setAttribute("hidden", true);
    thankYou.removeAttribute("hidden");
}
