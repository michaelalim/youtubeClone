const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="../../dependencies/css/common.css">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>YouTube Clone</title>
</head>
<body class = "scrollbar" id="body">

    <div class="main-container-home" id="main-container">
        <header class="header" id="header-container">
            <button class="menu-btn sidebar-btn" id="menu-btn"><span class="side-icon material-icons-outlined">menu</span></button>
            <div class="logo-section">
                <a href="../home/index.html" id="head-logo"><img src="../../media/imgs/logo.png"></a>
            </div> 
            <div class="search-bar-section">
                <form>
                    <input type="text" name="seach-bar" placeholder="Search" id="search-bar">
                    <button type="submit" id="search-btn"><span class="material-icons-sharp">search</span></button>
                    <div class="microphone" id="microphone"><span class="material-icons-sharp">mic</span></div>
                </form>
            </div>
            <div class="others-section" id="others-section"></div>
        </header>

        <nav class="sidebar" id="sidebar-nav"></nav>

    <!-- Menu section -->
    <div class="menu-section" id="menu-section">
        <div class="off-sidebar-container" id="menu-section-sidebar">
            
            <div class="off-sidebar off-menu-logo">
                <button class="off-sidebar-btn off-menu-btn close-menu" id="off-menu-btn">
                    <span class="side-icon material-icons-sharp">menu</span>
                </button>
                <a href="../home/index.html"><img src="../../media/imgs/logo.png"></a>
            </div>
            <div class="section-division first-division" id="first-division"></div>
            <div class="section-division second-division" id="second-division"></div>
            <div class="section-division third-division" id="third-division">
                <h6 class="section-title">SUBSCRIPTIONS</h6>
            </div>
            <div class="section-division fourth-division" id="fourth-division">
                <h6 class="section-title">MORE FROM YOUTUBE</h6>
                <button class="off-sidebar off-btn">
                    <i class="fa off-side-icon">&#xf16a;</i>
                    <span class="off-btn-text">YouTube Premium</span>
                </button>
            </div>
            <div class="section-division fifth-division" id="fifth-division"></div>
            <div class="section-division sixth-division">
                <div class = "off-screen-bottom bottom-1" id="sixth-bottom-1"></div>
                
                <div class = "off-screen-bottom bottom-2" id="sixth-bottom-2"></div>

                <span class="copyright">© 2021 Google LLC</span>
            </div>
        </div>

    <div class="off-sidebar-space close-menu" id="off-sidebar-space">
        
    </div>
</div>


<script type="module" src="index.js"></script>  
</body>
</html>`

const js = `// this is the whole sidebar

import { startUp } from "../../dependencies/elements/sidebar.js"

startUp("");
`