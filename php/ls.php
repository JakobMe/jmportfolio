<?php
    
/*
 * Script: List files.
 * Reads files from 'files' directory,
 * returns file list for output.
 */

// Initialize file array
$files = array();

// Read all files, save filename in array
foreach (glob("../files/*") as $file) {
    array_push($files, basename($file));
}

// Echo file array
echo json_encode($files);

?>