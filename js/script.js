let username=declaration1("username"),
email=declaration1("email"),
password=declaration1("password"),
form=declaration1("form"),
error=declaration2("error"),
failure=declaration2("failure-icon"),
success=declaration2("success-icon");

let input=document.getElementsByTagName("input");
console.log(input)

function declaration1(name1)
{
    return document.getElementById(name1);

}
function declaration2(name2)
{
    return document.getElementsByClassName(name2);

}

function engine(elm,serial,message)
{
    if(elm.value.trim() === "")
    {
        error[serial].innerText=message;
        failure[serial].style.opacity=1;
        success[serial].style.opacity=0;
        elm.style.borderColor="red";
    }
    else
    {
        error[serial].innerText="";
        failure[serial].style.opacity=0;
        success[serial].style.opacity=1;
        elm.style.borderColor="green";
    }
}
form.addEventListener("submit",(e)=>
{
    e.preventDefault();
    engine(username,0,"Username cannot be blank");
    engine(email,1,"Email cannot be blank");
    engine(password,2,"Password cannot be blank");

})





