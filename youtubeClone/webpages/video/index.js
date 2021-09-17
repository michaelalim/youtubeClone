// this is the whole sidebar

import { startUp } from "../../dependencies/elements/sidebar.js"

// buttons on the LIKE row

import { likeAreaArrs } from "./videoArrEls.js";

startUp();

const likeAreaContainer = document.getElementById("like-area-btns");

likeAreaArrs.forEach((btns) => {
    const likeDislikeContainer = document.createElement("div");
    likeDislikeContainer.classList.add("like-dislike-btns");
    likeAreaContainer.appendChild(likeDislikeContainer);
    
    if (btns.id === "like-btn" || btns.id === "dislike-btn"){
        const btn = document.createElement("button");
        btn.classList.add("btn", btns.uniqueClass);
        btn.setAttribute("id", btns.id);
        likeDislikeContainer.appendChild(btn);

        const btnIcon = document.createElement("span");
        // to make like button not be outlined so that it will look like the button is "LIKED"
        if(btns.id === "like-btn"){
            btnIcon.classList.add("material-icons");
        } else {
            btnIcon.classList.add("material-icons-outlined");
        }
        btnIcon.textContent = btns.spanName;
        btn.appendChild(btnIcon);
        //when the number is more than 1000, it will convert it to K, like 1000:1K
        if (btns.number > 1000){
            btns.number = `${btns.number / 1000}K`
            btn.innerHTML += ` ${btns.number}`;
        } else {
            btn.innerHTML += ` ${btns.number}`;
        }
    } else {
        const btn = document.createElement("button");
        btn.classList.add("btn", btns.uniqueClass);
        btn.setAttribute("id", btns.id);
        likeAreaContainer.appendChild(btn);

        const btnIcon = document.createElement("span");
        btnIcon.classList.add("material-icons-outlined");
        btnIcon.innerHTML = btns.spanName;
        btn.appendChild(btnIcon);

        const btnText = document.createElement("span");
        btnText.classList.add("btnTextLikeRow");
        btnText.textContent = btns.textname;
        btn.appendChild(btnText);
    }
})

// see more function on the description

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

//responsive design for inputting comment before posting

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
});

import { vidComments } from "./commentArr.js";

const postArea = document.getElementById("posts-area");

vidComments.forEach((post) => {

        const {postUserImg: img, 
            postUsername: name, 
            postTime: time,
            postContent: comment,
            postLikes: likes,
            postDislikes: dislikes,
            postReplies: replies
        } = post

        const commentContainer = document.createElement("div");
        commentContainer.classList.add("going-right");
        postArea.appendChild(commentContainer);

        const postUserImg = document.createElement("img");
        postUserImg.src = img;
        postUserImg.classList.add("post-img");
        commentContainer.appendChild(postUserImg);

        const postBox = document.createElement("div");
        postBox.classList.add("post-box");
        postBox.setAttribute("id", "post-box")
        commentContainer.appendChild(postBox);

        const postUsername = document.createElement("span");
        postUsername.textContent = name;
        postUsername.classList.add("post-username");
        postBox.appendChild(postUsername);

        const postTime = document.createElement("span");
        postTime.textContent = time;
        postTime.classList.add("post-time");
        postBox.appendChild(postTime);

        const postContent = document.createElement("p");
        postContent.textContent = comment;
        postContent.classList.add("post-content");
        postBox.appendChild(postContent);

        const likeBtn = document.createElement("button");
        likeBtn.textContent = "thumb_up"
        likeBtn.classList.add("post-like-btn", "post-btn", "material-icons-outlined");
        postBox.appendChild(likeBtn);

        const likeNum = document.createElement("span");
        likeNum.textContent = likes;
        likeNum.classList.add("post-like-total", "post-total");
        postBox.appendChild(likeNum);

        const dislikeBtn = document.createElement("button");
        dislikeBtn.classList.add("post-dislike-btn", "post-btn", "material-icons-outlined");
        dislikeBtn.textContent = "thumb_down";
        postBox.appendChild(dislikeBtn);

        const dislikeNum = document.createElement("span");
        dislikeNum.textContent = dislikes;
        dislikeNum.classList.add("post-dislike-total", "post-total");
        postBox.appendChild(dislikeNum);

        const replyBtn = document.createElement("button");
        replyBtn.textContent = `REPLY`;
        replyBtn.classList.add("post-reply");
        postBox.appendChild(replyBtn);

        const viewReplies = document.createElement("button");
        viewReplies.classList.add("view-reply");
        postBox.appendChild(viewReplies);

        if (replies === 0){

        } else if (replies === 1){
            const expandMoreViewReps = document.createElement("span");
            expandMoreViewReps.classList.add("material-icons-outlined", "view-more-icon");
            expandMoreViewReps.textContent = "arrow_drop_down";
            viewReplies.appendChild(expandMoreViewReps);

            const viewRepliesText = document.createElement("span");
            viewRepliesText.textContent = `View ${replies} reply`;
            viewReplies.appendChild(viewRepliesText);
        } else 
        {
            const expandMoreViewReps = document.createElement("span");
            expandMoreViewReps.classList.add("material-icons-outlined", "view-more-icon");
            expandMoreViewReps.textContent = "arrow_drop_down";
            viewReplies.appendChild(expandMoreViewReps);

            const viewRepliesText = document.createElement("span");
            viewRepliesText.textContent = `View ${replies} replies`;
            viewReplies.appendChild(viewRepliesText);
        }
});

