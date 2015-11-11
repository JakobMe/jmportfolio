<!DOCTYPE html>
<html id="computer" lang="en">
	<head>
		<title>jmportfolio — -bash — 80x24</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0">
		<meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="description" content="Jakob Metzger's online portfolio">
        <meta name="keywords" content="jakob, metzger, portfolio, frontend, developer, design, graphic">
		<meta charset="utf-8">
		<link rel="apple-touch-icon" sizes="57x57" href="img/favicon/apple-touch-icon-57x57.png?v=1">
        <link rel="apple-touch-icon" sizes="60x60" href="img/favicon/apple-touch-icon-60x60.png?v=1">
        <link rel="apple-touch-icon" sizes="72x72" href="img/favicon/apple-touch-icon-72x72.png?v=1">
        <link rel="apple-touch-icon" sizes="76x76" href="img/favicon/apple-touch-icon-76x76.png?v=1">
        <link rel="apple-touch-icon" sizes="114x114" href="img/favicon/apple-touch-icon-114x114.png?v=1">
        <link rel="apple-touch-icon" sizes="120x120" href="img/favicon/apple-touch-icon-120x120.png?v=1">
        <link rel="apple-touch-icon" sizes="144x144" href="img/favicon/apple-touch-icon-144x144.png?v=1">
        <link rel="apple-touch-icon" sizes="152x152" href="img/favicon/apple-touch-icon-152x152.png?v=1">
        <link rel="apple-touch-icon" sizes="180x180" href="img/favicon/apple-touch-icon-180x180.png?v=1">
        <link rel="icon" type="image/png" href="img/favicon/favicon-32x32.png?v=1" sizes="32x32">
        <link rel="icon" type="image/png" href="img/favicon/favicon-194x194.png?v=1" sizes="194x194">
        <link rel="icon" type="image/png" href="img/favicon/favicon-96x96.png?v=1" sizes="96x96">
        <link rel="icon" type="image/png" href="img/favicon/android-chrome-192x192.png?v=1" sizes="192x192">
        <link rel="icon" type="image/png" href="img/favicon/favicon-16x16.png?v=1" sizes="16x16">
        <link rel="manifest" href="img/favicon/manifest.json?v=1">
        <link rel="mask-icon" href="img/favicon/safari-pinned-tab.svg?v=1" color="#57b76e">
        <link rel="shortcut icon" href="img/favicon/favicon.ico?v=1">
        <meta name="apple-mobile-web-app-title" content="jmportfolio">
        <meta name="application-name" content="jmportfolio">
        <meta name="msapplication-TileColor" content="#57b76e">
        <meta name="msapplication-TileImage" content="img/favicon/mstile-144x144.png?v=1">
        <meta name="msapplication-config" content="img/favicon/browserconfig.xml?v=1">
        <meta name="theme-color" content="#57b76e">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Code+Pro:400" type="text/css" />
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
        <link rel="stylesheet" href="css/style.min.css?v=1" type="text/css" />
        <script type="text/javascript" src="js/scripts.min.js?v=1"></script>
	</head>
	<body>
    	<div id="terminal">
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
            <div class="section" id="output"></div>
        	<div class="section" id="input">
            	<p>
                	<span class="prompt"><b>jmportfolio</b>:~ <small>guest$</small> </span>
                	<span id="input-before"></span>
                	<span id="input-current" class="cursor blink">&nbsp;</span>
                    <span id="input-after"></span>
            	</p>
        	</div>
    	</div>
    	<div id="navigation">
        	<ul>
            	<li><b id="type-mobile"><span>type</span></b></li>
        	</ul>
        	<form method="post" action="">
            	<input type="text" name="command" id="input-mobile">
            	<input type="submit" name="execute" value="execute">
            </form>
    	</div>
	</body>
</html>