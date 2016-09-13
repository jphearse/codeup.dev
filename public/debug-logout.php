<?php
require_once 'debug-functions.php';
session_start();
function pageController() {
    clearSession();
    redirect("debug-login.php");
}
pageController();