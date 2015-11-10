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
    
    // Constants: CSS-classes
    var CLASS_BLINK         = "blink";
    var CLASS_READY         = "ready";
    
    // Constants: HTML-attributes
    var ATTR_DATA_TEXT      = "data-text";
    
    // Constants: Events
    var EVENT_CLICK         = "click";
    var EVENT_KEYDOWN       = "keydown";
    
    // Constants: Characters
    var CHAR_EMPTY          = "";
    var CHAR_SPACE          = " ";
    var CHAR_DOT            = ".";
    var CHAR_DASH           = "-";
    var CHAR_UNDERSCORE     = "_";
    var CHAR_SLASH          = "/";
    var CHAR_LT             = "<";
    var CHAR_GT             = ">";
    
    // Constants: HTML tags
    var TAG_P               = "p";
    var TAG_B               = "b";
    var TAG_I               = "i";
    var TAG_U               = "u";
    var TAG_EM              = "em";
    var TAG_INS             = "ins";
    var TAG_DFN             = "dfn";
    var TAG_PRE             = "pre";
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
    var COMMAND_LIST        = "ls";
    var COMMAND_OPEN        = "open";
    var COMMAND_HELP        = "help";
    var COMMAND_CLEAR       = "clear";
    var COMMAND_RANDOM      = "random";
    var COMMAND_ABOUT       = "about";
    var COMMAND_CONTACT     = "contact";
    var COMMAND_NOTICE      = "notice";
    var COMMAND_ALL         = "-a";
    
    // Constants: Strings for AJAX calls
    var AJAX_OPEN           = "php/open.php";
    var AJAX_LS             = "php/ls.php";
    var AJAX_POST           = "POST";
    var AJAX_JSON           = "json";
    var AJAX_TXT            = "txt";
    
    // List of available commands
    var commands = [
        [COMMAND_LIST,    "List all files"],
        [COMMAND_OPEN,    "Display file content"],
        [COMMAND_HELP,    "Display this help"],
        [COMMAND_CLEAR,   "Clear terminal"],
        [COMMAND_RANDOM,  "Display random file"],
        [COMMAND_ABOUT,   "Display info about me (about.txt)"],
        [COMMAND_CONTACT, "Display contact information (contact.txt)"],
        [COMMAND_NOTICE,  "Display legal information (notice.txt)"]
    ];
    
    /* List of available files
    var files = [
        [FILE_TEXT, "about.txt"],
        [FILE_TEXT, "contact.txt"],
        [FILE_TEXT, "notice.txt"],
        [FILE_TEXT, "skills.dat"],
        [FILE_TEXT, "01_lichtblick.pdf"],
        [FILE_TEXT, "02_minimalicons.pdf"],
        [FILE_TEXT, "03_aurora.pdf"],
        [FILE_TEXT, "04_tinycons.pdf"],
        [FILE_TEXT, "05_jakobmetzger.pdf"],
        [FILE_HTML, "mannmitdertarnjacke.deviantart.com"],
        [FILE_HTML, "lichtblick-im-auetal.de"],
        [FILE_HTML, "spieler-internet.de"],
        [FILE_HIDE, ".fun"]
    ];*/
    
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
    
    // Initialize important jQuery objects
    var body                = $(TAG_BODY);
    var computer            = $(ID_COMPUTER);
    var logo                = $(ID_LOGO);
    var introTitle          = $(ID_INTRO_TITLE);
    var introSubtitle       = $(ID_INTRO_SUBTITLE);
    var introHint           = $(ID_INTRO_HINT);
    var output              = $(ID_OUTPUT);
    var input               = $(ID_INPUT);
    var inputBefore         = $(ID_INPUT_BEFORE);
    var inputCurrent        = $(ID_INPUT_CURRENT);
    var inputAfter          = $(ID_INPUT_AFTER);
    
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
    function getFileList() {

        // If current file list is empty
        if (files.length === 0) {
            
            // Make AJAX call to PHP script
            $.ajax({
                async: false,
                url: AJAX_LS,
                type: AJAX_POST,
                dataType: AJAX_JSON,
                success: function(data) {
                    
                    // Save file list, return it
                    files = data;
                    return data;
                }
            });
        }
        
        // Return global file list
        return files;
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
     * Function: Animate typing a text.
     * Inserts a text character by character to a container to
     * animate someone typing it.
     */
    function typeText(container, callback) {
        
        // Initialize text, textlength, index and timeout function
        var text = container.attr(ATTR_DATA_TEXT);
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
                if (index === textLength) {
                    container.removeAttr(ATTR_DATA_TEXT);
                    container.removeClass(CLASS_BLINK);
                    clearTimeout(timeout);
                    callback();
                }
        
            }, 5);
            
        }());
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
        inputCurrent.text(String.fromCharCode(KEY_NBSP));
        
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
            command = command.split(String.fromCharCode(KEY_NBSP));
            
            // If first command is "open"
            if ((command[0] === COMMAND_OPEN) &&
                (command[1] !== undefined)) {
                    
                // Keep second command
                commandOutput = command[0] +
                                String.fromCharCode(KEY_NBSP) +
                                command[1];
            
            // If first command is 'ls'
            } else if (command[0] === COMMAND_LIST &&
                      (command[1] === COMMAND_ALL)) {
                
                // Keep second command
                commandOutput = command[0] +
                                String.fromCharCode(KEY_NBSP) +
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
            inputCurrent.text(String.fromCharCode(KEY_NBSP));
                
            // Choose behaviour by command
            switch (command[0]) {
                
                /*
                 * Command "clear".
                 * Clears the output container.
                 */
                case COMMAND_CLEAR:
                    
                    // Scroll to top, empty output
                    body.animate({
                        scrollTop: 0 }, 250,
                        function() { output.html(CHAR_EMPTY); }
                    );
                    
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
                    
                    break;
                
                /*
                 * Command "ls".
                 * List all files.
                 */
                case COMMAND_LIST:
                    
                    // Initialize empty output
                    var listOutput = CHAR_EMPTY;
                    
                    // Iterate all files, add name to output
                    $.each(getFileList(), function(key, value) {
                        listOutput += htmlTag(TAG_INS, value) + TEXT_BREAK;
                    });
                    
                    // Append output
                    output.append(
                        htmlTag(TAG_BLOCKQUOTE, listOutput)
                    );
                    
                    break;
                
                /*
                 * Command "open".
                 * Display file content.
                 */
                case COMMAND_OPEN:
                    
                    // If a filename is given
                    if (command[1] !== undefined) {
                        
                        // Initialize found file as false
                        var foundFile = false;
                        
                        // Iterate all files, search for file
                        $.each(getFileList(), function(key, value) {
                            if (value === command[1]) {
                                foundFile = command[1];
                            }
                        });
                        
                        // If file is found
                        if (foundFile !== false) {
                            
                            // Get file type (extension)
                            var foundFileType = foundFile.split(CHAR_DOT);
                            foundFileType = foundFileType[1];
                            
                            // Choose encasing output tag
                            var foundFileTag = TAG_P;
                            if (foundFileType === AJAX_TXT) {
                                foundFileTag = TAG_PRE;
                            }
                            
                            // Make AJAX call to PHP script
                            $.ajax({
                                async: false,
                                url: AJAX_OPEN,
                                type: AJAX_POST,
                                data: { file: foundFile },
                                success: function (content) {
                                    
                                    // Output title
                                    var outputTitle = htmlTag(
                                        TAG_SMALL,
                                        TEXT_CONTENT_OF + foundFile +
                                        TEXT_COMMAND_AFTER
                                    );
                                    
                                    // Append file content to output
                                    output.append(
                                        htmlTag(
                                            TAG_BLOCKQUOTE,
                                            outputTitle + TEXT_BREAK +
                                            htmlTag(foundFileTag, content)
                                        )
                                    );
                                }
                            });
                            
                        // If file is not found
                        } else {
                            
                            // Append error output
                            output.append(
                                htmlTag(
                                    TAG_BLOCKQUOTE,
                                    COMMAND_OPEN + TEXT_COMMAND_AFTER +
                                    htmlTag(
                                        TAG_STRONG, TEXT_FILE + command[1] +
                                        TEXT_NOT_FOUND
                                    ) + CHAR_DOT + TEXT_BREAK +
                                    htmlTag(TAG_U, TEXT_HINT) + TEXT_USE_ALT +
                                    htmlTag(TAG_I, COMMAND_LIST) +
                                    TEXT_LIST_AVAILABLE +
                                    htmlTag(TAG_DFN, TEXT_FILES) + CHAR_DOT
                                )
                            );
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
                    }
                    
                    break;
                
                /*
                 * Command "random".
                 * Display random file.
                 */
                case COMMAND_RANDOM:
                    break;
                    
                /*
                 * Command "about".
                 * Display info about me.
                 */
                case COMMAND_ABOUT:
                    break;
                    
                /*
                 * Command "contact".
                 * Display contact information.
                 */
                case COMMAND_CONTACT:
                    break;
                
                /*
                 * Command "notice".
                 * Display legal information.
                 */
                case COMMAND_NOTICE:
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
                            command + TEXT_COMMAND_AFTER +
                            htmlTag(TAG_STRONG, TEXT_COM_NOT_FOUND) +
                            TEXT_USE + htmlTag(TAG_I, TEXT_HELP) +
                            TEXT_LIST_AVAILABLE +
                            htmlTag(TAG_EM, TEXT_COMMANDS) + CHAR_DOT
                        )
                    );
            }
        }
        
        // Scroll to bottom
        body.animate({ scrollTop: computer.height() }, 500);
    }
    
    /*
     * Wait for window to load.
     * Run functions when everything is ready; these functions
     * will run just once (for example intro animations).
     */
    $(window).load(function() {
        
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
                
                break;
                
            /*
             * Key: Tab.
             * Autocomplete filenames in current command.
             */
            case KEY_TAB:
                
                // Get current command
                var currentCommand = inputBefore.text() +
                                     inputCurrent.text() +
                                     inputAfter.text();
                
                // Trim spaces, split command
                currentCommand = currentCommand.trim()
                    .split(String.fromCharCode(KEY_NBSP));
                
                // If current command is 'open'
                if ((currentCommand[0] === COMMAND_OPEN) &&
                    (currentCommand[1] !== undefined)) {
                    
                    // Initialize autocomplete file
                    var file = CHAR_EMPTY;
                    
                    // Iterate all available files, try autocomplete
                    $.each(getFileList(), function(key, value) {
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
                            COMMAND_OPEN + String.fromCharCode(KEY_NBSP) +
                            file
                        );
                        
                        // Clear end of command
                        inputCurrent.text(String.fromCharCode(KEY_NBSP));
                        inputAfter.text(CHAR_EMPTY);
                    }
                }
                
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
                        inputBefore.text() + String.fromCharCode(KEY_NBSP)
                    );
                    
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
                
                break;
            
            /*
             * Key: Right arrow.
             * Navigate to the right in current input.
             */
            case KEY_RIGHT:
                
                // If there is text after the cursor
                if ((inputCurrent.text() !== String.fromCharCode(KEY_NBSP)) ||
                    (inputAfter.text().length > 0)) {
                    
                    // Shift current text to the left
                    inputBefore.text(
                        inputBefore.text() + inputCurrent.text()
                    );
                    
                    // Change empty after-text to forced space character
                    var afterText = inputAfter.text().slice(0, 1);
                    if (afterText.length === 0) {
                        afterText = String.fromCharCode(KEY_NBSP);
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
                
                break;
                
            /*
             * Key: Up arrow.
             * Navigate backwards in command history.
             */
            case KEY_UP:
                
                // Load previous command
                loadCommand(true);
                
                break;
                
            /*
             * Key: Down arrow.
             * Navigate forwards in command history.
             */
            case KEY_DOWN:
                
                // Load next command
                loadCommand(false);
                
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
                    input = String.fromCharCode(KEY_NBSP);
                    
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
                
                // Append entered character to input-field
                inputBefore.text(inputBefore.text() + input);
                
                // Save current input
                historyLast = inputBefore.text() +
                              inputCurrent.text().trim() +
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
    
});