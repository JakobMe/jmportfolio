/*
 * JMPortfolio Terminal Script.
 * @author Jakob Metzger <jakob.me@gmail.com>
 * @copyright 2015 Jakob Metzger
 */

/*
 * Wait for document to be ready.
 * Allow functions and listeners to be called once the document is ready,
 * initialize constants and objects.
 */
$(document).ready(function() {
    
    // Constants: IDs
    var ID_COMPUTER         = "#computer";
    var ID_LOGO             = "#logo";
    var ID_INTRO_TITLE      = "#intro-title";
    var ID_INTRO_SUBTITLE   = "#intro-subtitle";
    var ID_INTRO_HINT       = "#intro-hint";
    var ID_OUTPUT           = "#output";
    var ID_INPUT            = "#input";
    var ID_INPUT_CURRENT    = "#input-current";
    var ID_INPUT_BEFORE     = "#input-before";
    var ID_INPUT_AFTER      = "#input-after";
    var ID_INPUT_MOBILE     = "#input-mobile";
    var ID_LAST_ADDED       = "#output > p:last-of-type";
    var ID_COUNTDOWN        = "#countdown";
    var ID_NAVIGATION       = "#navigation";
    var ID_TYPE_MOBILE      = "#type-mobile";
    var ID_LIGHTBOX         = "#lightbox";
    var ID_LIGHTBOX_CAPTION = "#lightbox-caption";
    var ID_OVERLAY          = "#overlay";
    
    // Constants: CSS-classes
    var CLASS_TYPE          = "type";
    var CLASS_BLINK         = "blink";
    var CLASS_READY         = "ready";
    var CLASS_ABSOLUTE      = "absolute";
    var CLASS_LIGHTBOX      = "lightbox";
    var CLASS_VISIBLE       = "visible";
    var CLASS_NO_SCROLL     = "no-scroll";
    
    // Constants: Events
    var EVENT_CLICK         = "click";
    var EVENT_KEYDOWN       = "keydown";
    
    // Constants: HTML attributes
    var ATTR_SRC            = "src";
    var ATTR_TOP            = "top";
    var ATTR_WIDTH          = "width";
    var ATTR_STYLE          = "style";
    var ATTR_TITLE          = "title";
    var ATTR_HEIGHT         = "height";
    var ATTR_DATA_ZOOM      = "data-zoom";
    var ATTR_DATA_WIDTH     = "data-width";
    var ATTR_DATA_HEIGHT    = "data-height";
    
    // Constants: HTML tag names
    var TAG_P               = "p";
    var TAG_B               = "b";
    var TAG_I               = "i";
    var TAG_U               = "u";
    var TAG_EM              = "em";
    var TAG_UL              = "ul";
    var TAG_LI              = "li";
    var TAG_IMG             = "img";
    var TAG_INS             = "ins";
    var TAG_DFN             = "dfn";
    var TAG_SPAN            = "span";
    var TAG_BODY            = "body";
    var TAG_HTML            = "html";
    var TAG_SMALL           = "small";
    var TAG_BLOCKQUOTE      = "blockquote";
    var TAG_STRONG          = "strong";
    
    // Constants: HTML jQuery tags
    var HTML_DIV            = "<div/>";
    var HTML_IMG            = "<img/>";
    
    // Constants: Output texts
    var TEXT_COMMA          = ", ";
    var TEXT_DIVIDE         = " — ";
    var TEXT_PROMPT         = ":~ ";
    var TEXT_COMMAND_AFTER  = ": ";
    var TEXT_BREAK          = "<br/>";
    var TEXT_USER           = "guest$";
    var TEXT_TITLE          = "jmportfolio";
    var TEXT_ENTER          = "enter";
    var TEXT_LEFT           = "left";
    var TEXT_RIGHT          = "right";
    var TEXT_UP             = "up";
    var TEXT_DOWN           = "down";
    var TEXT_TAB            = "tab";
    var TEXT_PRESS          = "Press ";
    var TEXT_FILENAME       = "filename";
    var TEXT_UNDEFINED      = "undefined";
    var TEXT_COMMAND        = "command";
    var TEXT_COMMANDS       = "commands";
    var TEXT_FILES          = "files";
    var TEXT_LETTERS        = "Letters ";
    var TEXT_NUMBERS        = "numbers ";
    var TEXT_PUNCTUATION    = "punctuation ";
    var TEXT_AZ             = "[a-z]";
    var TEXT_09             = "[0-9]";
    var TEXT_SPCHARS        = "[._-]";
    var TEXT_NOT_FOUND      = "' not found";
    var TEXT_AVAIL_COMMANDS = "Available commands:";
    var TEXT_AVAIL_FILES    = "Available files:";
    var TEXT_COM_NOT_FOUND  = "Command not found";
    var TEXT_CONTENT_OF     = "Content of ";
    var TEXT_ERROR_SERVER   = "Error: Lost connection to server";
    var TEXT_INTERNET       = " Make sure you are connected to the internet.";
    var TEXT_SPECIFY_FILE   = "You must specify a file to display";
    var TEXT_ALLOWED        = "Allowed input:";
    var TEXT_FILE           = "File '";
    var TEXT_HINT           = "Hint:";
    var TEXT_USAGE          = "Usage:";
    var TEXT_TYPE           = "Type your ";
    var TEXT_HELP           = "help";
    var TEXT_USE            = " Use ";
    var TEXT_AND            = " and ";
    var TEXT_MOVE_CURSOR    = " arrow keys to move the cursor";
    var TEXT_HISTORY        = " arrow keys to navigate your command history";
    var TEXT_AUTOCOMPLETE   = " to autocomplete filenames/commands";
    var TEXT_EXECUTE_YOUR   = " to execute your ";
    var TEXT_LIST_AVAILABLE = " to list available ";
    var TEXT_BELOW_PRESS    = " below and press ";
    var TEXT_TO_EXECUTE     = " to execute it.";
    
    // Constants: Commands
    var COMMAND_FILES       = "files";
    var COMMAND_OPEN        = "open";
    var COMMAND_HELP        = "help";
    var COMMAND_CLEAR       = "clear";
    var COMMAND_RANDOM      = "random";
    var COMMAND_ABOUT       = "about";
    var COMMAND_CONTACT     = "contact";
    var COMMAND_LEGAL       = "legal";
    var COMMAND_ALL         = "-a";
    
    // Constants: Strings for AJAX calls
    var AJAX_OPEN           = "php/open.php";
    var AJAX_FILES          = "php/files.php";
    var AJAX_POST           = "POST";
    var AJAX_JSON           = "json";
    var AJAX_TXT            = "txt";
    var AJAX_TH             = "-th";
    
    // List of available commands
    var commands = [
        [COMMAND_HELP,    "Display this help"],
        [COMMAND_FILES,   "List all available files"],
        [COMMAND_OPEN,    "Display file content"],
        [COMMAND_ABOUT,   "Show info about me"],
        [COMMAND_CONTACT, "Show contact info"],
        [COMMAND_LEGAL,   "Show legal disclosure"],
        [COMMAND_RANDOM,  "Display random file"],
        [COMMAND_CLEAR,   "Clear terminal"]
    ];
    
    // Constants: Times
    var TIME_TYPE           = 0;
    var TIME_SCROLL         = 250;
    var TIME_SECOND         = 1000;
    var TIME_PAUSE          = 2000;
    
    // Constants: Key-codes
    var KEY_BACKSPACE       = 8;
    var KEY_TAB             = 9;
    var KEY_ENTER           = 13;
    var KEY_SPACE           = 32;
    var KEY_LEFT            = 37;
    var KEY_UP              = 38;
    var KEY_RIGHT           = 39;
    var KEY_DOWN            = 40;
    var KEY_A               = 65;
    var KEY_Z               = 90;
    var KEY_0               = 48;
    var KEY_9               = 57;
    var KEY_NBSP            = 160;
    var KEY_DASH            = 189;
    var KEY_DASH_FIREFOX    = 173;
    var KEY_DOT_UPPER       = 186;
    var KEY_DOT_LOWER       = 190;
    
    // Constants: Characters
    var CHAR_NBSP           = String.fromCharCode(KEY_NBSP);
    var CHAR_EMPTY          = "";
    var CHAR_SPACE          = " ";
    var CHAR_DOT            = ".";
    var CHAR_DASH           = "-";
    var CHAR_UNDERSCORE     = "_";
    var CHAR_SLASH          = "/";
    var CHAR_LT             = "<";
    var CHAR_GT             = ">";
    
    // Initialize important jQuery objects
    var body                = $(TAG_BODY);
    var bodyhtml            = $(TAG_BODY + TEXT_COMMA + TAG_HTML);
    var computer            = $(ID_COMPUTER);
    var navigation          = $(ID_NAVIGATION);
    var logo                = $(ID_LOGO);
    var introTitle          = $(ID_INTRO_TITLE);
    var introSubtitle       = $(ID_INTRO_SUBTITLE);
    var introHint           = $(ID_INTRO_HINT);
    var output              = $(ID_OUTPUT);
    var input               = $(ID_INPUT);
    var inputBefore         = $(ID_INPUT_BEFORE);
    var inputCurrent        = $(ID_INPUT_CURRENT);
    var inputAfter          = $(ID_INPUT_AFTER);
    var inputMobile         = $(ID_INPUT_MOBILE);
    var lightbox            = $(ID_LIGHTBOX);
    var lightboxCaption     = $(ID_LIGHTBOX_CAPTION);
    var overlay             = $(ID_OVERLAY);
    
    // Command history
    var history = [];
    var historyLast = CHAR_EMPTY;
    var historyCurrent = history.length;
    
    // Initialize list of available files, file cache and scroll-allowance
    var files = [];
    var cache = [];
    var scroll = true;
    
    // Check for mobile devices
    var isMobileDevice =
        (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i)
            .test(navigator.userAgent);
    
    /**
     * Function: Get file list.
     * If global file-array is empty, make an AJAX call to
     * retrieve a list of available files; return array of files.
     * @param {boolean} showHidden Include hidden files
     * @returns {array|boolean} Array of available files or false
     */
    function getFileList(showHidden) {
        
        // Initialize empty file array
        var foundFiles = [];
        
        // If current file list is empty (or a new one is requested)
        if ((files.length === 0) || (showHidden === true)) {
            
            // Make AJAX call to PHP script
            $.ajax({
                async: false,
                url: AJAX_FILES,
                data: { reveal: showHidden },  
                type: AJAX_POST,
                dataType: AJAX_JSON,
                success: function(response) {
                    
                    // Save or delete global file list
                    if (showHidden === true) { files = []; }
                    else { files = response; }
                    
                    // Save file list for return
                    foundFiles = response;
                },
                error: function() {
                    
                    // Return false if an error occured
                    foundFiles = false;
                }
            });
        
        // If a legit file list exists, use it instead
        } else {
            foundFiles = files;
        }
        
        // Return global file list
        return foundFiles;
    }
    
    /**
     * Function: Print file list.
     * Fetches list of all available files and appends it
     * to the output container.
     * @param {boolean} showHidden Include hidden files
     */
    function printFileList(showHidden) {
        
        // Initialize empty output
        var listOutput = CHAR_EMPTY;
        
        // Get available files
        var fileList = getFileList(showHidden);
        
        // If an error occured while fetching file list
        if (fileList === false) {
            
            // Print connection error
            printConnectionError(COMMAND_FILES);
    
        // If a file list is found
        } else {
            
            // Iterate all files, add name to output
            $.each(fileList, function(key, value) {
                var tag = TAG_INS;
                if (value.substring(0, 1) === CHAR_DOT) { tag = TAG_SMALL; }
                listOutput += htmlTag(tag, value) + TEXT_BREAK;
            });
            
            // Append output
            output.append(
                htmlTag(
                    TAG_BLOCKQUOTE,
                    htmlTag(TAG_SMALL, TEXT_AVAIL_FILES) +
                    TEXT_BREAK + TEXT_BREAK + listOutput
                )
            );
        }
    }
    
    /**
     * Function: Print file content.
     * Creates file output for given filename and content;
     * starts terminal reset countdown if hidden file was displayed.
     * @param {string} fileName Name of file
     * @param {string} fileContent Content of file
     * @param {boolean} showHidden A hidden file is printed
     */
    function printFileContent(fileName, fileContent, showHidden) {
        
        // Output title
        var outputTitle = htmlTag(
            TAG_P,
            htmlTag(
                TAG_SMALL,
                TEXT_CONTENT_OF + fileName + TEXT_COMMAND_AFTER
            )
        );
        
        // Append file content to output
        output.append(
            htmlTag(
                TAG_BLOCKQUOTE,
                outputTitle + fileContent
            )
        );
        
        // If hidden file was opened
        if (showHidden) {
            
            // Set a countdown
            setTimeout(function() {
                
                // Clear terminal
                executeCommand(COMMAND_CLEAR);
                
                // Reset history
                history = [];
                historyLast = CHAR_EMPTY;
                historyCurrent = history.length;
                
            }, animateCountdown());
        }
    }

    /*
     * Function: Preload file images.
     * Creates a hidden jQuery object from HTML string, finding all images
     * and preloading them; preloads fullsize images for thumbnails, halves
     * image dimensions on mobile devices.
     * @param {string} html String of HTML to fix
     * @returns {string} Fixed HTML-string
     */
    function preloadFileImages(html) {
        
        // Create jQuery object for html, find images
        var input = $(HTML_DIV).html(html);
        var images = input.find(TAG_IMG);
        
        // Iterate all images
        images.each(function() {
            
            // Get image source and lengths of source
            var imgSrc = $(this).attr(ATTR_SRC).split(CHAR_DOT);
            var imgSrcLen = imgSrc[0].length;
            var imgSrcZoomLen = (imgSrcLen - AJAX_TH.length);
            
            // If source ends with thumbnail-suffix, preload fullsize image
            if (imgSrc[0].substring(imgSrcZoomLen, imgSrcLen) === AJAX_TH) {
                
                // Compose zoom source
                var imgSrcZoom = imgSrc[0].substring(0, imgSrcZoomLen) +
                                 CHAR_DOT + imgSrc[1];
                
                // Get file name of zoom source
                var imgSrcFile = imgSrcZoom.split(CHAR_SLASH);
                imgSrcFile = imgSrcFile[imgSrcFile.length - 1];
                
                // Preload zoom image, add source to image attributes
                $(this).attr(ATTR_DATA_ZOOM, imgSrcZoom);
                $(this).attr(ATTR_TITLE, imgSrcFile);
                $(HTML_IMG)[0].src = imgSrcZoom;
            }
            
            // Halve width and height on mobile devices
            if (isMobileDevice) {
                var imageWidth = Math.floor($(this).attr(ATTR_WIDTH) / 2);
                var imageHeight = Math.floor($(this).attr(ATTR_HEIGHT) / 2);
                $(this).attr(ATTR_WIDTH, imageWidth);
                $(this).attr(ATTR_HEIGHT, imageHeight);
            }
        });
            
        // Return fixed html
        return input.html();
    }
    
    /**
     * Function: Open file.
     * Searches for given filename in list of available files
     * and file cache, tries to open that file with an AJAX call to
     * display its content, throws error message if file is not found.
     * @param {string} filename Name of file to open
     * @return {boolean} False if AJAX error, else true
     */
    function openFile(filename) {
        
        // Initialize found file and 'show hidden' as false
        var foundFile = false;
        var showHidden = false;
        
        // If filename starts with '.', include hidden files
        if (filename.substring(0, 1) === CHAR_DOT) { showHidden = true; }
        
        // If file is already cached
        if (typeof cache[filename] !== TEXT_UNDEFINED) {
            
            // Print cached file content
            printFileContent(filename, cache[filename], showHidden);
            
            // Return success
            return true;
            
        // If file is not yet cached
        } else {
            
            // Get available files
            var fileList = getFileList(showHidden);
            
            // If an error occured during file list
            if (fileList === false) {
                
                // Exit function
                return false;
                
            // If no error occured
            } else {
                
                // Iterate all files, search for file
                $.each(fileList, function(key, value) {
                    if (value === filename) { foundFile = filename; }
                });
                
                // If file is not found
                if (foundFile === false) {
                    
                    // Append error output
                    output.append(
                        htmlTag(
                            TAG_BLOCKQUOTE,
                            COMMAND_OPEN + TEXT_COMMAND_AFTER +
                            htmlTag(TAG_STRONG, TEXT_FILE + filename +
                            TEXT_NOT_FOUND) + CHAR_DOT + TEXT_BREAK +
                            htmlTag(TAG_U, TEXT_HINT) + TEXT_USE +
                            htmlTag(TAG_I, COMMAND_FILES) +
                            TEXT_LIST_AVAILABLE +
                            htmlTag(TAG_DFN, TEXT_FILES) + CHAR_DOT
                        )
                    );
                    
                    // Return success
                    return true;
                    
                // If file is found
                } else {
                    
                    // Make AJAX call to PHP script
                    $.ajax({
                        async: false,
                        url: AJAX_OPEN,
                        type: AJAX_POST,
                        data: { file: foundFile },
                        success: function(content) {
                            
                            // Fix file images
                            content = preloadFileImages(content);
                            
                            // Push file to cache-array
                            if (typeof cache[foundFile] === TEXT_UNDEFINED) {
                                cache[foundFile] = content;
                            }
                            
                            // Print file content
                            printFileContent(foundFile, content, showHidden);
                            
                            // Return success
                            return true;
                        },
                        error: function() {
                            
                            // Exit function if an error occured
                            return false;
                        }
                    });
                }
            }
        }
    }
    
    /**
     * Function: Compose HTML tag.
     * Encases given content string in given
     * HTML tag and returns it.
     * @param {string} tag HTML-tag to use
     * @param {string} content Text to insert
     * @returns {string} Composed output
     */
    function htmlTag(tag, content) {
        
        // Return composed HTML tag
        return CHAR_LT + tag + CHAR_GT + content +
               CHAR_LT + CHAR_SLASH + tag + CHAR_GT;
    }
    
    /**
     * Function: Scroll to bottom.
     * Scrolls the page to the bottom, if it has not
     * been scrolled recently; locks and unlocks scrolling.
     */
    function scrollToBottom() {
        
        // If scrolling is not locked
        if (scroll) {
            
            // Lock scroll
            scroll = false;
            
            // Scroll to bottom
            bodyhtml.animate({
                scrollTop: $(document).height()
            }, TIME_SCROLL);
            
            // Unlock scrolling
            setTimeout(function() {
                scroll = true;
            }, (TIME_SCROLL * 2));
        }
    }
    
    /**
     * Function: Pause blinking of cursor.
     * Removes the "blink"-class form the cursor
     * and adds it again two seconds later, causing a short
     * pause of the blinking animation.
     */
    function pauseCursorBlink() {
        
        // Remove and add "blinking"-class
        inputCurrent.removeClass(CLASS_BLINK);
        setTimeout(function() {
            inputCurrent.addClass(CLASS_BLINK);
        }, TIME_PAUSE);
    }
    
    /**
     * Function: Animate countdown.
     * Decrements the displayed time of a countdown element
     * every second until it reaches zero.
     * @returns {number} Remaining countdown time in milliseconds
     */
    function animateCountdown() {
        
        // Get countdown element and current time
        var countdown = $(ID_COUNTDOWN);
        var timeCurrent = parseInt(countdown.text());

        // If countdown is not yet finished
        if (timeCurrent > 0) {
            
            // Wait a second, reduce current time and restart function
            setTimeout(function() {
                countdown.text(timeCurrent - 1);
                animateCountdown();
            }, TIME_SECOND);
        }
        
        // Return time in milliseconds
        return (timeCurrent * TIME_SECOND);
    }
    
    /**
     * Function: Animate typing a text.
     * Inserts a text character by character to a container to
     * animate someone typing it.
     * @param {object} container jQuery object to apply function to
     * @param {callback} callback Function to execute after finishing
     */
    function typeText(container, callback) {

        // Get initial text, strip multiple spaces
        var text = container.html().replace(/ +/g, CHAR_SPACE);
        
        // Empty container and show it
        container.html(CHAR_EMPTY);
        container.removeClass(CLASS_TYPE);
        
        // Initialize textlength, index and timeout function
        var textLength = text.length;
        var index = 0;
        var timeout;
        
        // Add blinking cursor to container
        container.addClass(CLASS_BLINK);
        
        // Type function
        (function typeIt() {
            
            // Set timeout function
            timeout = setTimeout(function() {
                
                // Increase index, get text to insert
                index++;
                var type = text.substring(0, index);
                
                // Insert text, run function
                container.html(type);
                typeIt();
                
                // Stop function if finished
                if (index >= textLength) {
                    container.removeClass(CLASS_BLINK);
                    clearTimeout(timeout);
                    callback();
                }
        
            }, TIME_TYPE);
            
        }());
    }
    
    /**
     * Function: Create navigation.
     * Checks for mobile device and fills the navigation
     * with available commands; removes 'type' command on non-mobile.
     */
    function createNavigation() {
        
        // If a mobile device is detected, remove initial navigation list
        if (!isMobileDevice) {
            navigation.children(TAG_UL).html(CHAR_EMPTY);
        }
            
        // Iterate all available commands
        $.each(commands, function(key, value) {
            
            // Add command to mobile navigation
            navigation.children(TAG_UL).append(
                htmlTag(
                    TAG_LI,
                    htmlTag(
                        TAG_I,
                        htmlTag(
                            TAG_SPAN,
                            value[0]
                        )
                    )
                )
            );
        });
    }
    
    /**
     * Function: Autocomplete.
     * Searches in an array of possible values, tries to match
     * a given needle to a value, returns autocompleted matching
     * value or false, if none is found.
     * @param {array} search Array of possible values
     * @param {string} needle Keyword to autocomplete
     * @returns {string|boolean} Autocompleted value or false if none is found
     */
    function autocomplete(search, needle) {
        
        // Initialize autocompleted values as empty array
        var autocompleted = [];
        
        // Iterate search-array, push matching values to array
        $.each(search, function(key, value) {
            
            // If value is an array itself, replace with first value
            if (Array.isArray(value)) { value = value[0]; }
            
            // Search array
            if (value.substring(0, needle.length) === needle) {
                
                // Push autocomplete value
                autocompleted.push(value);
            }
        });
        
        // If a value to autocomplete was found
        if (autocompleted.length > 0) {
            
            // If there are multiple matching values
            if (autocompleted.length > 1) {
                
                // Initialize variables for finding shared string
                var ac = autocompleted.concat().sort();
                var ac1 = ac[0];
                var ac2 = ac[ac.length - 1];
                var acL = ac1.length;
                var i = 0;
                
                // Find length of shared string
                while((ac1.charAt(i) === ac2.charAt(i)) && (i < acL)) { i++; }
                
                // Return shared string
                return ac1.substring(0, i);
                
            // If there is just a single matching value
            } else {
                
                // Return that value
                return autocompleted[0];
            }
            
        // If no value was found
        } else {
            
            // Return error
            return false;
        }
    }
    
    /**
     * Function: Replace input.
     * Clears current input command and replaces
     * it with given text.
     * @param {string} text Text to insert to input
     */
    function replaceInput(text) {
        
        // Replace current input
        inputBefore.text(text);
        inputCurrent.text(CHAR_NBSP);
        inputAfter.text(CHAR_EMPTY);
    }
    
    /**
     * Function: Print connection error.
     * Adds an error message to the output, signaling
     * a lost connection to the server; prints the used
     * command alongside the error.
     * @param {string} command Command to include in error output
     */
    function printConnectionError(command) {
        
        // Append error to output
        output.append(
            htmlTag(
                TAG_BLOCKQUOTE,
                command + TEXT_COMMAND_AFTER +
                htmlTag(TAG_STRONG, TEXT_ERROR_SERVER ) +
                CHAR_DOT + TEXT_BREAK +
                htmlTag(TAG_U, TEXT_HINT) + TEXT_INTERNET
            )
        );
    }
    
    /**
     * Function: Load command from history.
     * Loads a command from history and displays it
     * in current input field.
     * @param {boolean} backward Go backward in history, else go forward
     */
    function loadCommand(backward) {
        
        // Initialize var for loading from last typed command
        var loadLast = false;
        
        // Choose direction (forward/backward)
        if (backward === true) { historyCurrent--; }
        else if (backward === false) { historyCurrent++; }
        
        // Set boundaries for current history index
        if (historyCurrent < 0) { historyCurrent = 0; }
        if (historyCurrent >= history.length) {
            historyCurrent = history.length;
            loadLast = true;
        }
        
        // Display loaded input
        if (loadLast) { replaceInput(historyLast); }
        else { replaceInput(history[historyCurrent]); }
    }
    
    /**
     * Function: Execute command.
     * Takes a command input and tries to execute it;
     * checks if command is available/correct and creates
     * the appropriate output.
     * @param {string} command Command to execute
     */
    function executeCommand(command) {
        
        // If a command was executed
        if (command.length > 0) {
            
            // Split command by spaces
            var commandOutput;
            command = command.split(CHAR_NBSP);
            
            // If first command is "open"
            if ((command[0] === COMMAND_OPEN) &&
                (command[1] !== undefined)) {
                    
                // Keep second command
                commandOutput = command[0] + CHAR_NBSP +
                                command[1];
            
            // If first command is 'ls'
            } else if (command[0] === COMMAND_FILES &&
                      (command[1] === COMMAND_ALL)) {
                
                // Keep second command
                commandOutput = command[0] + CHAR_NBSP +
                                command[1];
            
            // Else just keep first command
            } else {
                commandOutput = command[0];
            }
            
            // Append command prompt to output
            output.append(
                htmlTag(
                    TAG_P,
                    htmlTag(TAG_B, TEXT_TITLE) + TEXT_PROMPT +
                    htmlTag(TAG_SMALL, TEXT_USER) +
                    CHAR_SPACE + commandOutput
                )
            );
            
            // Add command to history
            history.push(commandOutput);
            historyCurrent = history.length;
            historyLast = CHAR_EMPTY;
            
            // Clear current input
            inputBefore.add(inputAfter).text(CHAR_EMPTY);
            inputCurrent.text(CHAR_NBSP);
                
            // Choose behaviour by command
            switch (command[0]) {
                
                /*
                 * Command "clear".
                 * Clears the output container.
                 */
                case COMMAND_CLEAR:
                    
                    // Scroll to top, clear output
                    bodyhtml.animate({
                        scrollTop: 0 }, TIME_SCROLL,
                        function() { output.html(CHAR_EMPTY); }
                    );
                    
                    // Break
                    break;
                    
                /*
                 * Command "help".
                 * Display all available commands.
                 */
                case COMMAND_HELP:
                    
                    // Initialize output
                    var helpOutput = htmlTag(TAG_SMALL, TEXT_AVAIL_COMMANDS) +
                                     TEXT_BREAK + TEXT_BREAK;
                    
                    // Iterate commands
                    $.each(commands, function(key, value) {
                        helpOutput += htmlTag(
                            TAG_I, value[0]
                        ) + TEXT_DIVIDE +
                        value[1] +
                        TEXT_BREAK;
                    });
                    
                    // Add instruction line to output
                    helpOutput +=
                        TEXT_BREAK + TEXT_TYPE +
                        htmlTag(TAG_EM, TEXT_COMMAND) +
                        TEXT_BELOW_PRESS +
                        htmlTag(TAG_DFN, TEXT_ENTER) +
                        TEXT_TO_EXECUTE + TEXT_BREAK +
                        TEXT_BREAK;
                        
                    // Add allowed input line to output
                    helpOutput +=
                        htmlTag(TAG_U, TEXT_ALLOWED) +
                        TEXT_BREAK + TEXT_LETTERS +
                        htmlTag(TAG_DFN, TEXT_AZ) +
                        TEXT_COMMA + TEXT_NUMBERS +
                        htmlTag(TAG_DFN, TEXT_09) +
                        TEXT_COMMA + TEXT_PUNCTUATION +
                        htmlTag(TAG_DFN, TEXT_SPCHARS) +
                        CHAR_DOT + TEXT_BREAK;
                    
                    // Add hint text to output
                    helpOutput +=
                        TEXT_BREAK +
                        htmlTag(TAG_U, TEXT_HINT) +
                        TEXT_BREAK + TEXT_PRESS +
                        htmlTag(TAG_DFN, TEXT_LEFT) +
                        TEXT_AND +
                        htmlTag(TAG_DFN, TEXT_RIGHT) +
                        TEXT_MOVE_CURSOR + CHAR_DOT +
                        TEXT_BREAK + TEXT_PRESS +
                        htmlTag(TAG_DFN, TEXT_UP) +
                        TEXT_AND +
                        htmlTag(TAG_DFN, TEXT_DOWN) +
                        TEXT_HISTORY + CHAR_DOT +
                        TEXT_BREAK + TEXT_PRESS +
                        htmlTag(TAG_DFN, TEXT_TAB) +
                        TEXT_AUTOCOMPLETE + CHAR_DOT +
                        TEXT_BREAK + TEXT_PRESS +
                        htmlTag(TAG_DFN, TEXT_ENTER) +
                        TEXT_EXECUTE_YOUR +
                        htmlTag(TAG_EM, TEXT_COMMAND) +
                        CHAR_DOT;
                    
                    // Append output
                    output.append(
                        htmlTag(TAG_BLOCKQUOTE, helpOutput)
                    );
                    
                    // Break
                    break;
                
                /*
                 * Command "ls".
                 * List all files.
                 */
                case COMMAND_FILES:
                    
                    // Show hidden files if '-a' command is executed
                    var showHiddenFiles = false;
                    if (command[1] === COMMAND_ALL) { showHiddenFiles = true; }
                    
                    // Print file list
                    printFileList(showHiddenFiles);
                    
                    // Break
                    break;
                
                /*
                 * Command "open".
                 * Display file content.
                 */
                case COMMAND_OPEN:
                    
                    // If a filename is given
                    if (command[1] !== undefined) {
                        
                        // Try to open file
                        if (openFile(command[1]) === false) {
                            
                            // If an error occured, print connection error
                            printConnectionError(command[0]);
                        }
                        
                    // If no filename is given
                    } else {
                        
                        // Append error output
                        output.append(
                            htmlTag(
                                TAG_BLOCKQUOTE,
                                COMMAND_OPEN + TEXT_COMMAND_AFTER +
                                htmlTag(TAG_STRONG, TEXT_SPECIFY_FILE) +
                                CHAR_DOT + TEXT_BREAK +
                                htmlTag(TAG_U, TEXT_USAGE) + CHAR_SPACE +
                                htmlTag(TAG_EM, COMMAND_OPEN) + CHAR_SPACE +
                                htmlTag(TAG_DFN, TEXT_FILENAME)
                            )
                        );
                        
                        // Print file list
                        printFileList(false);
                    }
                    
                    // Break
                    break;
                
                /*
                 * Command "random".
                 * Display random file.
                 */
                case COMMAND_RANDOM:
                    
                    // Fetch random entry from file list
                    var filesAll = getFileList(false);
                    var fileRandom = filesAll[
                        Math.floor(Math.random() * filesAll.length)
                    ];
                    
                    // Open file
                    openFile(fileRandom);
                    
                    // Break
                    break;
                    
                /*
                 * Command "about".
                 * Display info about me.
                 */
                case COMMAND_ABOUT:
                    
                    // Open 'about.txt' file
                    openFile(COMMAND_ABOUT + CHAR_DOT + AJAX_TXT);
                    
                    // Break
                    break;
                    
                /*
                 * Command "contact".
                 * Display contact information.
                 */
                case COMMAND_CONTACT:
                    
                    // Open 'contact.txt' file
                    openFile(COMMAND_CONTACT + CHAR_DOT + AJAX_TXT);
                    
                    // Break
                    break;
                
                /*
                 * Command "legal".
                 * Display legal information.
                 */
                case COMMAND_LEGAL:
                    
                    // Open 'notice.txt' file
                    openFile(COMMAND_LEGAL + CHAR_DOT + AJAX_TXT);
                    
                    // Break
                    break;
                    
                /*
                 * Default case.
                 * Display error.
                 */
                default:
                
                    // Append error message to output
                    output.append(
                        htmlTag(
                            TAG_BLOCKQUOTE,
                            command[0] + TEXT_COMMAND_AFTER +
                            htmlTag(TAG_STRONG, TEXT_COM_NOT_FOUND) +
                            CHAR_DOT + TEXT_BREAK + htmlTag(TAG_U, TEXT_HINT) +
                            TEXT_USE + htmlTag(TAG_I, TEXT_HELP) +
                            TEXT_LIST_AVAILABLE +
                            htmlTag(TAG_EM, TEXT_COMMANDS) + CHAR_DOT
                        )
                    );
            }
        }
        
        // If there already is output
        if (output.text().length > 0) {
            
            // Fix issues with mobile navigation and absolute positioning
            var fixNavigation = 0;
            if (navigation.hasClass(CLASS_ABSOLUTE)) {
                fixNavigation = navigation.height();
            }
            
            // Scroll to last output
            bodyhtml.animate({
                scrollTop:
                    $(ID_LAST_ADDED).position().top - 20 -
                    navigation.height() + fixNavigation
                }, TIME_SCROLL
            );
        }
    }
    
    /*
     * Wait for window to load.
     * Run functions when everything is ready; these functions
     * will run just once (for example intro animations).
     */
    $(window).load(function() {
        
        // Fill navigation with available commands
        createNavigation();
        
        // Run animation functions for intro
        typeText(
            introTitle,
            function() {
                typeText(
                    introSubtitle,
                    function() {
                        typeText(
                            introHint,
                            function() {
                                logo.removeClass(CLASS_BLINK);
                                input.addClass(CLASS_READY);
                                computer.addClass(CLASS_READY);
                            }
                        );
                    }
                );
            }
        );
    });
    
    /*
     * On keydown.
     * Listen to users keydown of control and character keys;
     * control behaviour of arrow keys, enter, backspace and tab,
     * insert entered characters to input-field.
     */
    computer.on(EVENT_KEYDOWN, function(event) {
        
        // Prevent default behaviour
        event.preventDefault();
        
        // Exit function if terminal is not ready
        if (!$(this).hasClass(CLASS_READY)) { return false; }
        
        // Pause cursor blinking
        pauseCursorBlink();
        
        // Switch/case on pressed key
        switch (event.which) {
            
            /*
             * Key: Backspace.
             * Remove last character from current input.
             */
            case KEY_BACKSPACE:
            
                // If there is text before the cursor
                if (inputBefore.text().length > 0) {
                    
                    // Remove last char from before-text
                    inputBefore.text(
                        inputBefore.text().slice(
                            0, inputBefore.text().length - 1
                        )
                    );
                    
                    // Save current input
                    historyLast = inputBefore.text() +
                                  inputCurrent.text().trim() +
                                  inputAfter.text();
                }
                
                // Scroll to bottom
                scrollToBottom();
                
                // Break
                break;
                
            /*
             * Key: Tab.
             * Autocomplete filenames in current command.
             */
            case KEY_TAB:
                
                // Get current command
                var currentCommand = inputBefore.text() + inputCurrent.text() +
                                     inputAfter.text();
                
                // Trim spaces, split command
                currentCommand = currentCommand.trim().split(CHAR_NBSP);
                
                // If current command is 'open'
                if ((currentCommand[0] === COMMAND_OPEN) &&
                    (currentCommand[1] !== undefined)) {
                    
                    // Get available files
                    var fileList = getFileList(false);
                    
                    // If there occured no error
                    if (fileList !== false) {
                        
                        // Try to autocomplete filename
                        var autocompletedFile = autocomplete(
                            fileList, currentCommand[1]
                        );
                        
                        // If file was found, replace current input
                        if (autocompletedFile !== false) {
                            replaceInput(
                                COMMAND_OPEN + CHAR_NBSP +
                                autocompletedFile
                            );
                        }
                    }
                    
                // If current command is something else
                } else {
                    
                    // Try to autocomplete command
                    var autocompletedCommand = autocomplete(
                        commands, currentCommand[0]
                    );

                    // If command was found, replace current input
                    if (autocompletedCommand !== false) {
                        replaceInput(autocompletedCommand);
                    }
                }
                
                // Scroll to bottom
                scrollToBottom();
                
                // Break
                break;
                
            /*
             * Key: Enter.
             * Execute current command.
             */
            case KEY_ENTER:
                
                // If the shift key is pressed
                if (event.shiftKey) {
                    
                    // Insert a space
                    inputBefore.text(
                        inputBefore.text() + CHAR_NBSP
                    );
                    
                    // Scroll to bottom
                    scrollToBottom();
                    
                // If just enter
                } else {
                    
                    // Get current command and trim spaces
                    var command = (
                        inputBefore.text() +
                        inputCurrent.text() +
                        inputAfter.text()
                    ).trim();
                    
                    // Execute command
                    executeCommand(command);
                }
                
                // Break
                break;
                
            /*
             * Key: Left arrow.
             * Navigate to the left in current input.
             */
            case KEY_LEFT:
                
                // If there is text before the cursor
                if (inputBefore.text().length > 0) {
                    
                    // Shift current text to the right
                    if (inputAfter.text().length > 0) {
                        inputAfter.text(
                            inputCurrent.text() + inputAfter.text()
                        );
                    } else {
                        inputAfter.text(
                            inputCurrent.text().trim()
                        );
                    }
                    
                    // Replace current text
                    inputCurrent.text(inputBefore.text().slice(-1));
                    
                    // Remove from before-text
                    inputBefore.text(
                        inputBefore.text().slice(
                            0, inputBefore.text().length - 1
                        )
                    );
                }
                
                // Scroll to bottom
                scrollToBottom();
                
                // Break
                break;
            
            /*
             * Key: Right arrow.
             * Navigate to the right in current input.
             */
            case KEY_RIGHT:
                
                // If there is text after the cursor
                if ((inputCurrent.text() !== CHAR_NBSP) ||
                    (inputAfter.text().length > 0)) {
                    
                    // Shift current text to the left
                    inputBefore.text(
                        inputBefore.text() + inputCurrent.text()
                    );
                    
                    // Change empty after-text to forced space character
                    var afterText = inputAfter.text().slice(0, 1);
                    if (afterText.length === 0) {
                        afterText = CHAR_NBSP;
                    }
                    
                    // Replace current text
                    inputCurrent.text(afterText);
                    
                    // Remove from after-text
                    inputAfter.text(
                        inputAfter.text().slice(
                            1, inputAfter.text().length
                        )
                    );
                }
                
                // Scroll to bottom
                scrollToBottom();
                
                // Break
                break;
                
            /*
             * Key: Up arrow.
             * Navigate backwards in command history.
             */
            case KEY_UP:
                
                // Load previous command
                loadCommand(true);
                scrollToBottom();
                
                // Break
                break;
                
            /*
             * Key: Down arrow.
             * Navigate forwards in command history.
             */
            case KEY_DOWN:
                
                // Load next command
                loadCommand(false);
                scrollToBottom();
                
                // Break
                break;
                
            /*
             * Key: Default.
             * Append pressed key-character to current input.
             */
            default:
                
                // Get pressed character
                var input = String.fromCharCode(event.which);
                
                /*
                 * If a letter key is pressed.
                 * Convert key to letter, differ between
                 * lower- and uppercase.
                 */
                if ((event.which >= KEY_A) && (event.which <= KEY_Z)) {
                    
                    // Lower-/uppercase transformation
                    if (event.shiftKey) { input = input.toUpperCase(); }
                    else {                input = input.toLowerCase(); }
                
                /*
                 * If a number key is pressed.
                 * Convert key to number, ignore lower-/uppercase.
                 */
                } else if ((event.which >= KEY_0) && (event.which <= KEY_9)) {
                    
                    // Convert to character
                    input = String.fromCharCode(event.which);
                
                /*
                 * If the space key is pressed.
                 * Convert space to non-breaking space (nbsp) character.
                 */
                } else if (event.which === KEY_SPACE) {
                    
                    // Convert to forced space
                    input = CHAR_NBSP;
                    
                /*
                 * If dot key is pressed.
                 * Convert key to dot character.
                 */
                } else if ((event.which === KEY_DOT_LOWER) ||
                           (event.which === KEY_DOT_UPPER)) {
                    
                    // Convert to dot character
                    input = CHAR_DOT;
                    
                /*
                 * If dash key is pressed.
                 * Convert key to dash character, differ between
                 * dash and underscore.
                 */
                } else if ((event.which === KEY_DASH) ||
                           (event.which === KEY_DASH_FIREFOX)) {
                    
                    // Lower-/uppercase transformation
                    if (event.shiftKey) { input = CHAR_UNDERSCORE; }
                    else {                input = CHAR_DASH; }
                    
                /*
                 * If another key is pressed.
                 * Ignore all other keys, set input character to 'empty'.
                 */
                } else {
                    
                    // Set input to empty character
                    input = CHAR_EMPTY;
                }
                
                // Scroll to bottom, if input is legit
                if (input !== CHAR_EMPTY) { scrollToBottom(); }
                
                // Append entered character to input-field
                inputBefore.text(inputBefore.text() + input);
                
                // Save current input
                historyLast = inputBefore.text() + inputCurrent.text().trim() +
                              inputAfter.text();
        }
    });
    
    /*
     * On click on command links.
     * Executes a command on click.
     */
    body.on(EVENT_CLICK, TAG_I, function() {

        // Execute command
        executeCommand($(this).text());
    });
    
    /*
     * On click on file links.
     * Opens a file on click by 'open' command.
     */
    body.on(EVENT_CLICK, TAG_INS, function() {
        
        // Execute 'open' command
        executeCommand(
            COMMAND_OPEN + CHAR_NBSP + $(this).text()
        );
    });
    
    /*
     * On click on mobile type command or input container.
     * Focus on hidden mobile input to show mobile keyboard,
     * scroll to bottom (to show prompt).
     */
    $(ID_TYPE_MOBILE).add(input).click(function() {
        
        // Focus on mobile input, scroll to bottom
        if (isMobileDevice) {
            scrollToBottom();
            inputMobile.focus();
        }
    });
    
    /*
     * On focus-in on mobile input.
     * Add helper-class to mobile input on focus-in.
     */
    inputMobile.focusin(function() {
        navigation.addClass(CLASS_ABSOLUTE);
    });
    
    /*
     * On focus-out on mobile input.
     * Remove helper-class from mobile input on focus-out.
     */
    inputMobile.focusout(function() {
        navigation.removeClass(CLASS_ABSOLUTE);
    });
    
    /*
     * On click on lightbox thumbnails.
     * Create new image and append it to lightbox container, thus
     * displaying a zoomed in version of a thumbnail; adding classes
     * to body and overlay.
     */
    body.on(EVENT_CLICK, CHAR_DOT + CLASS_LIGHTBOX, function() {
        
        // Empty lightbox
        lightbox.html(CHAR_EMPTY);
        
        // Get image source
        var zoomSrc = $(this).attr(ATTR_DATA_ZOOM);
        
        // If image source is legit
        if ((zoomSrc !== CHAR_EMPTY) && (zoomSrc !== undefined)) {
            
            // Create jQuery image
            var zoomImg = $(HTML_IMG);
            
            // Get zoom image size
            var zoomWidth = $(this).attr(ATTR_DATA_WIDTH);
            var zoomHeight = $(this).attr(ATTR_DATA_HEIGHT);
            
            // Halve zoom image sizes if on mobile device
            if (isMobileDevice) {
                zoomWidth = (zoomWidth / 2);
                zoomHeight = (zoomHeight / 2);
            }
            
            // Show lightbox
            body.css(ATTR_TOP, -($(document).scrollTop()));
            bodyhtml.addClass(CLASS_NO_SCROLL);
            overlay.addClass(CLASS_VISIBLE);
            
            // Set zoom image attributes, set caption, append to lightbox
            lightboxCaption.text($(this).attr(ATTR_TITLE));
            zoomImg.attr(ATTR_SRC, zoomSrc);
            zoomImg.attr(ATTR_WIDTH, zoomWidth);
            zoomImg.attr(ATTR_HEIGHT, zoomHeight);
            lightbox.append(zoomImg);
        }
    });
    
    /*
     * On click on lightbox.
     * Remove images from lightbox container, remove classes from
     * body and overlay, returning to normal view.
     */
    overlay.click(function() {
        
        // Get current top position of body, remove attribute
        var scrollCurrent = -(parseInt(body.css(ATTR_TOP)));
        body.removeAttr(ATTR_STYLE);
        
        // Remove classes from lightbox and body, scroll body
        bodyhtml.removeClass(CLASS_NO_SCROLL);
        bodyhtml.scrollTop(scrollCurrent);
        
        // Hide overlay, empty lightbox
        overlay.removeClass(CLASS_VISIBLE);
        lightboxCaption.html(CHAR_EMPTY);
        lightbox.html(CHAR_EMPTY);
    });

});