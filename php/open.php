<?php
    
/*
 * Script: Open file.
 * Reads content from file,
 * returns string for output.
 */

// Get filename
$file = $_POST["file"];
$file = explode("/", $file);
$file = $file[0];

// Echo file content
echo file_get_contents("../files/$file");

?>