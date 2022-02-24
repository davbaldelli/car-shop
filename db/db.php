<?php
class Db
{
    private string $servername = "192.168.122.76";
    private string $username = "car_shop_user";
    private string $password = "prova1234";
    private string $database = "prog_tw";
    private mysqli $conn;

    function connect($db, $username, $password, $host)
    {
        $this->conn = new mysqli($host, $username, $password, $db);

        // Check connection
        if ($this->conn->connect_error) {
            die("Connection failed: " . $this->conn->connect_error);
        }
    }

    function getAllCars()
    {
        $stmt = $this->conn->prepare("SELECT car_mods.* FROM car_mods");
        $stmt->execute();
        return $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    }

    function getCarByManufacturer($manu)
    {
        $stmt = $this->conn->prepare("SELECT car_mods.* FROM car_mods WHERE brand = ?");
        $stmt->bind_param('s', $manu);
        $stmt->execute();
        return $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    }

    function disconnect()
    {
        $this->conn->close();
    }
}

