window.onload= function() { getDetails('home');}

function createRequest() {
  try {
    request = new XMLHttpRequest();
  } catch (tryMS) {
    try {
      request = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (otherMS) {
      try {
        request = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (failed) {
        request = null;
      }
    }
  }
  return request;
}

function displayDetails() {
  if (request.readyState == 4) {
    if (request.status == 200) {
      detailDiv = document.getElementById('mainDiv');
      detailDiv.innerHTML = request.responseText;
	  
    }
  }
}

function getDetails(itemName) {
  request = createRequest();
  if (request == null) {
    alert("Unable to create request");
    return;
  }
  request.open("GET", itemName + '.html', true);
  request.onreadystatechange = displayDetails;
  document.getElementById("css").setAttribute("href", itemName + ".css");
  request.send(null);
 
}