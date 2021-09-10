const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="../index.css">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>YouTube Clone</title>
</head>
<body class = "scrollbar" id="body">

    <div class="main-container" id="main-container">
        <header class="header">
            <div class="logo-section">
                <!-- I put the logo in the sidebar in absolute position so that it won't get behind the sidebar, I hope I could fix this -->
            </div> 
            <div class="search-bar-section">
                <form>
                    <input type="text" name="seach-bar" placeholder="Search">
                    <button type="submit" id="search-btn"><span class="material-icons-sharp">search</span></button>
                    <div class="microphone" id="microphone"><span class="material-icons-sharp">mic</span></div>
                </form>
            </div>
            <div class="others-section">
                <button type="submit" id="search-btn-850px"><span class="material-icons-sharp">search</span></button>
                <div class="microphone" id="microphone-850px"><span class="material-icons-sharp">mic</span></div>
                <a href="#" class="head-link"><span class="material-icons-outlined">video_call</span></a>
                <a href="#" class="head-link"><span class="material-icons-outlined">apps</span></a>
                <a href="#" class="head-link"><span class="material-icons-outlined">notifications</span></a>
                <a href="#" class="head-link profile-link"><img src="../imgs/profile.jpg"></a>
            </div>
        </header>

        <nav class="sidebar">
            <a href="../home/index.html"><img src="../imgs/logo.png"></a>
            <button class="sidebar-btn menu-btn" id="menu-btn">
                <span class="side-icon material-icons-sharp">menu</span>
            </button>
            <button class="sidebar-btn home-btn" id="home-btn">
                <span class="home-icon side-icon material-icons-outlined">home</span>
                <span class="label">Home</span>
            </button>
            <button class="sidebar-btn explore-btn" id="explore-btn">
                <span class="side-icon material-icons">explore</span>
                <span class="label">Explore</span>
            </button>
            <button class="sidebar-btn sub-btn" id = "sub-btn">
                <span class="side-icon material-icons-outlined">subscriptions</span>
                <span class="label">Subscriptions</span>
            </button>
            <button class="sidebar-btn library-btn" id = "lib-btn">
                <span class="side-icon material-icons-outlined">video_library</span>
                <span class="label">Library</span>
            </button>
        </nav>
    </div>


    <!-- Menu section -->
    <div class="menu-section" id="menu-section">
        <div class="off-sidebar-container" id="menu-section-sidebar">
            
            <div class="off-sidebar off-menu-logo">
                <button class="off-sidebar-btn off-menu-btn close-menu" id="off-menu-btn">
                    <span class="side-icon material-icons-sharp">menu</span>
                </button>
                <a href="#"><img src="../imgs/logo.png"></a>
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

import { startUp } from "../sidebar.js"

startUp();

`