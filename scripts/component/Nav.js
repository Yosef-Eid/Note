import comket from "../../comket/html.js";

function logo(){
  let logo = comket.div({class:"logo",
    children:[comket.h1({text:"Note.me"})]})
  return logo
} 

function CreateNote(){
  let createNote = comket.div({class:"createNote", id:"createNote",
  children:[comket.Element("ion-icon",{name:"close-outline",id:"close",onclick:closeCreateNote}),
              comket.input({id:"title",type:"text",placeholder:"                                         add note",onclick:BoxTheWrit,}),
              comket.textarea({type:"text",id:"textarea",placeholder:"Take note..."}),
              comket.button({text:"Save" , id:"add"}),
              comket.div({class:"addresses", id:"addresses",
              children:[
                  ChingColor(),
                  ValueColor(),
                  addImg(),
                  addVideo(),
                  addMusic(),
                ]})]
})
  return createNote
}

function closeCreateNote(){
  document.getElementById("createNote1" ).id = "createNote"
  document.getElementById("createNote"  ).style.boxShadow = "0 0 0 0px #000000c7"
  document.getElementById("textarea"    ).value = ""
  document.getElementById("title"       ).value = ""
  document.getElementById("valueColor"  ).style.width = "0"
  document.getElementById("close"       ).style.right = "-15px"
  document.getElementById("valueColor").style.background = "#eaedef00"
  document.getElementById("title"       ).placeholder = "                                        add note"
  
  removeImg()
  removeVideo()
  removeMusic()
  resetColor()
}

function removeImg(){
  if(document.getElementById("imgNote")){
    document.getElementById("imgNote").remove()
    let textarea = document.getElementById("textarea")
    textarea.style.marginTop = "0px"
    textarea.style.height = "490px"
    document.getElementById("createNote").style.height = ""
  }
}

function removeVideo(){
  if(document.getElementById("videoNote")){
    document.getElementById("videoNote").remove()
    let textarea = document.getElementById("textarea")
    textarea.style.marginTop = "0px"
    textarea.style.height = "490px"
    document.getElementById("createNote").style.height = ""
  }
}

function removeMusic(){
  if(document.getElementById("musicNote")){
    document.getElementById("musicNote").remove()
    let textarea = document.getElementById("textarea")
    textarea.style.marginTop = "0px"
    textarea.style.height = "490px"
    document.getElementById("createNote").style.height = ""
  }
}


function addImg(){
  let img = comket.div({children:[
    comket.label({for:"age",children:[comket.Element("ion-icon",{name:"image", id:"img",})]}),
    comket.input({type:"file",id:"age",oninput:fileImg})
  ]})
return img
}

function fileImg(){
  let createNote = document.getElementById("title")
  let image =  document.getElementById("age")
  let img = new FileReader()
  img.onload = ()=>{
    let image = comket.img({src:img.result, id:"imgNote" , class:"dd"})
    createNote.parentElement.append(image)
    if(document.getElementById("imgNote")){
      let textarea = document.getElementById("textarea")
      textarea.style.marginTop = "400px"
      textarea.style.height = "260px"
      document.getElementById("createNote1").style.height = "725px"      
    }
  }
  img.readAsDataURL(image.files[0])
}

function addVideo(){
  let video = comket.div({children:[
    comket.label({for:"vid",children:[comket.Element("ion-icon",{name:"videocam", id:"video",})]}),
    comket.input({type:"file",id:"vid",oninput:fileVideo ,})
  ]})
  return video
  }

  function fileVideo(){
    let createNote = document.getElementById("title")
    let video =  document.getElementById("vid")
    let vid = new FileReader()
    vid.onload = ()=>{
      let video = comket.video({src:vid.result, id:"videoNote" , class:"video" , controls:"controls"})
      createNote.parentElement.append(video)
      if(document.getElementById("videoNote")){
        let textarea = document.getElementById("textarea")
        textarea.style.marginTop = "400px"
        textarea.style.height = "260px"
        document.getElementById("createNote1").style.height = "725px"        
      }
    }
    vid.readAsDataURL(video.files[0])
  }

