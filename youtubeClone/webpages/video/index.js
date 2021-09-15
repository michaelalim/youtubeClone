// this is the whole sidebar

import { startUp } from "../../dependencies/elements/sidebar.js"

startUp();

const descSeeMoreBtn = document.getElementById("see-more");
const dots = document.getElementById("dots");
const hiddenMsgs = document.querySelectorAll(".more");


descSeeMoreBtn.addEventListener("click", () => {
   
    if (descSeeMoreBtn.textContent === "SHOW LESS"){
        hiddenMsgs.forEach((msg) => {
            msg.classList.add("more");
            dots.style.display = "inline-block";
            descSeeMoreBtn.textContent = "SHOW MORE"
        })
    } else {
        hiddenMsgs.forEach((msg) => {
            msg.classList.remove("more");
            dots.style.display = "none";
            descSeeMoreBtn.textContent = "SHOW LESS"
        })
    }
})

const commentBar = document.getElementById("add-comment");
const sendCommentBtn = document.getElementById("send-comment");

commentBar.addEventListener("input", () => {
    if(commentBar.value){
        sendCommentBtn.style.background = "#2196f3";
        sendCommentBtn.style.color = "#222";
    } else {
        sendCommentBtn.style.background = "#333";
        sendCommentBtn.style.color = "#777";
    }
})