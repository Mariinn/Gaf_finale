
let menubtn = document.querySelector('.menubtn')
let menu = document.querySelector('.menu')
let menuholder = document.querySelector('.menuholder')
let menuotherhalf = document.querySelector('.menuotherhalf')
let regopener = document.querySelector('#regopener')
let registerdivteacher = document.querySelector('.registerdivteacher')
let logindiv = document.querySelector('.logindiv')
let login = document.querySelector('.login')
// menubtn.onclick = function(){
// 		menuotherhalf.style.display = 'block';
// 		menuholder.style.display = 'block';
// 		menu.style.display = 'block';
// }
// menuotherhalf.onclick = function() {
// 	menuholder.style.display = 'none';
// 	alert()
// }
function gotoregchoose(){
	registerdivchoose.style.display = 'block';
	logindiv.style.display = 'none';
	alert()
}
function gotoregpar(){
	registerdivteacher.style.display = 'block';
	logindiv.style.display = 'none';
	alert()
}
function gotoregpteach(){
	registerdivteacher.style.display = 'block';
	logindiv.style.display = 'none';
	alert()
}
function gotomain(){
	main.style.display = 'block';
	logindiv.style.display = 'none';
	alert()
}
regopener.addEventListener('click', gotoregchoose);
regopenert.addEventListener('click', gotoregpar);
regopenerp.addEventListener('click', gotoregpteach);


import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
		import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-analytics.js";
		  // TODO: Add SDKs for Firebase products that you want to use
		  // https://firebase.google.com/docs/web/setup#available-libraries

		  // Your web app's Firebase configuration
		  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
		  const firebaseConfig = {
		    apiKey: "AIzaSyBZkY-uGaSlG2BGD1oWGWkCQfoJYo7Fpv0",
		    authDomain: "gaf-final.firebaseapp.com",
		    databaseURL: "https://gaf-final-default-rtdb.europe-west1.firebasedatabase.app",
		    projectId: "gaf-final",
		    storageBucket: "gaf-final.appspot.com",
		    messagingSenderId: "1016022350146",
		    appId: "1:1016022350146:web:f9fd5746bcea73524af0db",
		    measurementId: "G-G2KDVKFJXL"
		  };

		  // Initialize Firebase
		const app = initializeApp(firebaseConfig);
		const analytics = getAnalytics(app);


        import {getDatabase, ref, get, set, child, update, remove}
        from "https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js"
        

        const db = getDatabase();

        var enterID = document.querySelector("#enterID");
        var enterName = document.querySelector("#enterName");
        var enterAge = document.querySelector("#enterAge");
        var enterPassword = document.querySelector("#enterPassword")
        var findID = document.querySelector("#findID");
        var findName = document.querySelector("#findName");
        var findAge = document.querySelector("#findAge");
        var findPassword = document.querySelector("#findPassword");
      	

        var insertBtn = document.querySelector("#insert");
        var updateBtn = document.querySelector("#update");
        var removeBtn = document.querySelector("#remove");
        var findBtn = document.querySelector("#find");
        var loginBtn = document.querySelector("#login");

        function InsertDataTeacher() {
            set(ref(db, "Teachers/"+ enterID.value),{
                Name: enterName.value,
                Class: enterClass.value,
                Username: enterUsername.value,
                Age: enterAge.value,
                Password: enterPassword.value 
            })
            .then(()=>{
                alert("Data added successfully");
            })
            .catch((error)=>{
                alert(error);
            });
        }
        function InsertDataparent() {
            set(ref(db, "Parents/"+ enterID.value),{
                Name: enterName.value,
                UsernameChild: enterClass.value,
                PasswordChild: enterUsername.value,
                Password: enterPassword.value 
            })
            .then(()=>{
                alert("Data added successfully");
            })
            .catch((error)=>{
                alert(error);
            });
            const dbref = ref(db);

            get(child(dbref, "People/" + findID.value))
            .then((snapshot)=>{
                if(snapshot.exists()){
                    findName.innerHTML = "Name: " + snapshot.val().Name;
                    findAge.innerHTML = "Age: " + snapshot.val().Age;
                } else {
                    alert("No data found");
                }
            })
            .catch((error)=>{
                alert(error)
            })
        }


        function loginusual() {
            const dbref = ref(db);

            get(child(dbref, "People/" + findID.value))
            .then((snapshot)=>{
                if(snapshot.exists()){
                    findName.innerHTML = "Name: " + snapshot.val().Name;
                    findAge.innerHTML = "Age: " + snapshot.val().Age;
                } else {
                    alert("No data found");
                }
            })
            .catch((error)=>{
                alert(error)
            })
            
        }
        function FindData() {
            const dbref = ref(db);

            get(child(dbref, "People/" + findID.value))
            .then((snapshot)=>{
                if(snapshot.exists()){
                    findName.innerHTML = "Name: " + snapshot.val().Name;
                    findAge.innerHTML = "Age: " + snapshot.val().Age;
                } else {
                    alert("No data found");
                }
            })
            .catch((error)=>{
                alert(error)
            })
            
        }

        function UpdateData(){
            update(ref(db, "People/"+ enterID.value),{
                Name: enterName.value,
                Age: enterAge.value
            })
            .then(()=>{
                alert("Data updated successfully");
            })
            .catch((error)=>{
                alert(error);
            });
        }

        function RemoveData(){
            remove(ref(db, "People/"+ enterID.value))
            .then(()=>{
                alert("Data deleted successfully");
            })
            .catch((error)=>{
                alert(error);
            });
        }

        insertBtn.addEventListener('click', InsertData);
        updateBtn.addEventListener('click', UpdateData);
        removeBtn.addEventListener('click', RemoveData);
        findBtn.addEventListener('click', FindData);