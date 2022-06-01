<?php
class ManufacturersRepositoryImpl implements ManufacturersRepository
{

    private mysqli $conn;

    function __construct($conn){
        $this->conn = $conn;
    }

    function getAllBrands(): array
    {
        $stmt = $this->conn->prepare("SELECT manufacturers.* FROM manufacturers ORDER BY name ASC");
        $stmt->execute();
        return $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    }
}