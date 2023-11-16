import React from "react";
function FetchData(){

    async function getData(){
        let response= await fetch("https://reqres.in/api/users")
        let response1= await response.json();
        let result= response1;
        console.log("data",result)
    }
    return(
        getData()
    )

}
export default FetchData;