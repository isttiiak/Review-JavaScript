const URL = "https://api.thecatapi.com/v1/images/search?limit=10";

const getFacts = async () => {
    console.log("getting data....")
    let response = await fetch(URL);
    console.log(response); // returns the JSON object format (not readable0)

    let data = await response.json(); // json() returns a second promise so we use await.
    console.log(data);


}