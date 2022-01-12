$.get("https://opensheet.elk.sh/1o4WOXewxr_uh70EzAjx9O7JwM3E7EUDrZrR0HrL3Src/1", function (data) {
  for (var i = 0; i < data.length; i++) {
    var outerdiv = document.createElement("div");
    outerdiv.className = "col-sm-6 col-lg-4 col-xl-3 " + data[i].year
    var innerdiv1 = document.createElement('div');
    innerdiv1.className = "single-person";
    var innerdiv2 = document.createElement('div');
    innerdiv2.className = "person-image";
    var img = document.createElement("img");
    img.src = data[i].image;
    var div3 = document.createElement('div');
    div3.className = "person-info"
    var name = document.createElement('h3');
    name.className = "full-name"
    name.innerHTML = data[i].firstname + " " + data[i].lastname;
    var por = document.createElement('span');
    por.className = "speciality";
    por.innerHTML = data[i].por;
    outerdiv.appendChild(innerdiv1);
    innerdiv1.appendChild(innerdiv2);
    innerdiv2.appendChild(img);
    innerdiv1.appendChild(div3);
    div3.appendChild(name);
    div3.appendChild(por);
    $(outerdiv).appendTo('#portfolioList');
  }

});


function onSuccess() {
  // remove this to avoid redirect
  window.location = window.location.pathname + "?message=Email+Successfully+Sent%21&isError=0";
}

function onError(error) {
  // remove this to avoid redirect
  window.location = window.location.pathname + "?message=Email+could+not+be+sent.&isError=1";
}

function mySubmit() {
  var form = document.getElementById('contact-form');
  var inputs = form.getElementsByTagName('input');
  var textArea = document.getElementById('contact-message');
  var email = inputs.email.value;
  var subject = inputs.subject.value;
  var name = inputs.name.value;
  var text = textArea.value;
  var data = {
    "access_token": "w5llah6rbha5y34tgjc3c30x"
  };
  data['subject'] = subject;
  data['text'] = "From: " + name + " Email: " + email + " " + text;
  $.post('https://postmail.invotes.com/send',
    data,
    onSuccess
  ).fail(onError);

  return false;
}


