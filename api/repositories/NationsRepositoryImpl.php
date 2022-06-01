<?php
class NationsRepositoryImpl implements NationsRepository
{
    private mysqli $conn;

    function __construct($conn){
        $this->conn = $conn;
    }

    function getAllNations(): array
    {
        $stmt = $this->conn->prepare("SELECT * FROM nations");
        $stmt->execute();
        return $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    }
}