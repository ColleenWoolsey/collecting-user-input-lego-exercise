const domBuilder = {
    appendInputForm() {
    let inputForm = `
    <article>
    <fieldset>
    <label for="lego__creator">Creator:</label>
    <input id="lego__creator" name="lego__creator" type="text" autofocus />
    </fieldset>
    <fieldset>
    <label for="lego__name">Name:</label>
    <input id="lego__name" name="lego__name" type="text" autofocus />
    </fieldset>
    <fieldset>
    <label for="lego__shape">Shape:</label>
    <input id="lego__shape" name="lego__shape" type="text" autofocus />
    </fieldset>
    <fieldset id="addSelectHere">
    <label for="lego__color">Choose a color:</label>
    </fieldset>
    <button class="btn lego__save">Save Lego Creation</button>
    </article>`

    let displayContainer = document.querySelector("#display-container");
    displayContainer.innerHTML = inputForm;
    },

    appendSelect () {
    let addSelect = document.createElement("select");
        addSelect.setAttribute("id", "selectContainer");
        addSelect.setAttribute("name", "lego__color");
        addSelect.setAttribute("type", "text");
        document.querySelector("#addSelectHere").appendChild(addSelect);
        console.log(addSelect)
    },

    selectColor() {
        data.getColors()
        .then(colorArray => {
            console.table(colorArray);

        colorArray.forEach(colors => {
            let colorOption = document.createElement("option");
            theColor = colors.colorName;
            console.log(theColor);
            colorOption.setAttribute("value", theColor);
            document.querySelector("#selectContainer").appendChild(colorOption);  
            });           
        });
    }
}