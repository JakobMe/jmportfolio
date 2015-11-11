<!DOCTYPE html>
<html id="computer" lang="en">
    
    <!--Head-->
	<head>
    	
    	<!--Meta-->
		<title>jmportfolio — -bash — 80x24</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0" />
        <meta name="description" content="Jakob Metzger's online portfolio">
        <meta name="keywords" content="jakob, metzger, portfolio, frontend, developer, design, graphic">
		<meta charset="utf-8">
		
		<!--Favicon-->
		<link rel="apple-touch-icon" sizes="57x57" href="img/favicon/apple-touch-icon-57x57.png?v=XBBvRp7Q03">
        <link rel="apple-touch-icon" sizes="60x60" href="img/favicon/apple-touch-icon-60x60.png?v=XBBvRp7Q03">
        <link rel="apple-touch-icon" sizes="72x72" href="img/favicon/apple-touch-icon-72x72.png?v=XBBvRp7Q03">
        <link rel="apple-touch-icon" sizes="76x76" href="img/favicon/apple-touch-icon-76x76.png?v=XBBvRp7Q03">
        <link rel="apple-touch-icon" sizes="114x114" href="img/favicon/apple-touch-icon-114x114.png?v=XBBvRp7Q03">
        <link rel="apple-touch-icon" sizes="120x120" href="img/favicon/apple-touch-icon-120x120.png?v=XBBvRp7Q03">
        <link rel="apple-touch-icon" sizes="144x144" href="img/favicon/apple-touch-icon-144x144.png?v=XBBvRp7Q03">
        <link rel="apple-touch-icon" sizes="152x152" href="img/favicon/apple-touch-icon-152x152.png?v=XBBvRp7Q03">
        <link rel="apple-touch-icon" sizes="180x180" href="img/favicon/apple-touch-icon-180x180.png?v=XBBvRp7Q03">
        <link rel="icon" type="image/png" href="img/favicon/favicon-32x32.png?v=XBBvRp7Q03" sizes="32x32">
        <link rel="icon" type="image/png" href="img/favicon/favicon-194x194.png?v=XBBvRp7Q03" sizes="194x194">
        <link rel="icon" type="image/png" href="img/favicon/favicon-96x96.png?v=XBBvRp7Q03" sizes="96x96">
        <link rel="icon" type="image/png" href="img/favicon/android-chrome-192x192.png?v=XBBvRp7Q03" sizes="192x192">
        <link rel="icon" type="image/png" href="img/favicon/favicon-16x16.png?v=XBBvRp7Q03" sizes="16x16">
        <link rel="manifest" href="img/favicon/manifest.json?v=XBBvRp7Q03">
        <link rel="mask-icon" href="img/favicon/safari-pinned-tab.svg?v=XBBvRp7Q03" color="#57b76e">
        <link rel="shortcut icon" href="img/favicon/favicon.ico?v=XBBvRp7Q03">
        <meta name="apple-mobile-web-app-title" content="jmportfolio">
        <meta name="application-name" content="jmportfolio">
        <meta name="msapplication-TileColor" content="#57b76e">
        <meta name="msapplication-TileImage" content="img/favicon/mstile-144x144.png?v=XBBvRp7Q03">
        <meta name="msapplication-config" content="img/favicon/browserconfig.xml?v=XBBvRp7Q03">
        <meta name="theme-color" content="#57b76e">
		
		<!--Assets-->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Code+Pro:400,700" type="text/css" />
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
        
        <!--JS/CSS-->
        <link rel="stylesheet" href="css/style.min.css" type="text/css" />
        <script type="text/javascript" src="js/scripts.min.js"></script>

	</head>
	
	<!--Body-->
	<body>
    	
    	<!--Terminal-->
    	<div id="terminal">
            
            <!--Introduction-->
            <div class="section" id="intro">
                <p><a id="logo" class="blink" href="." title="Restart jmportfolio">jmportfolio</a></p>
            	<h1 id="intro-title" data-text="Welcome to <b>jmportfolio</b>.de!"></h1>
                <p id="intro-subtitle" data-text="This is Jakob Metzger's personal online portfolio.<br/>
                   <small>Copyright © 2015 Jakob Metzger.</small>">
                </p>
            	<p id="intro-hint" data-text="<u>Hint:</u><br/>Type <i>help</i>
                   and press <dfn>enter</dfn> to list all available commands.<br/>
                   You can also click on a <em>command</em> or <dfn>file</dfn> to execute/open it.">
                </p>
            </div>
            
            <!--Output-->
            <div class="section" id="output"></div>
        	
        	<!--Input-->
        	<div class="section" id="input">
            	<p>
                	<span class="prompt"><b>jmportfolio</b>:~ <small>guest$</small> </span>
                	<span id="input-before"></span>
                	<span id="input-current" class="cursor blink">&nbsp;</span>
                    <span id="input-after"></span>
            	</p>
        	</div>

    	</div>
    	
	</body>
	
</html>