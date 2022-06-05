<?php
function isActive($pagename, $active_class)
{
    if (basename($_SERVER['PHP_SELF']) == $pagename) {
        echo $active_class;
    }
}
