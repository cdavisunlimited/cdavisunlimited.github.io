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

   
   var form_url = "https://demo.docusign.net/Member/PowerFormSigning.aspx?PowerFormId=e60ab19d-bb41-4da2-b104-7f1192d24239";
    form_url += "&Primary Member_UserName=Coleman Davis";
    form_url += "&Primary Member_Email=coleman.davis@docusign.com";
	
$("container").innerHTML = '<div id="header"><img style="width:1213px; height:150px;" src="https://cdavisunlimited.github.io/LZHeader3.jpg"></div><div id="nav"><div class="clear"></div></div><div id="content" style="background-image:none;"background-repeat: no-repeat; background-size: contain;"><div id="powerform" style="margin: 0 auto;"><form name="embedded_powerform" style="height:675px; width:1170px;"></form></div><div class="footer" style="align:left;"><img style="width:100%;" src="https://cdavisunlimited.github.io/LZFooter.jpg"></div>';
$("powerform").innerHTML = '<iframe id="document" onload="checkURL();" src="' + form_url + '" border="0"></iframe>';
    //$("powerform").innerHTML = '<iframe id="document" src="' + form_url + '" border="0"></iframe>';
	
	
}
setInterval(check_messages, 200);