//suggestion area of the page

const suggestCategory = document.getElementById("suggest-category");

import { categories } from "../../dependencies/arrays/categories.js";

categories.forEach((cat) => {
    const btn = document.createElement("button");
    btn.classList.add("category");
    if (cat.name === "All"){
        btn.classList.add("active");
        btn.setAttribute("id", `All`)
    }
    btn.textContent = cat.name;
    btn.addEventListener("click", () => {
        location.href = cat.link;
    });
    suggestCategory.appendChild(btn);
}); 

const suggestions = document.getElementById("suggest-videos");

import { suggestionVideos } from "./videoArrEls.js";

suggestionVideos.forEach((sug) => {
    const suggestionContainer = document.createElement("div");
    suggestionContainer.classList.add("sug-container");
    suggestions.appendChild(suggestionContainer);

    const thumbnailDiv = document.createElement("div");
    thumbnailDiv.classList.add("thumbnail-div");
    suggestionContainer.appendChild(thumbnailDiv);

    const sugThumbnail = document.createElement("img");
    sugThumbnail.src = sug.thumbnailDisplay;
    sugThumbnail.classList.add("sug-thumbnail");
    thumbnailDiv.appendChild(sugThumbnail);
    sugThumbnail.addEventListener("mouseover", () => {
        sugThumbnail.src = sug.onHover;
        sugThumbnail.addEventListener("mouseleave", () => {
            sugThumbnail.src = sug.thumbnailDisplay;
        })
    })

    const detailsDiv = document.createElement("div");
    detailsDiv.classList.add("details-div");
    suggestionContainer.appendChild(detailsDiv);

    const titleDiv = document.createElement("div");
    titleDiv.classList.add("title-div");
    detailsDiv.appendChild(titleDiv);

    const sugTitle = document.createElement("span");
    sugTitle.textContent = sug.videosTitle;
    sugTitle.classList.add("sug-title");
    titleDiv.appendChild(sugTitle);

    const sugUploader = document.createElement("span");
    sugUploader.textContent = sug.uploader;
    sugUploader.classList.add("sug-uploader");
    detailsDiv.appendChild(sugUploader);

    const sugViewsCount = document.createElement("span");
    // sugViewsCount.textContent = sug.viewsCount;
    if (sug.viewsCount > 1000000){
        sugViewsCount.textContent = `${Math.floor(sug.viewsCount / 1000000)}M views `
    } else if (sug.viewsCount > 1000){
        sugViewsCount.textContent = `${Math.floor(sug.viewsCount / 1000)}K views `
    } else if (sugViewsCount < 1000){
        sugViewsCount.textContent = `${sug.viewsCount} views `;
    }
    sugViewsCount.classList.add("sug-views-count");
    detailsDiv.appendChild(sugViewsCount);

    const sugPostAge = document.createElement("span");
    sugPostAge.textContent = `· ${sug.uploadAge}`;
    sugPostAge.classList.add("sug-post-age");
    detailsDiv.appendChild(sugPostAge);
})