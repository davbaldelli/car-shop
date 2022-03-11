<?php
header("Access-Control-Allow-Origin: localhost");
class Db
{
    private mysqli $conn;

    function connect()
    {
        define('ROOTPATH', __DIR__);
        $dbCredFile = file_get_contents(ROOTPATH."/../local_res/db_cred.json");
        $dbCred = json_decode($dbCredFile, true);

        $this->conn = new mysqli($dbCred["host"], $dbCred["username"], $dbCred["password"], $dbCred["db"]);

        // Check connection
        if ($this->conn->connect_error) {
            die("Connection failed: " . $this->conn->connect_error);
        }
    }

    function getAllCars()
    {
        $stmt = $this->conn->prepare("SELECT car_mods.* FROM car_mods ORDER BY CONCAT(brand,' ',model) ASC");
        $stmt->execute();
        return $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    }

    function getCarsByManufacturer($manu)
    {
        $stmt = $this->conn->prepare("SELECT car_mods.* FROM car_mods WHERE brand = ? ORDER BY CONCAT(brand,' ',model) ASC");
        $stmt->bind_param('s', $manu);
        $stmt->execute();
        return $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    }

    function getCarsByType($type){
        $stmt = $this->conn->prepare("SELECT car_mods.* FROM car_mods WHERE car_type = ? ORDER BY CONCAT(brand,' ',model) ASC");
        $stmt->bind_param('s', $type);
        $stmt->execute();
        return $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    }

    function getCarsByPrice($max, $min){
        $stmt = $this->conn->prepare("SELECT car_mods.* FROM car_mods WHERE price BETWEEN ? AND ? ORDER BY CONCAT(brand,' ',model) ASC");
        $stmt->bind_param('ii', $min, $max);
        $stmt->execute();
        return $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    }

    function getCarsByDoors($n){
        $stmt = $this->conn->prepare("SELECT car_mods.* FROM car_mods WHERE doors = ? ORDER BY CONCAT(brand,' ',model) ASC");
        $stmt->bind_param('i', $n);
        $stmt->execute();
        return $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    }

    function getAllBrands(){
        $stmt = $this->conn->prepare("SELECT manufacturers.* FROM manufacturers ORDER BY name ASC");
        $stmt->execute();
        return $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    }

    function login($username, $password): bool
    {
        $stmt = $this->conn->prepare("SELECT username, role, salt FROM users WHERE username = ? AND password = SHA2(CONCAT(?, salt),?)");
        $length = 224;
        $stmt->bind_param("ssi", $username, $password, $length);
        $stmt->execute();
        return count($stmt->get_result()->fetch_all(MYSQLI_ASSOC)) != 0;
    }

    function signIn($username, $password): bool
    {
        $stmt = $this->conn->prepare("INSERT INTO users (username, password, role, salt) VALUES (?,SHA2(CONCAT(?, ?),?),?,?)");
        $length = 224;
        $role = "base";
        $salt = $this->generateRandomString(30);
        $stmt->bind_param("sssiss", $username, $password, $salt, $length, $role, $salt);
        return $stmt->execute();
    }

    private function generateRandomString($length = 10): string
    {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }
        return $randomString;
    }

    function disconnect()
    {
        $this->conn->close();
    }
}

