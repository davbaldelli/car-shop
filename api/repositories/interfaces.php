<?php

interface CarRepository
{
    function addCar($car): string;

    function getAllCars(): array;

    function getCarById($id): array;

    function getCarsByManufacturer($manufacturer): array;

    function getCarsByType($type): array;

    function getCarsByPrice($max, $min): array;

    function getCarsByDoors($number): array;
}

interface OrdersRepository
{
    function updateOrder($id, $newState): ?array;

    function addOrder($order): string;

    function getAllOrders(): array;

    function getUserOrders($id_user): array;

    function getUserOrderById($id_user, $id_order): array;

    function getUserOrdersByState($id_user, $state): array;

    function getUserOrdersByNotState($id_user, $state): array;
}

interface ManufacturersRepository
{
    function getAllBrands(): array;
    function getManufacturerByName($name);
}

interface UserRepository
{
    function login($username, $password): ?array;

    function signIn($user): ?array;

    function getUserInfo($id_user) : array;
}

interface NotificationsRepository
{
    function addNotify($notify): string;

    function getUserNotifications($id_user): array;
}

interface AddressesRepository
{
    function getUserAddresses($id_user): array;

    function addUserAddress($address): string;
}

interface NationsRepository
{
    function getAllNations(): array;
}

interface PaymentsRepository
{
    function makePayment($id_user, $amount): string;

    function rechargeWallet($id_user, $amount): string;

    function checkEnoughCredit($id_user, $amount) : bool;
}
