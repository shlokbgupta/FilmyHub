function forgotPass(){
    const email = document.getElementById("emaill").value
    firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
            alert("Reset link sent Successfully")
        })
        .catch((error) => {
            document.getElementById("error").innerHTML = error.message
        });
}