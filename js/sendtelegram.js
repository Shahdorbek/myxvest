//bot token
var telegram_bot_id = "6403529332:AAFkJtadTD49JOLH-BVNAdYCiJXkYeRspbo"; // token'ni o'rniga Siz yaratgan Bot tokenini yozing
//chat id
var chat_id = -1001873610461; // 1111'ni o'rniga habar borishi kerak bo'lgan joyni ID'sini yozing (Batafsil videoda)
var u_name, email, message;
var ready = function () {
  u_name = document.getElementById("name").value;
  email = document.getElementById("nomer").value;
  message = document.getElementById("message").value;
  message = "Ism: " + u_name + "\nRaqam: " + email + "\nXabar: " + message;
};
var sendtelegram = function () {
  ready();
  var settings = {
    async: true,
    crossDomain: true,
    url: "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "cache-control": "no-cache",
    },
    data: JSON.stringify({
      chat_id: chat_id,
      text: message,
    }),
  };
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
  document.getElementById("name").value = "";
  document.getElementById("nomer").value = "";
  document.getElementById("message").value = "";
  document.getElementById("btn").value = "Rahmat sizga";
  document.getElementById("form").classList.add("formsa");
  document.getElementById("app").classList.add("appsa");
  xabar = document.getElementById("app")
  xabar.innerHTML = `<h1>Rahmat <br> sizga <br> <span style="color:#ff1616;"> ${u_name} </span></h1>`
  return false;
};
