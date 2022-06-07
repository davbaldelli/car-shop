<?php

$templateParams["title"] = "Your Orders";
$templateParams["page"] = "user-orders-page.php";
$templateParams["navbar"] = "navbar.php";
$templateParams["footer"] = "footer.php";
$templateParams["loginform"] = "login-form.php";
$templateParams["page-name"] = "user orders";
$templateParams["js"] = array("/scripts/userOrders.js", "/scripts/notifications.js");
$templateParams["css"] = array("/css/orders.css");

require_once("utilities/functions.php");
require("template/template-base.php");
