const form = document.getElementById("form");
const file = document.getElementById("file");
const fileerror = document.getElementById("fi-error");


var a=document.getElementById('fname');
var a1=document.getElementById('n-error');

function validfname(){
       if(a.value===""){
        a1.innerHTML="Name can't be empty";
        a.style.border="2px solid red"; 
        return false;
    }
    else if(a.value.length<3 ||a.value.length>15){
        a1.innerHTML="character must contain minimum 3 to maximum 15";
        a.style.border="2px solid red";
        return false;
    }
    else{
        a1.innerHTML="";
        a.style.border="2px solid green";
        return true;
    }
}

    let b=document.getElementById('email');
    let b1=document.getElementById('e-error');
function validemail(){
        if(b.value===""){
        b1.innerHTML="Email can't be empty";
        b.style.border="2px solid red";
        return false;
    }
    else if(!b.value.match(/^[a-z\._\-0-9]*[@][a-z]*[\.][a-z]{2,4}/)){
        b1.innerHTML="Enter valid email";
        b.style.border="2px solid red";
        return false;
    }
    else{
        b1.innerHTML="";
        b.style.border="2px solid green";
        return true;
    }
    
}

    let c=document.getElementById("password");
    let c1=document.getElementById("p-error");
function validpassword(){
       if(c.value===""){
        c1.innerHTML="Password can't be empty";
        c.style.border="2px solid red";
        return false;
    }
    else if(!c.value.match(/^[A-Z]{1}[a-z]{2,10}[!@#$&_]{1}[0-9]{1,4}/) || c.value.length<8){
        c1.innerHTML="Invalid Password eg:Krish#3";
        c.style.border="2px solid red";
        return false;
    }
    else{
        c1.innerHTML="";
        c.style.border="2px solid green";
        return true;
    }
}

    let d=document.getElementById("number");
    let d1=document.getElementById("num-error");
function validmob(){
      if(d.value==""){
        d1.innerHTML="Number can't be empty";
        d.style.border="2px solid red";
        return false;
    }
    else if(!d.value.match(/^[0-9]{10}/) || d.value.length<10 || d.value.length>10){
        d1.innerHTML="Invalid Number";
        d.style.border="2px solid red";
        return false;
    }
    else{
        d1.innerHTML="";
        d.style.border="2px solid green";
        return true;
    }
}

    let e=document.getElementById("file");
    let e1=document.getElementById("file-error");
function validfile(){
        if(e.value===""){
        e1.innerHTML="Select a File";
        e.style.border="2px solid red";
        return false;
    }
    
    else{
        e1.innerHTML="";
        e.style.border="2px solid green";
        return true;
    }
}
var f=document.getElementById('f_id');
var f1=document.getElementById('id-error');

function valid_id(){
       if(f.value===""){
        f1.innerHTML="Enter ID";
        f.style.border="2px solid red"; 
        return false;
    }
    else if(!f.value.match(/^[A-Z]{4}[0-9]{4}/) || f.value.length<8){
        f1.innerHTML="Enter valid ID eg:ABCD1234";
        f.style.border="2px solid red";
        return false;
    }
    else{
        f1.innerHTML="";
        f.style.border="2px solid green";
        return true;
    }
}


form.addEventListener('submit',e=>{
    e.preventDefault();
    checkinput();
 })

 function checkinput() {
    const fid = f.value.trim();
    const fnamevalue = a.value.trim();
    const emailvalue = b.value.trim();
    const mobilevalue = d.value.trim();
    const filevalue = e.value.trim();
    

        
        document.write("Employee ID:"+" "+fid+ "<br>");
        document.write("Employee Name:"+" "+fnamevalue+ "<br>");
        document.write("Email id:"+" " +emailvalue+ "<br>");
        document.write("Mobile Number:"+" " +mobilevalue + "<br>");
        document.write("File:"+" " + filevalue + "<br>");
    
 }
