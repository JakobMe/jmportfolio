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
    
    // Constants: CSS-classes
    var CLASS_TYPE          = "type";
    var CLASS_BLINK         = "blink";
    var CLASS_READY         = "ready";
    var CLASS_ABSOLUTE      = "absolute";
    
    // Constants: Events
    var EVENT_CLICK         = "click";
    var EVENT_KEYDOWN       = "keydown";
    
    // Constants: HTML tags
    var TAG_P               = "p";
    var TAG_B               = "b";
    var TAG_I               = "i";
    var TAG_U               = "u";
    var TAG_EM              = "em";
    var TAG_UL              = "ul";
    var TAG_LI              = "li";
    var TAG_INS             = "ins";
    var TAG_DFN             = "dfn";
    var TAG_SPAN            = "span";
    var TAG_BODY            = "body";
    var TAG_SMALL           = "small";
    var TAG_BLOCKQUOTE      = "blockquote";
    var TAG_STRONG          = "strong";
    
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
    var TEXT_COM_NOT_FOUND  = "Command not found";
    var TEXT_CONTENT_OF     = "Content of ";
    var TEXT_SPECIFY_FILE   = "You must specify a file to display";
    var TEXT_ALLOWED        = "Allowed input:";
    var TEXT_FILE           = "File '";
    var TEXT_HINT           = "Hint:";
    var TEXT_USAGE          = "Usage:";
    var TEXT_TYPE           = "Type your ";
    var TEXT_HELP           = "help";
    var TEXT_USE            = ". Use ";
    var TEXT_USE_ALT        = " Use ";
    var TEXT_AND            = " and ";
    var TEXT_MOVE_CURSOR    = " arrow keys to move the cursor";
    var TEXT_HISTORY        = " arrow keys to navigate your command history";
    var TEXT_AUTOCOMPLETE   = " to autocomplete filenames";
    var TEXT_EXECUTE_YOUR   = " to execute your ";
    var TEXT_LIST_AVAILABLE = " to list available ";
    var TEXT_BELOW_PRESS    = " below and press ";
    var TEXT_TO_EXECUTE     = " to execute it.";
    
    // Constants: Commands
    var COMMAND_LS          = "ls";
    var COMMAND_OPEN        = "open";
    var COMMAND_HELP        = "help";
    var COMMAND_CLEAR       = "clear";
    var COMMAND_RANDOM      = "random";
    var COMMAND_ABOUT       = "about";
    var COMMAND_CONTACT     = "contact";
    var COMMAND_DISCLOSURE  = "disclosure";
    var COMMAND_ALL         = "-a";
    
    // Constants: Strings for AJAX calls
    var AJAX_OPEN           = "php/open.php";
    var AJAX_LS             = "php/ls.php";
    var AJAX_POST           = "POST";
    var AJAX_JSON           = "json";
    var AJAX_TXT            = "txt";
    
    // List of available commands
    var commands = [
        [COMMAND_HELP,       "Display this help"],
        [COMMAND_LS,         "List all files"],
        [COMMAND_OPEN,       "Display file content"],
        [COMMAND_CLEAR,      "Clear terminal"],
        [COMMAND_RANDOM,     "Display random file"],
        [COMMAND_ABOUT,      "Show info about me"],
        [COMMAND_CONTACT,    "Show contact info"],
        [COMMAND_DISCLOSURE, "Show legal disclosure"]
    ];
    
    // Constants: Times
    var TIME_SCROLL         = 0;
    var TIME_TYPE           = 0;
    var TIME_SECOND         = 1000;
    
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
    
    // Command history
    var history = [];
    var historyLast = CHAR_EMPTY;
    var historyCurrent = history.length;
    
    // Initialize list of available files
    var files = [];
    
    /*
     * Function: Get file list.
     * If global file-array is empty, make an AJAX call to
     * retrieve a list of available files; return array of files.
     */
    function getFileList(showHidden) {
        
        // Initialize empty file array
        var foundFiles = [];
        
        // If current file list is empty (or a new one is requested)
        if ((files.length === 0) || (showHidden === true)) {
            
            // Make AJAX call to PHP script
            $.ajax({
                async: false,
                url: AJAX_LS,
                data: { reveal: showHidden },  
                type: AJAX_POST,
                dataType: AJAX_JSON,
                success: function(response) {
                    
                    // Save or delete global file list
                    if (showHidden === true) { files = []; }
                    else { files = response; }
                    
                    // Save file list for return
                    foundFiles = response;
                }
            });
        
        // If a legit file list exists, use it instead
        } else {
            foundFiles = files;
        }
        
        // Return global file list
        return foundFiles;
    }
    
    /*
     * Function: Open file.
     * Searches for given filename in list of available files,
     * tries to open that file with an AJAX call to display
     * it's content, throws error message, if file is not found.
     */
    function openFile(filename) {
        
        // Initialize found file and 'show hidden' as false
        var foundFile = false;
        var showHidden = false;
        
        // If filename starts with '.', include hidden files
        if (filename.substring(0, 1) === CHAR_DOT) { showHidden = true; }
        
        // Iterate all files, search for file
        $.each(getFileList(showHidden), function(key, value) {
            if (value === filename) { foundFile = filename; }
        });
        
        // If file is found
        if (foundFile !== false) {
            
            // Make AJAX call to PHP script
            $.ajax({
                async: false,
                url: AJAX_OPEN,
                type: AJAX_POST,
                data: { file: foundFile },
                success: function (content) {
                    
                    // Output title
                    var outputTitle = htmlTag(
                        TAG_P,
                        htmlTag(
                            TAG_SMALL,
                            TEXT_CONTENT_OF + foundFile + TEXT_COMMAND_AFTER
                        )
                    );
                    
                    // Append file content to output
                    output.append(
                        htmlTag(
                            TAG_BLOCKQUOTE,
                            outputTitle + content
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
            });
            
        // If file is not found
        } else {
            
            // Append error output
            output.append(
                htmlTag(
                    TAG_BLOCKQUOTE,
                    COMMAND_OPEN + TEXT_COMMAND_AFTER +
                    htmlTag(TAG_STRONG, TEXT_FILE + filename + TEXT_NOT_FOUND) +
                    CHAR_DOT + TEXT_BREAK +
                    htmlTag(TAG_U, TEXT_HINT) + TEXT_USE_ALT +
                    htmlTag(TAG_I, COMMAND_LS) +
                    TEXT_LIST_AVAILABLE +
                    htmlTag(TAG_DFN, TEXT_FILES) + CHAR_DOT
                )
            );
        }
    }
    
    /*
     * Function: Compose HTML tag.
     * Encases given content string in given
     * HTML tag and returns it.
     */
    function htmlTag(tag, content) {
        
        // Return composed HTML tag
        return CHAR_LT + tag + CHAR_GT + content +
               CHAR_LT + CHAR_SLASH + tag + CHAR_GT;
    }
    
    /*
     * Function: Scroll to bottom.
     * Scrolls the page to the bottom.
     */
    function scrollToBottom() {
        
        // Scroll to bottom
        body.animate({
            scrollTop: computer.height()
        }, TIME_SCROLL);
    }
    
    /*
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
        }, 2000);
    }
    
    /*
     * Function: Animate countdown.
     * Decrements the displayed time of a countdown element
     * every second until it reaches zero.
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
    
    /*
     * Function: Animate typing a text.
     * Inserts a text character by character to a container to
     * animate someone typing it.
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
    
    /*
     * Function: Create navigation.
     * Checks for mobile device and fills the navigation
     * with available commands; removes 'type' command on non-mobile.
     */
    function createNavigation() {
        
        // Check for mobile devices
        var isMobileDevice =
            (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i)
                .test(navigator.userAgent);
        
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
    
    /*
     * Function: Load command from history.
     * Loads a command from history and displays it
     * in current input field.
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
        
        // Clear current input
        inputAfter.text(CHAR_EMPTY);
        inputCurrent.text(CHAR_NBSP);
        
        // Display loaded input
        if (loadLast) { inputBefore.text(historyLast); }
        else { inputBefore.text(history[historyCurrent]); }
    }
    
    /*
     * Function: Execute command.
     * Takes a command input and tries to execute it;
     * checks if command is available/correct and creates
     * the appropriate output.
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
            } else if (command[0] === COMMAND_LS &&
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
                    htmlTag(
                        TAG_SPAN,
                        htmlTag(TAG_B, TEXT_TITLE) +
                        TEXT_PROMPT +
                        htmlTag(TAG_SMALL, TEXT_USER) +
                        CHAR_SPACE + commandOutput
                    )
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
                    
                    // Scroll to top, empty output
                    body.animate({
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
                    var helpOutput = CHAR_EMPTY;
                    
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
                case COMMAND_LS:
                    
                    // Initialize empty output
                    var showHiddenFiles = false;
                    var listOutput = CHAR_EMPTY;
                    
                    // Show hidden files if '-a' command is executed
                    if (command[1] === COMMAND_ALL) { showHiddenFiles = true; }
                    
                    // Iterate all files, add name to output
                    $.each(getFileList(showHiddenFiles), function(key, value) {
                        var tag = TAG_INS;
                        if (value.substring(0, 1) === CHAR_DOT) {
                            tag = TAG_SMALL;
                        }
                        listOutput += htmlTag(tag, value) + TEXT_BREAK;
                    });
                    
                    // Append output
                    output.append(
                        htmlTag(TAG_BLOCKQUOTE, listOutput)
                    );
                    
                    // Break
                    break;
                
                /*
                 * Command "open".
                 * Display file content.
                 */
                case COMMAND_OPEN:
                    
                    // If a filename is given
                    if (command[1] !== undefined) {
                        
                        // Open file
                        openFile(command[1]);
                        
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
                 * Command "notice".
                 * Display legal information.
                 */
                case COMMAND_DISCLOSURE:
                    
                    // Open 'notice.txt' file
                    openFile(COMMAND_DISCLOSURE + CHAR_DOT + AJAX_TXT);
                    
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
            body.animate({
                scrollTop:
                    $(ID_LAST_ADDED).offset().top - 20 -
                    navigation.height() + fixNavigation
                },
                TIME_SCROLL
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
                currentCommand = currentCommand.trim()
                    .split(CHAR_NBSP);
                
                // If current command is 'open'
                if ((currentCommand[0] === COMMAND_OPEN) &&
                    (currentCommand[1] !== undefined)) {
                    
                    // Initialize autocomplete file
                    var file = CHAR_EMPTY;
                    
                    // Iterate all available files, try autocomplete
                    $.each(getFileList(false), function(key, value) {
                        if (value.substring(0, currentCommand[1].length) ===
                            currentCommand[1]) {
                            
                            // Replace autocomplete file
                            file = value;
                        }
                    });
                    
                    // If file was found
                    if (file !== CHAR_EMPTY) {
                        
                        // Replace current command with autocompleted
                        inputBefore.text(
                            COMMAND_OPEN + CHAR_NBSP +
                            file
                        );
                        
                        // Clear end of command
                        inputCurrent.text(CHAR_NBSP);
                        inputAfter.text(CHAR_EMPTY);
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
        inputMobile.focus();
        scrollToBottom();
        
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
    
});