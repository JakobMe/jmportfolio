<?php
    
/*
 * Script: Open file.
 * Reads content from file,
 * returns string for output.
 */

// Echo file content
echo file_get_contents("../files/{$_POST[file]}");

?>