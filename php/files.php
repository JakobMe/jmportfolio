<?php
    
/*
 * Script: List files.
 * Reads files from 'files' directory,
 * returns file list for output.
 */

// Initialize file array and path
$path = "../files/txt/";
$files = array();

// Read all files, save filename in array
foreach (glob("$path*.*") as $file) {
    array_push($files, basename($file));
}

// If hidden files should be revealed
if ($_POST["reveal"] == "true") {
    
    // Read all hidden files
    foreach (glob("$path.*") as $file) {
        
        // Skip special files
        if ((basename($file) === ".") ||
            (basename($file) === "..")) {
            continue;
        }
        
        // Push hidden files to array
        array_push($files, basename($file));
    }
}

// Echo file array
echo json_encode($files);

?>