const onRegister=()=>{
    const userName=regName.value
    const userAge=regAge.value
    const userPlace=regPlace.value
    const userPassword=regPassword.value
   try {
    if(userName==''||userAge==''||userPlace==''||userPassword==''){
        error.innerHTML="All fields are required"
       }else{
        localStorage.setItem("username",userName)
        localStorage.setItem("password",userPassword)
        window.location='login.html'
       }

   } catch (error) {
   error.innerHTML="Error"
   }
}


const onLogin=()=>{
    const userName=username.value
    const userPassword=password.value

    const StoredName=localStorage.getItem("username")
    const storedPassword=localStorage.getItem("password")


    try {
        if(userName==StoredName&&userPassword==storedPassword){
            window.location="landingPage.html"
          
        }else{
            error.innerHTML="Invalid credentials"
        }
    } catch (error) {
         error.innerHTML="Error"
    }
}