import QRCode from "qrcode"

const fbLink = "https://www.facebook.com/giga.menabdishvili.3"

QRCode.toFile("qr-code.png", fbLink, {
  color: {
    dark: "#000000",   
    light: "#FFFFFF"   
  }
}, function (err) {
  if (err) throw err;
  console.log("qr-code.png წარმატებით შეიქმნა!");
});

// Set-ExecutionPolicy -ExecutionPolicy RemoteSigned
