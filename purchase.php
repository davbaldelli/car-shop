<?php
$templateParams["title"] = "Checkout";
$templateParams["page"] = "purchase-page.php";
$templateParams["navbar"] = "navbar.php";
$templateParams["footer"] = "footer.php";
$templateParams["loginform"] = "login-form.php";
$templateParams["page-name"] = "purchase";
$templateParams["js"] = array("scripts/middlewares/middleware.js","scripts/purchase.js");
$templateParams["css"] = array("css/purchase.css");
require_once("utilities/functions.php");
require("template/template-base.php");