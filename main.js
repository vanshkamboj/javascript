function onSignIn(googleUser) {
    
    var profile = googleUser.getBasicProfile();
    $(".g-signin2").css("display","none");
    $(".user_data").css("display","block");

    console.log("ID: " + profile.getId()); 
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());

    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token);
    document.getElementById("name").innerHTML=profile.getName();
    document.getElementById("email").innerHTML=profile.getEmail();
  }