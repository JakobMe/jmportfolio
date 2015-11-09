<!DOCTYPE html>
<html lang="en">
    
    <!--Head-->
	<head>
    	
    	<!--Meta-->
		<title>jmportfolio — bash — 80x24</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0" />
        <meta name="description" content="Jakob Metzger's online portfolio">
        <meta name="keywords" content="jakob, metzger, portfolio, frontend, developer, design, graphic">
		<meta charset="utf-8">
		
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
    	<article id="terminal">
            
            <!--Introduction-->
            <section class="section" id="intro">
                <p><a id="logo" href="." title="Restart jmportfolio">jmportfolio</a></p>
            	<h1>Welcome to <b>jmportfolio</b>.de!</h1>
                <p>This is Jakob Metzger's personal online portfolio.</p>
            	<p>
                	<u>Hint:</u> Type
                	<a href="#" class="execute" data-command="help"
                       title="Execute 'help' command">help</a>
                	and press <dfn>enter</dfn> to list all available commands.
                </p>
            </section>
            
            <!--Output-->
            <section class="section" id="output"></section>
            
            <!--Output
            <section class="section" id="section-output">
            	<p><span class="prompt"><b>jmportfolio</b>:~ guest<u>$</u> help</span></p>
            	<blockquote>
                	<i>list</i> — List all files<br/>
                	<i>open</i> — Display file content<br/>
                	<i>help</i> — Display this help<br/>
                	<i>clear</i> — Clear terminal<br/>
                	<i>random</i> — Display random image file<br/>
                	<i>about</i> — Display info about me<br/>
                	<i>contact</i> — Display contact information<br/>
                	<i>notice</i> — Display legal information<br/>
                	<br/>
                	Type your <i>command</i> below and press <dfn>enter</dfn> to execute it.<br/>
                	<br/>
                	<u>Allowed input:</u><br/>
                	Letters <dfn>[a-z]</dfn>, numbers <dfn>[0-9]</dfn>, punctuation <dfn>[._-]</dfn>.<br/>
                	<br/>
                	<u>Hint:</u><br/>
                	Press <dfn>left</dfn> and <dfn>right</dfn> arrow keys to move the cursor.<br/>
                	Press <dfn>up</dfn> and <dfn>down</dfn> arrow keys to navigate your command history.<br/>
                	Press <dfn>tab</dfn> to autocomplete filenames.<br/>
                	Press <dfn>enter</dfn> to execute your <i>command</i>.
            	</blockquote>
            	<p><span class="prompt"><b>jmportfolio</b>:~ guest<u>$</u> ssh</span></p>
            	<blockquote>
                	ssh: <strong>Command not found</strong>. Use <i>help</i>
                	to list available <i>commands</i>.<br/>
            	</blockquote>
            	<p><span class="prompt"><b>jmportfolio</b>:~ guest<u>$</u> ls</span></p>
            	<blockquote class="files">
                	<dfn>about.txt</dfn><br/>
                	<dfn>contact.txt</dfn><br/>
                	<dfn>notice.txt</dfn><br/>
                	<dfn>skills.dat</dfn><br/>
                	<dfn>deviantart.html</dfn><br/>
                	<dfn>01_lichtblick.jpg</dfn><br/>
                	<dfn>02_minimalicons.jpg</dfn><br/>
                	<dfn>03_aurora.jpg</dfn><br/>
                	<dfn>04_tinycons.jpg</dfn><br/>
                	<dfn>05_jakobmetzger.jpg</dfn><br/>
            	</blockquote>
            	<p><span class="prompt"><b>jmportfolio</b>:~ guest<u>$</u> cat</span></p>
            	<blockquote>
                	cat: <strong>You must specify a file to display</strong>.<br/>
                	<u>usage:</u> <i>cat</i> <dfn>filename</dfn>
            	</blockquote>
        	</section>-->
        	
        	<!--Input-->
        	<section class="section" id="input">
            	<p>
                	<span class="prompt"><b>jmportfolio</b>:~ guest<u>$</u> </span>
                	<span id="input-before"></span>
                	<span id="input-current" class="cursor blink">&nbsp;</span>
                    <span id="input-after"></span>
            	</p>
        	</section>

    	</article>
    	
	</body>
	
</html>