const eventListeners = {

    "name": "Add click to Save Btn",

    handleFormSubmission () {
    const creator = document.querySelector("#lego__creator").value;
    const name = document.querySelector("#lego__name").value;
    const color = document.querySelector("#lego__color").value;
    const shape = document.querySelector("#lego__shape").value;
    
    const legoObject = {
        creatorName: creator,
        legoName: name,
        legoColor: color,
        legoShape: shape
        }
    console.log(legoObject)
    // Post to API and pass legoToSave
    data.postLego(legoObject);
  },
  
};


//let legoBtn = document.querySelector(".lego__save");
    //legoBtn.addEventListener("click", eventListeners.handleFormSubmission);

   // document.querySelector(".lego_save").addEventListener("click", event => {
    
    //console.log("legoObject", legoObject);
    //data.postColor();
    //This code should be the last logic inside the event listener.
//     data.postLego(legoToSave)
    
// };
// Some starter code
// document.querySelector(fillInTheBlank).addEventListener("click", event => {
//     const creator = document.querySelector(".lego__creator").value

//     // Once you have collected all the values, build your data structure
//     const legoToSave = {
//         property: value,
//         property: value,
//         property: value,
//         property: value
//     }
// })
