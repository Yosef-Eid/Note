import Nav from "../scripts/component/Nav.js"
import HomeNote from "../scripts/component/HomeNote.js"
// import loc from "../scripts/loc.js"
import comket from "../../comket/html.js";




export default function Home(){
    document.body.innerHTML = ""
    document.body.append(Nav(), HomeNote(),)
}
