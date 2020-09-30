Backendless.initApp('ED809D7D-16B1-42CB-FF24-A1AD46E17F00', '904A446C-A661-5933-FF9D-101745BC5700', 'v1');

//Contact Form
function myFunction() {

    var name = document.getElementsByName("name")[0].value;
    var phone = document.getElementsByName("phone")[0].value;
    var email = document.getElementsByName("email")[0].value;
    var message = document.getElementsByName("message")[0].value;
    
    var text = (name+"\n"+phone+"\n"+email+"\n"+message);
    var bodyParts = new Bodyparts();
    bodyParts.textmessage = text;
    
    Backendless.Messaging.sendEmail("Hola Kaleidoscopios", bodyParts, ["hola@kaleidoscopios-ctf.com"]);
    
    document.getElementById("contactForm").reset();
}