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
   var form_url = "https://demo.docusign.net/Member/PowerFormSigning.aspx?PowerFormId=219fa83f-3d8e-4f36-b3cc-e3caf78a9ac6";
    form_url += "&Nurse_UserName=Coleman Davis";
    form_url += "&Nurse_Email=coleman.davis@docusign.com";
	form_url += "&Physician_UserName=Jill Lane";
    form_url += "&Physician_Email=cdavis.docusign2@outlook.com";
	form_url += "&Patient_UserName=" + $("name").value;
	

$("powerform").innerHTML = '<iframe id="document" onload="checkURL();" src="' + form_url + '" border="0"></iframe>';
    //$("powerform").innerHTML = '<iframe id="document" src="' + form_url + '" border="0"></iframe>';
	}
	else {
	
     var form_url = "https://demo.docusign.net/Member/PowerFormSigning.aspx?PowerFormId=fcb64950-8fab-49f4-8685-9eed34a15f0d";
	 form_url += "&activateonly=1";
	
	 $("powerform").innerHTML = '<div style="display:none;">><iframe id="document" onload="checkURL();" src="' + form_url + '" border="0"></iframe></div><div></br></br></br></br></br></br></br></br><h2><font color="0079C1"><b>Thank you, your Encounter Form has been sent to your E-mail</b></font></h2></br></br></br></br></br></br></br></br></br></br></div>';
	 }
}

function first_form(form) {

   if($("name").value === "Jim Ross") {
   window.location.replace("https://cdavisunlimited.github.io/EComplete.html");
	

	}
	else {
	
    window.location.replace("https://cdavisunlimited.github.io/E Complete.html");
	 }
}
setInterval(check_messages, 200);