function addMusic(){
  let music = comket.div({children:[
    comket.label({for:"mus",children:[comket.Element("ion-icon",{name:"musical-notes", id:"music",})]}),
    comket.input({type:"file",id:"mus",oninput:fileMusic ,})
  ]})
  return music
  }

  function fileMusic(){
    let createNote = document.getElementById("title")
    let music =  document.getElementById("mus")
    let mus = new FileReader()
    mus.onload = ()=>{
      let music = comket.audio({src:mus.result, id:"musicNote" , class:"music" , controls:"controls"})
      createNote.parentElement.append(music)
      if(document.getElementById("musicNote")){
        let textarea = document.getElementById("textarea")
        textarea.style.marginTop = "60px"
        textarea.style.height = "600px"
        document.getElementById("createNote1").style.height = "660px"      
      }
    }
    mus.readAsDataURL(music.files[0])
  }

function ValueColor(){
  let valueColor =  comket.div({id:"valueColor",
                      children:[comket.p({id:"color1",onclick:color1}),comket.p({id:"color2",onclick:color2}),
                                comket.p({id:"color3",onclick:color3}),comket.p({id:"color4",onclick:color4}),
                                comket.p({id:"color5",onclick:color5}),comket.p({id:"color6",onclick:color6})]})
    return valueColor
  }

function ChingColor(){
  let chingColor = comket.Element("ion-icon",{name:"color-palette", id:"chingColor",onclick:()=>{
                let valueColor = document.getElementById("valueColor")
                if(valueColor.style.width == "82%"){
                  valueColor.style.width = "0"
                      valueColor.style.background = "#eaedef00"
                  }else{
                    valueColor.style.width = "82%"
                    valueColor.style.background = "white"
                }
  }})
  return chingColor
}

export function resetColor(){
  document.getElementById("createNote").style.background = "#748484"
  document.getElementById("close").style.color = "#0000009e"
  document.getElementById("title").style.background = "#eaedef"
  document.getElementById("title").style.color = "#080808d8"
  document.getElementById("textarea").style.color = "#080808f0"
  document.getElementById("textarea").style.background = "#eaedef"
  document.getElementById("add").style.background = "#eaedef"
  document.getElementById("add").style.color = "#080808d8"
  document.getElementById("addresses").style.background = "#eaedef"
  document.getElementById("img").style.color = "#080808d8"
  document.getElementById("chingColor").style.color = "#080808d8"
  document.getElementById("video").style.color = "#080808d8"
  document.getElementById("music").style.color = "#080808d8"
}

function colorsCreteNote(){
  document.getElementById("textarea").style.color = "white"
  document.getElementById("add").style.color = "white"
  document.getElementById("title").style.color = "white"
  document.getElementById("close").style.color = "white"
  document.getElementById("img").style.color = "white"
  document.getElementById("chingColor").style.color = "white"
  document.getElementById("video").style.color = "white"
  document.getElementById("music").style.color = "white"
}

