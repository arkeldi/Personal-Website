const STYLESHEET_KEY = "stylesheet";
function toggleStyleSheet(){
    // 1 (a) Get style element by ID 
    var styleElement = document.getElementById("mainStyleSheet");
    // 1 (b) Check the current stylesheet file name. (hint: element.getAttribute)
    var fileName = styleElement.getAttribute("href");
    // 1 (c) Determine new stylesheet file name
    var newFileName = "style2.css"
    if (fileName == "style.css"){
        newFileName = "style2.css"
    }else{
        newFileName = "style.css"
    }
    // 1 (d) replace stylesheet with new stylesheet 
    styleElement.setAttribute("href", newFileName);
    // 2 (d) For persistence when page is refreshed. save new stylesheet name to localStorage
    // hint: localStorage.setItem(name, value)
    localStorage.setItem(STYLESHEET_KEY, newFileName);
}
window.onload = function(){
    // 2 (a) get stylesheet name from local storage 
    var stylesheetValue = localStorage.getItem(STYLESHEET_KEY) || "style2.css";
    // 2 (b) get html style element by ID
    var styleElement = document.getElementById("mainStyleSheet");
    // 2 (c) replace href attribute of html element.
    styleElement.setAttribute("href", stylesheetValue);
}
