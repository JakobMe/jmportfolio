/*
 * JS-module: Main.
 * Main Javascript file.
 * @author    Jakob Metzger <jakob.me@gmail.com>
 * @copyright 2015 Jakob Metzger
 * @license   http://www.php.net/license/3_0.txt PHP License 3.0
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
    var TAG_EM              = "em";
    var TAG_SPAN            = "span";
    var TAG_SMALL           = "small";
    var TAG_BLOCKQUOTE      = "blockquote";
    var TAG_STRONG          = "strong";
    
    // Constants: Output texts
    var TEXT_TITLE          = "jmportfolio";
    var TEXT_PROMPT         = ":~ ";
    var TEXT_USER           = "guest$";
    var TEXT_COMMANDS       = "commands";
    var TEXT_COMMAND_AFTER  = ": ";
    var TEXT_NOT_FOUND      = "Command not found";
    var TEXT_HELP           = "help";
    var TEXT_USE            = ". Use ";
    var TEXT_LIST_AVAILABLE = " to list available ";
    
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
    
    // Available commands
    var commands = {
        list: {},
        open: {},
        help: {},
        clear: {},
        random: {},
        about: {},
        contact: {},
        notice: {}
    };
    
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
        var time = 5;
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
                
                // Change time to skip HTML tags
                if (type.slice(-1) === CHAR_LT) { time = 0; }
                else if (type.slice(-1) === CHAR_GT) { time = 5; }
                
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
        
            }, time);
            
        }());
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
    computer.keydown(function(event) {
        
        // Prevent default behaviour
        event.preventDefault();
        
        if (!$(this).hasClass(CLASS_READY)) {
            return false;
        }
        
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
                }
                
                break;
                
            /*
             * Key: Tab.
             * Autocomplete filenames in current command.
             */
            case KEY_TAB:
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
                    
                    // If a command was executed
                    if (command.length > 0) {
                        
                        // Append command prompt to output
                        output.append(
                            htmlTag(
                                TAG_P,
                                htmlTag(
                                    TAG_SPAN,
                                    htmlTag(TAG_B, TEXT_TITLE) +
                                    TEXT_PROMPT +
                                    htmlTag(TAG_SMALL, TEXT_USER) +
                                    CHAR_SPACE + command
                                )
                            )
                        );
                        
                        // Clear current input
                        inputBefore.add(inputAfter).text(CHAR_EMPTY);
                        inputCurrent.text(String.fromCharCode(KEY_NBSP));
                        
                        // If command does exist
                        if (commands.hasOwnProperty(command)) {
                            
                        // If command does not exist
                        } else {
                            
                            // Append error message to output
                            output.append(
                                htmlTag(
                                    TAG_BLOCKQUOTE,
                                    command + TEXT_COMMAND_AFTER +
                                    htmlTag(TAG_STRONG, TEXT_NOT_FOUND) +
                                    TEXT_USE + htmlTag(TAG_I, TEXT_HELP) +
                                    TEXT_LIST_AVAILABLE +
                                    htmlTag(TAG_EM, TEXT_COMMANDS) + CHAR_DOT
                                )
                            );
                        }
                    }
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
                    inputAfter.text(
                        inputCurrent.text() + inputAfter.text()
                    );
                    
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
                break;
                
            /*
             * Key: Down arrow.
             * Navigate forwards in command history.
             */
            case KEY_DOWN:
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
        }
        
    });
    
});