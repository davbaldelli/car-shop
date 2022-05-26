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

    function addCar($car) : string{
        $stmt = $this->conn->prepare("INSERT INTO cars(model, id_brand, year, premium, image, bhp, 
                 torque, weight, top_speed, transmission, drivetrain, rating, price, fuel_type, car_type, doors) 
                VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
        $stmt->bind_param('siiisiiiissiissi',
            $car->model,
            $car->id_brand,
            $car->year,
            $car->premium,
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

    function updateOrder($id, $newState): ?array
    {
        $stmt = $this->conn->prepare("UPDATE orders SET state = ? WHERE id = ?");
        $stmt->bind_param("si", $newState, $id);
        $stmt->execute();
        if ($stmt->error === ""){
            $stmt = $this->conn->prepare("SELECT * FROM orders WHERE id = ?");
            $stmt->bind_param("s", $id);
            $stmt->execute();
            return $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
        } else {
            return null;
        }
    }

    function addOrder($order) : string{
        $stmt = $this->conn->prepare("INSERT INTO orders(id_car,id_user,state) VALUES (?, ?, 'pending_payment_confirm')");
        $stmt->bind_param("ii", $order->id_car, $order->id_user);
        $stmt->execute();
        return $stmt->error;
    }

    function getUserOrders($user_id): array
    {
        $stmt = $this->conn->prepare("SELECT * FROM orders WHERE id_user = ?");
        $stmt->bind_param("i", $user_id);
        $stmt->execute();
        return $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    }

    function getAllOrders(): array
    {
        $stmt = $this->conn->prepare("SELECT * FROM orders");
        $stmt->execute();
        return $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
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
        return $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    }

    function getCarsByManufacturer($manu): array
    {
        $stmt = $this->conn->prepare("SELECT car_mods.* FROM car_mods WHERE brand = ? ORDER BY CONCAT(brand,' ',model) ASC");
        $stmt->bind_param('s', $manu);
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

    function getCarsByDoors($n): array
    {
        $stmt = $this->conn->prepare("SELECT car_mods.* FROM car_mods WHERE doors = ? ORDER BY CONCAT(brand,' ',model) ASC");
        $stmt->bind_param('i', $n);
        $stmt->execute();
        return $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    }

    function getAllBrands(): array
    {
        $stmt = $this->conn->prepare("SELECT manufacturers.* FROM manufacturers ORDER BY name ASC");
        $stmt->execute();
        return $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    }

    function login($username, $password): array
    {
        $stmt = $this->conn->prepare("SELECT id,username, role, salt FROM users WHERE username = ? AND password = SHA2(CONCAT(?, salt),?)");
        $length = 224;
        $stmt->bind_param("ssi", $username, $password, $length);
        $stmt->execute();
        return $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
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

