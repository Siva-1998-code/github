



function validation() {
    let name = document.getElementById("name").value;
    // let num = document.getElementById("number").value;
    let mail = document.getElementById("mail").value;
    let pass = document.getElementById("pass").value;
    let cPass = document.getElementById("c-pass").value;
    let txt6 ="Enter Confirm Password Please";
    

    //NAME - VALIDATE
    if (name ==""){
        document.getElementById("name").style.border = "3px solid red";
        document.getElementById("alert1").innerHTML= "Enter Name Please";
    }
    else if(!name==/^[A-Z][a-z][A-Za-z]+$/.test(name)){
        document.getElementById("name").style.border = "3px solid red";
        document.getElementById("alert1").innerHTML = "Enter Correct Input Please";
    }
    else{
        document.getElementById("name").style.border = "3px solid rgb(57, 245, 57)";
        document.getElementById("alert1").innerHTML= " ";
    }

    //NUMBER - VALIDATE

    // if (num ==""){
    //     document.getElementById("number").style.border = "3px solid red";
    //     document.getElementById("alert2").innerHTML= "Enter Number Please";
    // }
    // else if(num==/^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/.test(num)){
    //     document.getElementById("number").style.border = "3px solid red";
    //     document.getElementById("alert2").innerHTML = "Enter Correct Input Please";
    // }
    // else{
    //     document.getElementById("number").style.border = "3px solid rgb(57, 245, 57)";
    //     document.getElementById("alert2").innerHTML= " ";
    // }

    //MAIL - VALIDATE

    if (mail ==""){
        document.getElementById("mail").style.border = "3px solid red";
        document.getElementById("alert3").innerHTML= "Enter mail Please";
    }
    else if(mail==/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(mail)    ){
        document.getElementById("mail").style.border = "3px solid red";
        document.getElementById("alert3").innerHTML = "Enter Correct Input Please";
    }
    else{
        document.getElementById("mail").style.border = "3px solid rgb(57, 245, 57)";
        document.getElementById("alert3").innerHTML= " ";
    }

    //PASSWORD - VALIDATE

    if (pass ==""){
        document.getElementById("pass").style.border = "3px solid red";
        document.getElementById("alert4").innerHTML= "Enter Password Please";
    }
    else if(!pass==/^([a-z0-9!@#$%^&*](?=.[!@#$%^&*]))$/.test(pass)){
        document.getElementById("pass").style.border = "3px solid red";
        document.getElementById("alert4").innerHTML = "Enter Correct Input Please";
    }
    else{
        document.getElementById("pass").style.border = "3px solid rgb(57, 245, 57)";
        document.getElementById("alert4").innerHTML= " ";
    }

    //CONFIRM PASSWORD - VALIDATE

    if (cPass ==""){
        document.getElementById("c-pass").style.border = "3px solid red";
        document.getElementById("alert5").innerHTML= "Enter Password Please";
    }
    else if(pass!=cPass){
        document.getElementById("c-pass").style.border = "3px solid red";
        document.getElementById("alert5").innerHTML = "Enter Correct Input Please";
    }
    else{
        document.getElementById("c-pass").style.border = "3px solid rgb(57, 245, 57)";
        document.getElementById("alert5").innerHTML= " ";
    }
}
