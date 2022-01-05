$.get("https://opensheet.elk.sh/1o4WOXewxr_uh70EzAjx9O7JwM3E7EUDrZrR0HrL3Src/1", function (data) {
  for (var i = 0; i < data.length; i++) {
    var outerdiv = document.createElement("div");
    outerdiv.style = "height: 500px; width: 500px;"
    outerdiv.className = "single-item col-6 col-lg-4 photos"
    var anchor = document.createElement('a');
    anchor.className = "portfolio-item";
    anchor.href = data[i].image;
    var pr = document.createElement('div');
    pr.className = "portfolio-wrapper";
    var img = document.createElement("img");
    img.className = "img-fluid lazy"
    img.style = "height: 400px; width: 500px;"
    img.alt = "Image"
    img.src = data[i].image
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


