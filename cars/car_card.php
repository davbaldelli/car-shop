<?php

function getCard($car): string
{
    return '
    <div class="card" xmlns="http://www.w3.org/1999/html">
        <img src="' . $car['image'] . ' class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">' . $car['brand'] . ' ' . $car['model'] . '</h5>
            <p class="card-text">
                ' . $car['power'] . ' BHP </br>
                ' . $car['torque'] . ' Nm </br>
                30.000km
            </p>
            <a href="' . $car['download_link'] . '" class="btn btn-primary auto-margin-left">Compra</a>
         </div>
    </div>';
}

function getCards($cars): array
{
    $car_cards = [];
    foreach ($cars as $car){
        $car_cards[] = getCard($car);
    }

    return $car_cards;
}