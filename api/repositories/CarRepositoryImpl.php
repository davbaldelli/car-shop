<?php
class CarRepositoryImpl implements CarRepository
{
    private mysqli $conn;

    function __construct($conn){
        $this->conn = $conn;
    }

    function addCar($car): string
    {
        $stmt = $this->conn->prepare("INSERT INTO cars(model, id_brand, year, image, bhp, 
                 torque, weight, top_speed, transmission, drivetrain, rating, price, fuel_type, car_type, doors) 
                VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
        $stmt->bind_param('siisiiiissiissi',
            $car->model,
            $car->id_brand,
            $car->year,
            $car->image,
            $car->bhp,
            $car->torque,
            $car->weight,
            $car->top_speed,
            $car->transmission,
            $car->drivetrain,
            $car->rating,
            $car->price,
            $car->fuel_type,
            $car->car_type,
            $car->doors
        );
        $stmt->execute();
        return $stmt->error;
    }

    function getAllCars(): array
    {
        $stmt = $this->conn->prepare("SELECT car_mods.* FROM car_mods ORDER BY CONCAT(brand,' ',model) ASC");
        $stmt->execute();
        return $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    }

    function getCarById($id): array
    {
        $stmt = $this->conn->prepare("SELECT car_mods.* FROM car_mods WHERE id = ?");
        $stmt->bind_param('i', $id);
        $stmt->execute();
        return $stmt->get_result()->fetch_all(MYSQLI_ASSOC)[0];
    }

    function getCarsByManufacturer($manufacturer): array
    {
        $stmt = $this->conn->prepare("SELECT car_mods.* FROM car_mods WHERE brand = ? ORDER BY CONCAT(brand,' ',model) ASC");
        $stmt->bind_param('s', $manufacturer);
        $stmt->execute();
        return $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    }

    function getCarsByType($type): array
    {
        $stmt = $this->conn->prepare("SELECT car_mods.* FROM car_mods WHERE car_type = ? ORDER BY CONCAT(brand,' ',model) ASC");
        $stmt->bind_param('s', $type);
        $stmt->execute();
        return $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    }

    function getCarsByPrice($max, $min): array
    {
        $stmt = $this->conn->prepare("SELECT car_mods.* FROM car_mods WHERE price BETWEEN ? AND ? ORDER BY CONCAT(brand,' ',model) ASC");
        $stmt->bind_param('ii', $min, $max);
        $stmt->execute();
        return $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    }

    function getCarsByDoors($number): array
    {
        $stmt = $this->conn->prepare("SELECT car_mods.* FROM car_mods WHERE doors = ? ORDER BY CONCAT(brand,' ',model) ASC");
        $stmt->bind_param('i', $number);
        $stmt->execute();
        return $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    }
}