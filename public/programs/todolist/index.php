<?php

/******************************
 * VARIABLES
 */

const FILE = "todolist.csv";


/******************************
 * FONCTIONS
 */

/* Outils */

function prepareTaskToAdd() {
    $id = 0;
    $taskArray = [];
    
    $file = fopen(FILE, "r");
    if (!$file) { echo "<!-- L'ouverture du fichier a échoué. -->\n"; }
    else {
        /* parcourir les tâches */
        while(!feof($file)) {
            $taskArray = fgetcsv($file);
            if ($taskArray == false) { break; }
            $id = $taskArray[0];
        }
        fclose($file);
        /* préparation */
        $taskArray = [
            ++$id,
            $_POST["year"]."-".$_POST["month"]."-".$_POST["day"],
            htmlspecialchars($_POST["title"]),
            htmlspecialchars($_POST["description"]),
            $_POST["priority"]
        ];
    }
    return $taskArray;
}

function enRetard($taskDate) {
    $currentDate = date("Y-m-d");

    if ($taskDate < $currentDate) {
        echo " <span class='late'>-&gt; en retard&nbsp;!</span>";
    }
}

/* Actions sur la liste */

function deleteTasks() {
    $newFile = [];

    /* ouvrir le fichier */
    $file = fopen(FILE, "r");
    if (!$file) { echo "<h1>L'ouverture du fichier a échoué.</h1>"; }
    else {
        /* parcourir les tâches */
        while(!feof($file)) {
            $taskArray = fgetcsv($file);
            if (!in_array($taskArray[0], $_POST["task"])) {
                array_push($newFile, $taskArray);
            }
        }
        fclose($file);
        
        $file = fopen(FILE, "w");
        /* écrire dans le fichier */
        foreach ($newFile as $task) {
            if ($task == false) { break; }
            fputcsv($file, $task);
        }
        
        fclose($file);
    }
}

function addTask() {
    $taskArray = null;
    
    $file = fopen(FILE, "a+");
    if (!$file) { echo "<h1>L'ouverture du fichier a échoué.</h1>"; }
    else {
        $taskArray = prepareTaskToAdd();
        fputcsv($file, $taskArray);
        fclose($file);
    }
}

function getTaskToModify($taskId) {
    $taskToModify = [];

    /* ouvrir le fichier */
    $file = fopen(FILE, "r");
    if (!$file) { echo "<h1>L'ouverture du fichier a échoué.</h1>"; }
    else {
        /* parcourir les tâches */
        while(!feof($file)) {
            $taskArray = fgetcsv($file);
            if ($taskArray[0] = $taskId) {
                $taskToModify = $taskArray;
            }
        }
        fclose($file);
    }
    return $taskToModify;
}

/* Affichage */

function displayList() {
    if (file_exists(FILE)) {
        /* ouvrir le fichier */
        $file = fopen(FILE, "r");
        if (!$file) { echo "<h1>L'ouverture du fichier a échoué.</h1>"; }
        else {
            /* parcourir les tâches */
            while(!feof($file)) {
                $taskArray = fgetcsv($file);

                if ($taskArray == false) { break; }
                // création des checkbox
                include("phtml/task.phtml");
            }
            fclose($file);
        }
    }
}

/******************************
 * PROGRAMMES
 */

if (isset($_POST["new"])) {
    addTask();
}
elseif (isset($_POST["delete"])) {
    deleteTasks();
}

include("phtml/index.phtml");
