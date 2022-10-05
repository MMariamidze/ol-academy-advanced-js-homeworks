console.log("Start");

function displayError(errorMessage) {
    console.error(new Error(errorMessage));
  }


const usersDB = {
  "user1@hw.js": [{ title: "video1" }, { title: "video2" }],
  "user2@hw.js": [{ genre: "genre1" }, { genre: "genre1" }],
  "user3@hw.js": [],
};

function loginUser(email, password) {

    return new Promise((callback,errorCallback)=>{

        if (Object.keys(usersDB).includes(email)){

            setTimeout(() => {
    
                console.log("Now we have the data of user:", email);
                callback({userEmail: email});},3000);
        }
    
        else{
           setTimeout(() => {
    
            errorCallback("User not found!")
            
           }, 300);}

    })
}


function getUserVideos(email){

    return new Promise((callback,errorCallback)=>{

        if (usersDB[email].length){
            setTimeout(() => {
    
                callback(usersDB[email]);},200)
        }
        else {
            setTimeout(() => {
    
                errorCallback("Videos not found!")
                
            }, 200);}
    })
  }
   

function videoDetails(video){

    return new Promise((callback , errorCallback)=>{

        if (video?.title)

    setTimeout(() => {

        callback(video.title);},200)
    else {

        setTimeout(() => {

            errorCallback("Video Title not found!")
            
        }, 200);}
    })

    }


    const getPassedUsersFirstVideoTitle = (user) =>{

    loginUser(user,1234)
       .then((user)=>console.log("user: ",user))
       .then((videos)=>getUserVideos(videos.Email))
       .then((videos)=>videoDetails(videos[0]))
       .then((title)=>console.log(title))
       .catch((Erorr)=>displayError(Erorr))

    }

    getPassedUsersFirstVideoTitle("user2@hw.js");
    
        
console.log("Finish");