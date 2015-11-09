<!DOCTYPE html>
<html>
    
    <!--Head-->
	<head>
    	
    	<!--Meta-->
		<title>jmportfolio — bash — 80x24</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0" />
        <meta name="description" content="Jakob Metzger's online portfolio">
        <meta name="keywords" content="Jakob, Metzger, Portfolio">
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
            
            <!--Logo-->
            <p><a id="logo" href="."></a></p>
            
        	<!--Welcome-->
        	<h1>Welcome to <b>jmportfolio</b>.de!</h1>
            <p>This is Jakob Metzger's personal online portfolio.</p>
        	
        	<!--Introduction-->
        	<p>
            	Press <dfn>left</dfn> and <dfn>right</dfn> arrow keys to move the cursor.<br/>
            	Press <dfn>up</dfn> and <dfn>down</dfn> arrow keys to navigate your command history.<br/>
            	Press <dfn>tab</dfn> to autocomplete filenames.<br/>
            	Press <dfn>enter</dfn> to execute your <i>command</i>.
        	</p>
        	
        	<!--Hint-->
        	<p>
            	<u>Hint:</u> Use the <i>help</i> command to list all available commands.
        	</p>
        	
        	<!--Command: help-->
        	<p>
            	<span class="prompt"><b>jmportfolio</b>:~ <u>guest$</u> help</span>
        	</p>
        	
        	<!--Output: help-->
        	<blockquote>
            	<i>ls</i> — List files<br/>
            	<i>cd</i> — Change directory<br/>
            	<i>cat</i> — Display file content<br/>
            	<i>help</i> — Display this help<br/>
            	<i>mail</i> — Send a message<br/>
            	<i>clear</i> — Clear terminal<br/>
            	<i>notice</i> — Display legal information<br/>
            	<br/>
            	<u>hint:</u> Type your <i>command</i> below and press <dfn>enter</dfn> to execute it.
        	</blockquote>
        	
        	<!--Command: ssh-->
        	<p>
            	<span class="prompt"><b>jmportfolio</b>:~ <u>guest$</u> ssh</span>
        	</p>
        	
        	<!--Output: ssh-->
        	<blockquote>
            	ssh: <strong>Command not found</strong>. Use <i>help</i>
            	to list available <i>commands</i>.<br/>
        	</blockquote>
        	
        	<!--Command: ls-->
        	<p>
            	<span class="prompt"><b>jmportfolio</b>:~ <u>guest$</u> ls</span>
        	</p>
        	
        	<!--Output: ls-->
        	<blockquote>
            	<dfn>project01.jpg</dfn><br/>
            	<dfn>project02.jpg</dfn><br/>
            	<dfn>project03.jpg</dfn><br/>
            	<dfn>project04.jpg</dfn><br/>
            	<dfn>project05.jpg</dfn><br/>
            	<dfn>project06.jpg</dfn><br/>
            	<dfn>project07.jpg</dfn>
        	</blockquote>
        	
        	<!--Command-->
        	<p>
            	<span class="prompt"><b>jmportfolio</b>:~ <u>guest$</u> cat</span>
        	</p>
        	
        	<!--Output-->
        	<blockquote>
            	cat: <strong>You must specify a file to display</strong>.<br/>
            	<u>usage:</u> <i>cat</i> <dfn>filename</dfn>
        	</blockquote>
        	
        	<!--Command-->
        	<p>
            	<span class="prompt"><b>jmportfolio</b>:~ <u>guest$</u></span>
            	<span class="cursor blink">&nbsp;</span>
        	</p>

    	</article>
    	
	</body>
	
</html>