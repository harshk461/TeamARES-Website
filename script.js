$.get("https://opensheet.elk.sh/1o4WOXewxr_uh70EzAjx9O7JwM3E7EUDrZrR0HrL3Src/1", function (data) {
  for (var i = 0; i < data.length; i++) {
    var outerdiv = document.createElement("div");
    outerdiv.style = "height: 500px; width: 500px;"
    outerdiv.className = "single-item col-6 col-lg-4 " + data[i].year
    var anchor = document.createElement('a');
    anchor.className = "portfolio-item";
    anchor.href = data[i].linkedin;
    var pr = document.createElement('div');
    pr.className = "portfolio-wrapper";
    var img = document.createElement("img");
    img.className = "img-fluid lazy"
    img.style = "height: 400px; width: 500px;"
    // var datasrc = document.createAttribute('data-src');
    // datasrc.value = data[i].image;
    // img.setAttributeNode(datasrc);
    img.src = data[i].image;
    img.setAttribute('loading', 'lazy');
    var div3 = document.createElement('div');
    div3.className = "item-content"
    var finalDetails = document.createElement('h6');
    finalDetails.className = "content-title"
    finalDetails.innerHTML = data[i].firstname + " " + data[i].lastname + " &emsp; " + data[i].por
    outerdiv.appendChild(anchor);
    anchor.appendChild(pr);
    pr.appendChild(img);
    pr.appendChild(div3);
    div3.appendChild(finalDetails);
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


