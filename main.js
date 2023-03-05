const form =  document.querySelector("form")
// console.log(btn)
form.addEventListener('submit', submitform)
function submitform(e) {
    e.preventDefault()
    var name =  document.querySelector("#name").value
    var email = document.querySelector("#mail").value
    var subject = document.querySelector("#subject").value
    var message = document.querySelector("#message").value
    var contact = document.querySelector("#contact").value
    var body = 'name:' + " " +name  + '<br/> contact:' + " " + contact + '<br/> email:'+ " " +email + '<br/> subject:' + " " + subject + '<br/> massage:' +message ;
    
    
   Email.send({
        Host : "smtp.elasticemail.com",
        Username : "rohanprajapati3739@gmail.com",
        Password : "5B17939F4837C6755099E06CE84D30FFFF34",
        To : "rohanprajapati3739@gmail.com",
        From : "rohanprajapati3739@gmail.com",
        Subject : subject,
        Body : body
    }).then(
      message => alert("message sent")
    );
    form.reset()
}