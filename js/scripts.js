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
    var ID_INPUT_CURRENT    = "#input-current";
    var ID_INPUT_BEFORE     = "#input-before";
    var ID_INPUT_AFTER      = "#input-after";
    
    // Constants: CSS-classes
    var CLASS_BLINK         = "blink";
    
    // Constants: Characters
    var CHAR_EMPTY          = "";
    var CHAR_DOT            = ".";
    var CHAR_DASH           = "-";
    var CHAR_UNDERSCORE     = "_";
    
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
    var inputBefore  = $(ID_INPUT_BEFORE);
    var inputCurrent = $(ID_INPUT_CURRENT);
    var inputAfter   = $(ID_INPUT_AFTER);
    
    /*
     * Function: Pause blinking of cursor.
     * Removes the "blink"-class form the cursor
     * and adds it again two seconds later, causing a short
     * pause of the blinking animation.
     */
    function pauseCursorBlink() {
        
        // Remove and add "blinkg"-class
        inputCurrent.removeClass(CLASS_BLINK);
        setTimeout(function() {
            inputCurrent.addClass(CLASS_BLINK);
        }, 2000);
    }
    
    /*
     * On keydown.
     * Listen to users keydown of control and character keys;
     * control behaviour of arrow keys, enter, backspace and tab,
     * insert entered characters to input-field.
     */
    $(document).keydown(function(event) {
        
        // Prevent default behaviour
        event.preventDefault();
        
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