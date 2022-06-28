// The JavaScript Part Starts
const content = document.querySelector(".content");
const btn = document.querySelector(".talk");


///online searches
const YouTube = ["opening youtube sir"];
const Google=['opening google sir'];

//navigations
const Whether = ["showing the whether"];
const Map=["Opening the map"]

//shooping searches 
const Amazon=["opening amazon"];
const Ajio=["opening ajio"];
const Myntra=["opening myntra"];
const Flipkart=["opening flipkart"];
const Meesho=["opening meesho"];

//music searches
const Spotify=["opening spotify music"];
const Ganna=["opening ganna music"];

//new searches
const News=["opening the news"]
//security 
const Security=["showing your Security"]
//finance
const Finance=["showing the finanace service"]

///Calculator and notepad
const Calculator=["opening calculator"]

//camers
const Camera=["opening camera for you sir"]

//social media feeds
const Instagram=["Opening login page of instagram sir"]
const Facebook=["opening login page of facebook sir"]
const Snapchat=["opening login page of snapchat for u sir"]


const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
/*
recognition.onstart = function () {
  console.log("How Can I Help You ?");
};
*/

recognition.onresult = function (event) {
  const current = event.resultIndex;

  const transcript = event.results[current][0].transcript;
  content.textContent = transcript;
  readOutLoud(transcript);
};

btn.addEventListener("click", () => {
  recognition.start();
});

function readOutLoud(message) {
  const speech = new SpeechSynthesisUtterance();

  speech.text = "I am not able to understand ,sir";

  if (message.includes("hey") || message.includes('hello')) {
    const finalText ="Hello";
    speech.text = finalText;
  }
  else if (message.includes("how are you")) {
    const finalText ="I am fine Sir tell me how can i help you";
    speech.text = finalText;
  }
  else if (message.includes("name")) {
    const finalText ="My name is Nemo Code your virtual assistant";
    speech.text = finalText;
  }
 else if(message.includes("what is")|| message.includes('who is')|| message.includes('what are') || message.includes('which are')) {
    window.open(`https://www.google.com/search?q=${message.replace(" ", "")}`,"_blank");
    const finalText ="This is what i found on internet regarding "+message;
    speech.text = finalText;
   
  }
  else if (message.includes("YouTube")) {
    const finalText = YouTube[Math.floor(Math.random() * YouTube.length)];
    speech.text = finalText;
    window.open("https://www.youtube.com/");
  }

  else if (message.includes("weather")) {
    const finalText = Whether[Math.floor(Math.random() * Whether.length)];
    speech.text = finalText;
    window.open("https://www.google.com/search?q=weather+today&rlz=1C1CHBF_enIN925IN926&sxsrf=ALiCzsYaYmjc7J-t2wIOcRSLJ8wtN400fg%3A1653500085059&ei=tWiOYq2iA9SOhwOwpYDACA&oq=whether&gs_lcp=Cgdnd3Mtd2l6EAEYCTIHCCMQsAMQJzIHCAAQRxCwAzIHCAAQRxCwAzIHCAAQRxCwAzIHCAAQRxCwAzIHCAAQRxCwAzIHCAAQRxCwAzIHCAAQRxCwAzIHCAAQRxCwAzIHCAAQsAMQQ0oECEEYAEoECEYYAFAAWABgzyloAXABeACAAQCIAQCSAQCYAQDIAQrAAQE&sclient=gws-wiz");
  }
  else if (message.includes("Google")) {
    const finalText = Google[Math.floor(Math.random() * Google.length)];
    speech.text = finalText;
    window.open("https://www.google.com/");
  }
  else if (message.includes("Amazon")) {
    const finalText = Amazon[Math.floor(Math.random() * Amazon.length)];
    speech.text = finalText;
    window.open("https://www.amazon.com/");
  }
  else if (message.includes("Ajio")) {
    const finalText = Ajio[Math.floor(Math.random() * Ajio.length)];
    speech.text = finalText;
    window.open("https://www.ajio.com/");
  }
  else if (message.includes("Myntra")) {
    const finalText = Myntra[Math.floor(Math.random() * Myntra.length)];
    speech.text = finalText;
    window.open("https://www.myntra.com/");
  }
  else if (message.includes("Flipkart")) {
    const finalText = Flipkart[Math.floor(Math.random() * Flipkart.length)];
    speech.text = finalText;
    window.open("https://www.flipkart.com/");
  }
  else if (message.includes("meesho")) {
    const finalText = Meesho[Math.floor(Math.random() * Meesho.length)];
    speech.text = finalText;
    window.open("https://www.meesho.com/");
  }
  else if (message.includes("spotify")) {
    const finalText = Spotify[Math.floor(Math.random() * Spotify.length)];
    speech.text = finalText;
    window.open("https://www.spotify.com/");
  }
  else if (message.includes("ganna")) {
    const finalText = Ganna[Math.floor(Math.random() * Ganna.length)];
    speech.text = finalText;
    window.open("https://www.ganna.com/");
  }
  else if (message.includes("news")) {
    const finalText = News[Math.floor(Math.random() * News.length)];
    speech.text = finalText;
    window.open("https://news.google.com/topstories?hl=en-IN&gl=IN&ceid=IN:en");
  }
  else if (message.includes("map")) {
    const finalText = Map[Math.floor(Math.random() * Map.length)];
    speech.text = finalText;
    window.open("https://www.google.com/maps/@18.5422878,73.8218178,16z");
  }
  else if (message.includes("security")) {
    const finalText = Security[Math.floor(Math.random() * Security.length)];
    speech.text = finalText;
    window.open("https://myaccount.google.com/security");
  }
  else if(message.includes("finance")) {
    const finalText = Finance[Math.floor(Math.random() * Finance.length)];
    speech.text = finalText;
    window.open("https://www.google.com/finance/");
  }
  else if (message.includes("calculator")) {
    const finalText = Calculator[Math.floor(Math.random() * Calculator.length)];
    speech.text = finalText;
    window.open('Calculator:///');
  }
  else if (message.includes("Instagram")) {
    const finalText = Instagram[Math.floor(Math.random() * Instagram.length)];
    speech.text = finalText;
    window.open("https://www.instagram.com/accounts/login/");
  }
  else if (message.includes("Facebook")) {
    const finalText = Facebook[Math.floor(Math.random() * Facebook.length)];
    speech.text = finalText;
    window.open("https://www.facebook.com/login/");
  }
  else if(message.includes("Snapchat")) {
    const finalText = Snapchat[Math.floor(Math.random() * Snapchat.length)];
    speech.text = finalText;
    window.open("https://accounts.snapchat.com/accounts/login?client_id=geo");
  }
  else{
    const finalText =" sorry I am not able to understand ";
    speech.text = finalText;
  }

  speech.volume = 1;
  speech.rate = 1.1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
}