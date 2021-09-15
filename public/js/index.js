const Offer = {
    data() {
        return {
    "person": {},
   "offers": [
    {
        "id" : 1,
        "name" : "Jane Student",
        "offer" : 100000,
        "bonus" : 9000,
        "company" : "EY",
        "offerDate" : "2021-10-23"
    },
    {
        "id" : 2,
        "name" : "Jordan Student",
        "offer" : 87000,
        "bonus" : 3000,
        "company" : "IU",
        "offerDate" : "2021-09-25"
    }
]
}
},
//calls the function, hooked into the created event, calls anything in a function called created
    created() { 
       console.log("A")
       
        fetch('https://randomuser.me/api/') //immediately returning promise object
       // .then( function(response) {
          //  response.json()
       // } ) directly below is a shortcut of this
        .then(response => response.json()) //returning promise statement
        .then((parsedJson) => { //
          console.log(parsedJson);
          console.log("here")
            this.person = parsedJson.results[0]
        })
        .catch( err => {
        console.error(err)
        })
}
}

Vue.createApp(Offer).mount('#offerApp')