import comket from "../../comket/html.js";
// import {BoxTheWrit} from "../scripts/component/Nav.js";

export default function loc() {
  let user = [{ title: "title", text: "text", colorNote: "colorNote" , image:"image" ,video:"video" , music:"music" }];

  if (!localStorage.getItem("user")) {
    localStorage.setItem("user", JSON.stringify([]));
  }

  if (JSON.parse(localStorage.getItem("user")).length > 0) {
    let oldUser = JSON.parse(localStorage.getItem("user"));
    for (let use of oldUser) {
      card(use.title , use.text , use.colorNote , use.image , use.video , use.music);
    }
  }

  document.getElementById("add").addEventListener("click", adds);
  function adds() {
    let textarea = document.getElementById("textarea");

    if (!textarea.value == "") {
      let createNote = document.querySelector(".createNote");
      let title = createNote.children[1];
      let text = createNote.children[2];
      let color = document.querySelector(".createNote").style.background
      let check = false;
      let oldUser = JSON.parse(localStorage.getItem("user"));
      let img = document.querySelector(".dd")
      let vid = document.querySelector(".video")
      let mus = document.querySelector(".music")
      if(img){ img = document.querySelector(".dd").src }
      if(vid){ vid = document.querySelector(".video").src }
      if(mus){ mus = document.querySelector(".music").src }


      for (let use of oldUser) {
        if (title.value == use.title) check = true;
      }
      if (!check) {
        
        card(title.value , text.value , color , img , vid ,  mus );
        oldUser.push({ title: title.value , text: text.value , colorNote:color , image:img ,   });
        localStorage.setItem("user", JSON.stringify(oldUser));
      }
      reset();
      ifImg();
      ifVid();
      ifMusic();
      resetColor1();

      title.value = "";
      text.value = "";
    }
  }

  function card(title, text, colorNote , image , video ,  music  ) {
    CreateCard(title, text, colorNote , image , video ,  music );
    let homeNote = document.querySelector(".homeNote");
    document.querySelectorAll(".createCard");
    if (document.querySelectorAll(".createCard").length == 0) {
      homeNote.append(CreateCard(title, text , colorNote , image , video ,  music));
    } else {
      homeNote.append(CreateCard(title, text  , colorNote , image , video ,  music));
    }
    // addCOlor();
  }

  return user;
}

/////////////////////////////////////////////// ////////////////////////////////

function CreateCard(title, text, colorNote , image , video , music ) {
  let createCard = comket.div({
    class: "createCard",
    style: { background: colorNote ,},
    children: [
      comket.h2({ text: title , style:{ color:"white" }, onclick:BackNote,}),
      comket.textarea({ class: "text", children: [text] , style:{ color:"white" } }),
      comket.div({ class: "up" , onclick:BackNote,}),
      comket.Element("ion-icon", { name: "ellipsis-vertical", class: "options", onclick: openAddresses , style:{ color:"white" }  }),
      HoverAddresses(colorNote),
      comket.img({class:"sr" , src:image ,}),
      comket.video({class:"vi" , src:video ,}),
      comket.audio({class:"mu" , src:music ,}),
    ],
  });
  return createCard;
}

function BackNote(e){
  let backTitle = e.target.parentElement.children[0].innerHTML
  let backText = e.target.parentElement.children[1].innerHTML
  let backColor = e.target.parentElement.style.background
  let createNote = document.getElementById("createNote")
  createNote.style.background = backColor
  createNote.id = "createNote1"
  createNote.style.boxShadow = "0 0 10px 800px #000000c7"
  document.getElementById("close").style.right = "10px"
  document.getElementById("close").style.color = "#ffffff"

  document.getElementById("title").style.background = backColor
  document.getElementById("title").style.color = "#ffffff"
  document.getElementById("title").placeholder = "Title"
  document.getElementById("title").value = backTitle + " "

  document.getElementById("textarea").style.background = backColor
  document.getElementById("textarea").style.color = "#ffffff"
  document.getElementById("textarea").value = backText + " "

  document.getElementById("add").style.background = backColor
  document.getElementById("add").style.color = "#ffffff"

  document.getElementById("addresses").style.background = backColor
  // console.log(document.getElementById("addresses").children[2].children[0].children[0]);
  document.getElementById("addresses").children[0].style.color = "#ffffff"
  document.getElementById("addresses").children[2].children[0].children[0].style.color = "#ffffff"
  document.getElementById("addresses").children[3].children[0].children[0].style.color = "#ffffff"
  document.getElementById("addresses").children[4].children[0].children[0].style.color = "#ffffff"

  
}

function ifImg() {
  if (document.getElementById("imgNote")) {
    document.getElementById("imgNote").remove();
    let textarea = document.getElementById("textarea");
    textarea.style.marginTop = "0px";
    textarea.style.height = "490px";
    document.getElementById("createNote").style.height = "";
  }
}

