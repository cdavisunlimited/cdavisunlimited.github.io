function $(elem) {return document.getElementById(elem);} //simple id reference

number_messages = 0;
var last_id     = "";

function check_messages() { //check for messages from iframe
    if (location.hash != last_id) {
        last_id = location.hash;
        number_messages++;
        last_id = last_id.replace("_"," ");
        last_id = last_id.substr(1);
        last_id = last_id.substr(0,last_id.indexOf("&"));
        var message_color;
        var extra_text;
        if(last_id=="Signing Complete" || last_id=="Viewing Complete"){
            message_color="green";
            extra_text = "";
        }else{
            message_color="red";
            extra_text = "<p style='text-align:center'><button type='button' onclick='window.location=\"embedded.html\"' style='display:inline;'>Reload form?</button></p>";
        }
        document.getElementById("powerform").innerHTML = "<center><h3 style='color:"+message_color+";border:none;font-size:20px;text-align:center;'>" + last_id + "</h3><br/>"+extra_text+"</center>";
    }
}

function checkURL() {
    if(document.getElementById('document').contentWindow.location.href == "http://www.docusign.com") {// if the location of the iframe is the unique url
        window.location = "http://www.google.com"; //redirect this page somewhere else.
		}
}


function open_embeddedform(form) {

   if($("type").value === "person") {
   var form_url = "https://demo.docusign.net/Member/PowerFormSigning.aspx?PowerFormId=8ebc65fb-7187-48cb-aa2c-256b81a632bb";
 
    form_url += "&Signer 1_UserName=" + $("name").value;
    form_url += "&Signer 1_Email=" + $("email").value;
	form_url += "&dob=" + $("dob").value;
	
	

$("powerform").innerHTML = '<iframe id="document" onload="checkURL();" src="' + form_url + '" border="0"></iframe>';
    //$("powerform").innerHTML = '<iframe id="document" src="' + form_url + '" border="0"></iframe>';
	}
	else {
	var form_url = 'https://demo.docusign.net/Member/PowerFormSigning.aspx?PowerFormId=dcdf7170-e501-4b60-b10e-6ff1f4c395cc';
	
    form_url += "&Signer 1_UserName=" + $("name").value;
    form_url += "&Signer 1_Email=" + $("email").value;
	form_url += "&dob=" + $("dob").value;
	form_url += "&activateonly=1";
	
	 $("powerform").innerHTML = '<div style="display:none;">><iframe id="document" onload="checkURL();" src="' + form_url + '" border="0"></iframe></div><div></br></br></br></br></br></br></br></br><h2><font color="0079C1"><b>Thank you, your NDA has been sent to your E-mail</b></font></h2></br></br></br></br></br></br></br></br></br></br></div>';
	 }
}
setInterval(check_messages, 200);
