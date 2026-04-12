var john=true;
// function showNextUser(){
//     if(john==true){
//         document.getElementById('userName').innerHTML="Jane Doe";
//         document.getElementById('designation').innerHTML="Interior Designer";
//         john=false;
//     }
//     else{
//         document.getElementById('userName').innerHTML="John Doe";
//         document.getElementById('designation').innerHTML="Architect & Engineer";
//         john =true;
//     }
// }
function randomUser(){
    fetch("https://randomuser.me/api/")
        fetch("https://randomuser.me/api/")
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            const fullName = user.name.first + " " + user.name.last;
            const gender = user.gender;
            const image = user.picture.medium;
            document.getElementById('userName').innerHTML=fullName;
            let designation;
            if (gender === "male") {
                designation = user.location.city;
            } else {
                designation = user.location.state;
            }
            document.getElementById("designation").innerHTML = designation;
            document.querySelector(".card img").src = image;
        })
        .catch(error => {
            console.log("Error:", error);
        });
    //https://randomuser.me/api call this api
    //show userName, designation in HTML
    //If user is male show John Doe Image Otherwise show Jane Doe Image
    // Then show actual img come from api
}