function color1(e){
  e.target.parentElement.parentElement.parentElement.style.background = "#4ba8a9" 
  e.target.parentElement.parentElement.parentElement.children[1].style.background = "#4ba8a9" 
  e.target.parentElement.parentElement.parentElement.children[2].style.background = "#4ba8a9" 
  e.target.parentElement.parentElement.parentElement.children[3].style.background = "#4ba8a9" 
  e.target.parentElement.parentElement.parentElement.children[4].style.background = "#4ba8a9"  
  colorsCreteNote()
}
function color2(e){
  e.target.parentElement.parentElement.parentElement.style.background = "#a9a94b" 
  e.target.parentElement.parentElement.parentElement.children[1].style.background = "#a9a94b" 
  e.target.parentElement.parentElement.parentElement.children[2].style.background = "#a9a94b" 
  e.target.parentElement.parentElement.parentElement.children[3].style.background = "#a9a94b" 
  e.target.parentElement.parentElement.parentElement.children[4].style.background = "#a9a94b"
  colorsCreteNote()
}
function color3(e){
  e.target.parentElement.parentElement.parentElement.style.background = "#924ba9" 
  e.target.parentElement.parentElement.parentElement.children[1].style.background = "#924ba9" 
  e.target.parentElement.parentElement.parentElement.children[2].style.background = "#924ba9" 
  e.target.parentElement.parentElement.parentElement.children[3].style.background = "#924ba9" 
  e.target.parentElement.parentElement.parentElement.children[4].style.background = "#924ba9"
  colorsCreteNote()
}
function color4(e){
  e.target.parentElement.parentElement.parentElement.style.background = "#4b5ea9" 
  e.target.parentElement.parentElement.parentElement.children[1].style.background = "#4b5ea9" 
  e.target.parentElement.parentElement.parentElement.children[2].style.background = "#4b5ea9" 
  e.target.parentElement.parentElement.parentElement.children[3].style.background = "#4b5ea9" 
  e.target.parentElement.parentElement.parentElement.children[4].style.background = "#4b5ea9"
  colorsCreteNote()
}
function color5(e){
  e.target.parentElement.parentElement.parentElement.style.background = "#4ba94e" 
  e.target.parentElement.parentElement.parentElement.children[1].style.background = "#4ba94e" 
  e.target.parentElement.parentElement.parentElement.children[2].style.background = "#4ba94e" 
  e.target.parentElement.parentElement.parentElement.children[3].style.background = "#4ba94e" 
  e.target.parentElement.parentElement.parentElement.children[4].style.background = "#4ba94e"
  colorsCreteNote()
}
function color6(e){
  e.target.parentElement.parentElement.parentElement.style.background = "#a94b54"
  e.target.parentElement.parentElement.parentElement.children[1].style.background = "#a94b54" 
  e.target.parentElement.parentElement.parentElement.children[2].style.background = "#a94b54" 
  e.target.parentElement.parentElement.parentElement.children[3].style.background = "#a94b54" 
  e.target.parentElement.parentElement.parentElement.children[4].style.background = "#a94b54" 
  colorsCreteNote()
}

export function BoxTheWrit(e){
  if(e.target.parentElement){
    let createNote = document.getElementById("createNote")
    createNote.id = "createNote1"
    createNote.style.boxShadow = "0 0 10px 800px #000000c7"
    document.getElementById("close").style.right = "10px"
    document.getElementById("title").placeholder = "Title"    
  }
}

function Them(){
  let theme = comket.Element("ion-icon" , { name:"color-palette" , id:"theme", onclick:chingTheme})
  return theme
}

let state = true
document.body.style.background = localStorage.getItem("theme")
document.body.style.color = localStorage.getItem("colorBody")
function chingTheme(){
  if(state){
// console.log(document.getElementById("nav"));
document.getElementById("nav").style.background = localStorage.getItem("navColor")
    document.body.style.background = "#1a1d27"
    localStorage.setItem("theme" , "#1a1d27")

    document.body.style.color = "white"
    localStorage.setItem("colorBody" , "white")

    document.getElementById("nav").style.background = "#1a1d27"
    localStorage.setItem("navColor" , "#1a1d27")
  }else{
    document.body.style.background = "#eaedef"
    localStorage.setItem("theme" , "#eaedef")

    document.body.style.color = "#080808d8"
    localStorage.setItem("colorBody" , "#080808d8")

    document.getElementById("nav").style.background = "#eaedef"
    localStorage.setItem("navColor" , "#eaedef")

  }
  state = !state
}

export default function Nav() {
  let nav = comket.div({ class:"nav", id:"nav",
    children: [logo(),CreateNote() , Them()],
  });
  
  return nav;
}



