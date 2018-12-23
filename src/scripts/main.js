domBuilder.appendInputForm();
domBuilder.appendSelect();
domBuilder.selectColor();

let legoBtn = document.querySelector(".lego__save");
// console.log(legoBtn);
legoBtn.addEventListener("click", eventListeners.handleFormSubmission);