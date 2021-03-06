<?php

$templateParams["title"] = "Add Product";
$templateParams["page"] = "add-product-page.php";
$templateParams["navbar"] = "navbar.php";
$templateParams["footer"] = "footer.php";
$templateParams["loginform"] = "login-form.php";
$templateParams["page-name"] = "add product";
$templateParams["js"] = array("scripts/addProduct.js", "scripts/middlewares/middleware.js");
$templateParams["css"] = array("css/admin.css");

require_once("utilities/functions.php");
require("template/template-base.php");