function ifVid() {
  if (document.getElementById("videoNote")) {
    document.getElementById("videoNote").remove();
    let textarea = document.getElementById("textarea");
    textarea.style.marginTop = "0px";
    textarea.style.height = "490px";
    document.getElementById("createNote").style.height = "";
  }
}

function ifMusic() {
  if (document.getElementById("musicNote")) {
    document.getElementById("musicNote").remove();
    document.getElementById("valueColor").style.background = "#ffffff00"
    let textarea = document.getElementById("textarea");
    textarea.style.marginTop = "0px";
    textarea.style.height = "490px";
    document.getElementById("createNote").style.height = "";
  }
}

function reset() {
  document.getElementById("createNote1").id = "createNote";
  document.getElementById("createNote").style.boxShadow = "0 0 0 0px #000000c7";
  document.getElementById("valueColor").style.width = "0";
  document.getElementById("close").style.right = "-15px";
  document.getElementById("title").placeholder = "add note";
  document.getElementById("textarea").value = "";
  document.getElementById("title").value = "";
}

function resetColor1() {
  document.getElementById("createNote").style.background = "#748484"
  document.getElementById("close").style.color = "#0000009e"
  document.getElementById("title").style.background = "#eaedef"
  document.getElementById("title").style.color = "#080808d8"
  document.getElementById("textarea").style.color = "#080808f0"
  document.getElementById("textarea").style.background = "#eaedef"
  document.getElementById("add").style.background = "#eaedef"
  document.getElementById("add").style.color = "#080808d8"
  document.getElementById("addresses").style.background = "#eaedef"
  document.getElementById("chingColor").style.color = "#080808d8"
  document.getElementById("valueColor").style.background = "#ffffff00"
  document.getElementById("img").style.color = "#080808d8"
  document.getElementById("video").style.color = "#080808d8"
  document.getElementById("music").style.color = "#080808d8"
}

function openAddresses(e) {
  if (e.target.parentElement.children[4].style.width == "100%") {
    e.target.parentElement.children[4].style.width = "0%";
  } else {
    e.target.parentElement.children[4].style.width = "100%";
  }
  // console.log(e.target.parentElement.children[4].children[0]);
  if (e.target.parentElement.children[4].children[0].style.width == "100%") {
    e.target.parentElement.children[4].children[0].style.width = "0%";
    e.target.parentElement.children[4].children[0].style.background = "#bababa00";
  }
}

function HoverAddresses(colorNote) {
  // console.log(colorNote);
  // console.log(colorNote);
  let HoverAddresses = comket.div({ class: "hoverAddresses", id: "hoverAddresses",
    children: [
      // ChingColor(),
      comket.div({ class: "valueColor",
        children: [
          comket.p({ class: "color1", onclick: color1 }),
          comket.p({ class: "color2", onclick: color2 }),
          comket.p({ class: "color3", onclick: color3 }),
          comket.p({ class: "color4", onclick: color4 }),
          comket.p({ class: "color5", onclick: color5 }),
          comket.p({ class: "color6", onclick: color6 }),
        ],
      }),
      comket.Element("ion-icon", { name: "color-palette", class: "remove", onclick: openColor, style:{ color:"white" } }),
      comket.Element("ion-icon", { name: "trash", class: "remove", onclick: remove,style:{ color:"white" }  }),
    ],
  });
  return HoverAddresses;
}

function color1(e) {
 e.target.parentElement.parentElement.parentElement.style.background = "#4ba8a9"
}
function color2(e){
  e.target.parentElement.parentElement.parentElement.style.background = "#a9a94b"
}
function color3(e) {
  e.target.parentElement.parentElement.parentElement.style.background = "#924ba9"
}
function color4(e) {
  e.target.parentElement.parentElement.parentElement.style.background = "#4b5ea9"
}
function color5(e) {
  e.target.parentElement.parentElement.parentElement.style.background = "#4ba94e"
}
function color6(e) {
  e.target.parentElement.parentElement.parentElement.style.background = "#a94b54"
}

function openColor(e) {
  if (e.target.parentElement.children[0].style.width == "100%") {
    e.target.parentElement.children[0].style.width = "0%";
    e.target.parentElement.children[0].style.background = "#bababa00";
  } else {
    e.target.parentElement.children[0].style.width = "100%";
    e.target.parentElement.children[0].style.background = "#ffffff";
  }
}

function remove(e) {
  let username = e.target.parentElement.parentElement.children[0].innerHTML;
  e.target.parentElement.parentElement.remove();
  let oldUsers = JSON.parse(localStorage.getItem("user"));
  for (const usee in oldUsers) {
    if (oldUsers[usee].title === username) {
      oldUsers.splice(usee, 1);
    }
  }
  localStorage.setItem("user", JSON.stringify(oldUsers));
}
