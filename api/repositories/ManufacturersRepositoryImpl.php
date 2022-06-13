<?php

class ManufacturersRepositoryImpl implements ManufacturersRepository
{

    private mysqli $conn;

    function __construct($conn)
    {
        $this->conn = $conn;
    }

    function getAllBrands(): array
    {
        $stmt = $this->conn->prepare("SELECT * FROM manufacturers ORDER BY name");
        $stmt->execute();
        return $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    }

    function getManufacturerByName($name)
    {
        $stmt = $this->conn->prepare("SELECT * FROM manufacturers WHERE name = ?");
        $stmt->bind_param("s", $name);
        $stmt->execute();
        return $stmt->get_result()->fetch_all(MYSQLI_ASSOC)[0];
    }
}