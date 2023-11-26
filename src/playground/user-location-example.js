//Early May
const user = {
    name: "Wags", 
    age: 67,
    location : "Chicago" //string with length >0 is a truthy value
}

function getLocation(location) {
    if(location)
    {
        return <p>Location: {location}</p>;
    }

}

// var userName = 'Morgan'
// var userAge = 27
// var userLocation = "Florida"
//user brackets to reference variables
// if one of my expressions is underfined it doesnt show up
// const templateTwo = (
//     <div>
//         <h1>{user.name ? user.name : 'Anonymous'}</h1>
//         {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//         {getLocation(user.location)} 
//     </div>
// );
