const data = {
    postLego (legoObject) {
        fetch("http://localhost:8088/legos", {
            method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(legoObject)
        });
    },

    getColors () {
        return fetch("http://localhost:8088/colors")
            .then(response => response.json())
        },
  
    getColorId (colorId) {
        fetch(`http://localhost:8088/colors/${colorId}`, {
            method: "GET",
        headers: {
            "Content-Type": "application/json"
            }
        });        
    },

    queryLegos(userInput) {
        return fetch(`http://localhost:8088/resources?q=${userInput}`)
        .then(response => response.json());
    },

    deleteLego (legoId) {
        fetch(`http://localhost:8088/legos/${legoId}`, {
            method: "DELETE",
        headers: {
            "Content-Type": "application/json"
            }
        });
    }
}
      //need to use backtick with a var instead of double quotes
    


data.postLego();
data.getColors();
//data.queryLegos();
//data.deleteLego(2); 
