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

    function updateOrder($id, $newState): ?array
    {
        $stmt = $this->conn->prepare("UPDATE orders SET state = ? WHERE id = ?");
        $stmt->bind_param("si", $newState, $id);
        $stmt->execute();

        if ($stmt->error === ""){
            $stmt = $this->conn->prepare("SELECT state, timestamp FROM orders_logs WHERE id_order = ?");
            $stmt->bind_param("i", $id);
            $stmt->execute();
            $logs = array("logs" => $stmt->get_result()->fetch_all(MYSQLI_ASSOC));
            $stmt = $this->conn->prepare("SELECT * FROM orders_view WHERE id = ?");
            $stmt->bind_param("i", $id);
            $stmt->execute();
            return array_merge($stmt->get_result()->fetch_all(MYSQLI_ASSOC)[0], $logs);
        } else {
            return null;
        }
    }

    function addOrder($order) : string{
        $stmt = $this->conn->prepare("INSERT INTO orders(id_car,id_user,state, quantity) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("iisi", $order->id_car, $order->id_user, $order->state, $order->quantity);
        $stmt->execute();
        return $stmt->error;
    }

    function getUserOrders($user_id): array
    {
        $stmt = $this->conn->prepare("SELECT * FROM orders_view WHERE id_user = ?");
        $stmt->bind_param("i", $user_id);
        $stmt->execute();
        return $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    }
    function getUserOrderById($user_id, $order_id): array
    {
        $stmt = $this->conn->prepare("SELECT state, timestamp FROM orders_logs WHERE id_order = ?");
        $stmt->bind_param("i", $order_id);
        $stmt->execute();
        $logs = array("logs" => $stmt->get_result()->fetch_all(MYSQLI_ASSOC));
        $stmt = $this->conn->prepare("SELECT * FROM orders_view WHERE id_user = ? AND id = ?");
        $stmt->bind_param("ii", $user_id, $order_id);
        $stmt->execute();
        return array_merge($stmt->get_result()->fetch_all(MYSQLI_ASSOC)[0],$logs);
    }

    function getUserOrdersByState($user_id, $state): array
    {
        $stmt = $this->conn->prepare("SELECT * FROM orders_view WHERE id_user = ? AND state = ?");
        $stmt->bind_param("is", $user_id, $state);
        $stmt->execute();
        return $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    }

    function getAllOrders(): array
    {
        $stmt = $this->conn->prepare("SELECT * FROM orders_view");
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

    function signIn($username, $password): ?array
    {
        $stmt = $this->conn->prepare("INSERT INTO users (username, password, role, salt) VALUES (?,SHA2(CONCAT(?, ?),?),?,?)");
        $length = 224;
        $role = "base";
        $salt = $this->generateRandomString(30);
        $stmt->bind_param("sssiss", $username, $password, $salt, $length, $role, $salt);
        
        if($stmt->execute()){
            $stmt = $this->conn->prepare("SELECT id,username, role, salt FROM users WHERE username = ? AND password = SHA2(CONCAT(?, salt),?)");
            $stmt->bind_param("ssi", $username, $password, $length);
            $stmt->execute();
            return $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
        }else{
            return null;
        }
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

    public function addNotify($notify)
    {
        $stmt = $this->conn->prepare("INSERT INTO users_notifications(id_user, title, description) VALUES (?, ?, ?)");
        $stmt->bind_param("iss", $notify->userId, $notify->title, $notify->description);
        $stmt->execute();
        return $stmt->error;
    }

    public function getUserNotifications($id_user): array
    {
        $stmt = $this->conn->prepare("SELECT * FROM users_notifications WHERE id_user = ?");
        $stmt->bind_param("i", $id_user);
        $stmt->execute();
        return $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    }

    public function getUserAddresses($id_user): array
    {
        $stmt = $this->conn->prepare("SELECT * FROM users_delivering_addresses WHERE id_user = ?");
        $stmt->bind_param("i", $id_user);
        $stmt->execute();
        return $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    }

    public function getAllNations(): array
    {
        $stmt = $this->conn->prepare("SELECT * FROM nations");
        $stmt->execute();
        return $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    }

    public function addUserAddress($address){
        $stmt = $this->conn
            ->prepare("INSERT INTO users_delivering_addresses(id_user, id_country, first_name,last_name, 
                                       administrative_area, locality, postal_code, address_line_1,
                                       address_line_2) VALUES (?,?,?,?,?,?,?,?,?)");
        $stmt->bind_param("iisssssss", $address->id_user, $address->id_country, $address->first_name,
            $address->last_name, $address->administrative_area, $address->locality, $address->postal_code,
            $address->address_line_1, $address->address_line_2);
        $stmt->execute();
        return $stmt->error;
    }
}

