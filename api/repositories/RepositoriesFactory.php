<?php
require_once "database/db.php";
include_once "interfaces.php";
include_once "CarRepositoryImpl.php";
include_once "OrdersRepositoryImpl.php";
include_once "ManufacturersRepositoryImpl.php";
include_once "NationsRepositoryImpl.php";
include_once "AddressesRepositoryImpl.php";
include_once "NotificationsRepositoryImpl.php";
include_once "LoginRepositoryImpl.php";
include_once "PaymentsRepositoryImpl.php";

spl_autoload_register(function ($name) {
    var_dump($name);
});

class RepositoriesFactory
{
    public static function GetCarsRepository() : CarRepository {
        $db = new Db();
        return new CarRepositoryImpl($db->getConnection());
    }

    public static function GetOrdersRepository() : OrdersRepository {
        $db = new Db();
        return new OrdersRepositoryImpl($db->getConnection());
    }

    public static function GetManufacturersRepository() : ManufacturersRepository{
        $db = new Db();
        return new ManufacturersRepositoryImpl($db->getConnection());
    }

    public static function GetNationsRepository() : NationsRepository {
        $db = new Db();
        return new NationsRepositoryImpl($db->getConnection());
    }

    public static function GetAddressesRepository() : AddressesRepository {
        $db = new Db();
        return new AddressesRepositoryImpl($db->getConnection());
    }

    public static function GetNotificationsRepository() : NotificationsRepository {
        $db = new Db();
        return new NotificationsRepositoryImpl($db->getConnection());
    }

    public static function GetLoginRepository() : LoginRepository{
        $db = new Db();
        return new LoginRepositoryImpl($db->getConnection());
    }

    public static function GetPaymentsRepository() : PaymentsRepository{
        $db = new Db();
        return new PaymentsRepositoryImpl($db->getConnection());
    }
}