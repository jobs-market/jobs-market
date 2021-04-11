$(document).ready(function(){
    $('.card-slider').slick({
        autoplay:true,
        autoplaySpeed:15000,
        autoplay:true,
        slidesToShow:3,
        slidesToScroll:1,
        prevArrow:".prev-btn",
        nextArrow:".next-btn",

        responsive:[
            {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
            },
            {
                breakpoint: 1000,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3
                }
            },
              {
                breakpoint: 770,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 2
                }
              }
        ]
    });
});


$(document).ready(function(){
    $('.card-slider2').slick({
        autoplay:true,
        autoplaySpeed:20000,
        autoplay:true,
        slidesToShow:4,
        slidesToScroll:1,
        prevArrow:".prev-btn",
        nextArrow:".next-btn",

        responsive:[
          {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
          },
          {
              breakpoint: 1000,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
          },
            {
              breakpoint: 770,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
      ]
    });
});




var firebaseConfig = {
  // aapiKey: "AIzaSyDOxcKGIPTgKmfDW1OBsRdouapblQ6drbY",
  // authDomain: "jobmkt-b4abd.firebaseapp.com",
  // databaseURL: "https://jobmkt-b4abd-default-rtdb.firebaseio.com",
  // projectId: "jobmkt-b4abd",
  // storageBucket: "jobmkt-b4abd.appspot.com",
  // messagingSenderId: "819947548579",
  // appId: "1:819947548579:web:c56de511343fd7d6b73416",
  // measurementId: "G-52B0GY6TJ7"
  // apiKey: "AIzaSyDvV4gibQAu8Y9Xq9CaFDxmMLjBb7tMrjQ",
  // authDomain: "webtry2-9427e.firebaseapp.com",
  // databaseURL: "https://webtry2-9427e-default-rtdb.firebaseio.com",
  // projectId: "webtry2-9427e",
  // storageBucket: "webtry2-9427e.appspot.com",
  // messagingSenderId: "911150563044",
  // appId: "1:911150563044:web:d7aba165af845eeddab6f1",
  // measurementId: "G-RPM7SM1NK2"
  apiKey: "AIzaSyA3f9KoUcztDR2pcW-lydZZQBPueBaN5tI",
  authDomain: "jobsmarketindia-7f1e5.firebaseapp.com",
  projectId: "jobsmarketindia-7f1e5",
  storageBucket: "jobsmarketindia-7f1e5.appspot.com",
  messagingSenderId: "237567515196",
  appId: "1:237567515196:web:59cf6d0c6308ab8940c139",
  measurementId: "G-86FTLT7WLL",
  databaseUrl: "https://jobsmarketindia-7f1e5-default-rtdb.firebaseio.com/",
  
                
};
//  firebase.analytics();
firebase.initializeApp(firebaseConfig);
// console.log(firebase);
var database = firebase.database();

var url = "";

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
      resumeLink: url,
  };
  const companybody ={
      city,pincode
  }

  const id = `${firstName}-${lastName}-${Date.now()}`;
  const id2 = `${Date.now()}`;

  database.ref("Registerers/"+id).set({
      ...body
  });
  // database.ref("Company Database/"+id2).set({
  //     ...companybody
  // });

  alert("Response submitted succesfully!");

  document.querySelector('#Fname').value = null;
  document.querySelector('#Lname').value = null;
  document.querySelector('#address').value = null;
  document.querySelector('#male').checked;
  document.querySelector('#state').value = null;
  document.querySelector('#city').value = null;
  document.querySelector('#pincode').value = null;
  document.querySelector('#phone').value = null;
  document.querySelector('#email').value = null;
}

// const resumeUploadHandler = (e) => {
//     var file = document.querySelector('#resume_pdf').files[0];
//     var storageRef = firebase.storage().ref('resumes/'+file.name);
//     // var path = `resumes/${Math.random().toString(25)}`;
  

//     document.querySelector("body").className = "loading";

//     storageRef.put(file).then(async (snapshot) => {
//         url = await snapshot.ref.getDownloadURL();
//         document.querySelector("body").className = "";
//     });
// }

const resumeUploadHandler = (e) => {
  var storageRef = firebase.storage().ref();
  var path = `resumes/${Math.random().toString(36)}`;
  const file = document.querySelector('#resume_pdf').files[0];

  document.querySelector("body").className = "loading";

  storageRef.child(path).put(file).then(async (snapshot) => {
      url = await snapshot.ref.getDownloadURL(); //will add a url for Resume 
      document.querySelector("body").className = "";
  });
}

document.querySelector('#resume_pdf').addEventListener('change', resumeUploadHandler);
document.querySelector('#submitButton').addEventListener('click', submitHandler);

//TRY !!!!!!!!!!!!!

var url2 = "";

const csubmitHandler = (e) => {
  e.preventDefault();

  const companyname = document.querySelector('#CompanyName').value;
  const companytitle = document.querySelector('#Title').value;
  const description = document.querySelector('#JobDescription').value;
  const qualification = document.querySelector('#MinQualification').value;
  const location = document.querySelector('#Location').value;
  const istype = document.querySelector('#Full').checked;
  const companypin = document.querySelector('#CompanyPincode').value;
  const companyphone = document.querySelector('#CompanyPhone').value;
  const companyanotherphone = document.querySelector('#CompanyAnotherPhone').value;
  const companyemail = document.querySelector('#CompanyEmail').value;
  
  const body = {
    companyname,
    companytitle,
    description,
    qualification,
    location,
    type: istype ? "Full Time" : "Part Time",
    companypin,
    companyphone,
    companyanotherphone,
    companyemail,
    companydocument: url2,
  };
  

  const id = `${companyname}-${companytitle}-${Date.now()}`;
  const id2 = `${Date.now()}`;

  database.ref("Company/"+id).set({
      ...body
  });


  alert("Response submitted succesfully!");

  document.querySelector('#CompanyName').value = null;
  document.querySelector('#Title').value = null;
  document.querySelector('#JobDescription').value = null;
  document.querySelector('#MinQualification').value = null;
  document.querySelector('#Location').value = null;
  document.querySelector('#Full').value = null;
  document.querySelector('#CompanyPincode').value = null;
  document.querySelector('#CompanyPhone').value = null;
  document.querySelector('#CompanyAnotherPhone').value = null;
  document.querySelector('#CompanyEmail').value = null;
}

const cresumeUploadHandler = (e) => {
  var storageRef = firebase.storage().ref();
  var path = `company/${Math.random().toString(36)}`;
  const file = document.querySelector('#document_pdf').files[0];

  document.querySelector("body").className = "loading";

  storageRef.child(path).put(file).then(async (snapshot) => {
      url2 = await snapshot.ref.getDownloadURL(); //will add a url for Resume 
      document.querySelector("body").className = "";
  });
}

document.querySelector('#document_pdf').addEventListener('change', cresumeUploadHandler);
document.querySelector('#companySubmitButton').addEventListener('click', csubmitHandler);
