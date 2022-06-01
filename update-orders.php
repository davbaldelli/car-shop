<?php

$templateParams["title"] = "Update Orders";
$templateParams["page"] = "admin-update-order.php";
$templateParams["navbar"] = "navbar.php";
$templateParams["footer"] = "footer.php";
$templateParams["loginform"] = "login-form.php";
$templateParams["page-name"] = "update orders";
$templateParams["js"] = array("/scripts/updateOrders.js", "/scripts/middlewares/middleware.js");

require_once("utilities/functions.php");
require("template/template-base.php");