<?php
$idOrder = $_GET["orderId"];
$templateParams["title"] = "Order n. ".$idOrder;
$templateParams["page"] = "order-page.php";
$templateParams["navbar"] = "navbar.php";
$templateParams["footer"] = "footer.php";
$templateParams["loginform"] = "login-form.php";
$templateParams["page-name"] = "order";
$templateParams["js"] = array("/scripts/order.js", "/scripts/middlewares/middleware.js");
$templateParams["css"] = array("/css/orders.css");
require_once("utilities/functions.php");
require("template/template-base.php");
