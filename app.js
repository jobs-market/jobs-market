var firebaseConfig = {
    apiKey: "AIzaSyA3f9KoUcztDR2pcW-lydZZQBPueBaN5tI",
    authDomain: "jobsmarketindia-7f1e5.firebaseapp.com",
    projectId: "jobsmarketindia-7f1e5",
    storageBucket: "jobsmarketindia-7f1e5.appspot.com",
    messagingSenderId: "237567515196",
    appId: "1:237567515196:web:59cf6d0c6308ab8940c139",
    measurementId: "G-86FTLT7WLL",
    databaseUrl: "https://jobsmarketindia-7f1e5-default-rtdb.firebaseio.com/",
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();

const submitHandler = (e) => {
    e.preventDefault();

    const firstName = document.querySelector('#Fname').value;
    const lastName = document.querySelector('#Lname').value;
    const address = document.querySelector('#address').value;
    const isMale = document.querySelector('#male').checked;
    const state = document.querySelector('#state').value;
    const city = document.querySelector('#city').value;
    const pincode = document.querySelector('#pincode').value;
    const mobile = document.querySelector('#phone').value;
    const email = document.querySelector('#email').value;
    const resumeLink = document.querySelector('#resumeLink').value;
    
    const body = {
        firstName,
        lastName,
        address,
        gender: isMale ? "Male" : "Female",
        state,
        city,
        pincode,
        mobile,
        email,
        resumeLink,
    };

    const id = `${firstName}-${lastName}-${Date.now()}`;

    database.ref(id).set({
        ...body
    });

    // document.querySelector('#Fname').value = null;
    // document.querySelector('#Lname').value = null;
    // document.querySelector('#address').value = null;
    // document.querySelector('#male').checked;
    // document.querySelector('#state').value = null;
    // document.querySelector('#city').value = null;
    // document.querySelector('#pincode').value = null;
    // document.querySelector('#phone').value = null;
    // document.querySelector('#email').value = null;
    // document.querySelector('#resumeLink').value = null;
}

document.querySelector('#submitButton').addEventListener('click', submitHandler);

