<?php

class UserRepositoryImpl implements UserRepository
{
    private mysqli $conn;

    function __construct($conn)
    {
        $this->conn = $conn;
    }

    function login($username, $password): ?array
    {
        $stmt = $this->conn->prepare("SELECT id,username, role, salt FROM users WHERE username = ? AND password = SHA2(CONCAT(?, salt),?)");
        $length = 224;
        $stmt->bind_param("ssi", $username, $password, $length);
        $stmt->execute();
        return $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    }

    function signIn($user): ?array
    {
        $stmt = $this->conn->prepare("INSERT INTO users (username, password, role, salt, name, last_name, avatar_image) VALUES (?,SHA2(CONCAT(?, ?),?),?,?, ?, ?, ?)");
        $length = 224;
        $role = "base";
        $salt = $this->generateRandomString(30);
        $stmt->bind_param("sssisssss", $user["username"], $user["password"], $salt, $length, $role, $salt, $user["name"], $user["last_name"], $user["avatar_image"]);
        try {
            if ($stmt->execute()) {
                $stmt = $this->conn->prepare("SELECT id,username, role FROM users WHERE username = ? AND password = SHA2(CONCAT(?, salt),?)");
                $stmt->bind_param("ssi", $user["username"], $user["password"], $length);
                $stmt->execute();
                return $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
            } else {
                return null;
            }
        } catch (Exception $err) {
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

    function getUserInfo($id_user): array
    {
        $stmt = $this->conn->prepare("SELECT car_type,COUNT(car_type) AS orders_count FROM orders 
                    JOIN cars c on c.id = orders.id_car JOIN users u on u.id = orders.id_user WHERE u.id = ? 
                GROUP BY (car_type) ORDER BY orders_count DESC LIMIT 1");
        $stmt->bind_param("i", $id_user);
        $stmt->execute();
        $res = $stmt->get_result();
        if($res->num_rows == 0){
            $fav_car_type = "no data available";
        } else {
            $fav_car_type = $res->fetch_all(MYSQLI_ASSOC)[0]["car_type"];
        }

        $stmt = $this->conn->prepare("SELECT m.name,COUNT(m.name) AS orders_count FROM orders 
                    JOIN cars c on c.id = orders.id_car JOIN users u on u.id = orders.id_user JOIN manufacturers m on m.id = c.id_brand WHERE u.id = ? 
                GROUP BY (m.name) ORDER BY orders_count DESC LIMIT 1");
        $stmt->bind_param("i", $id_user);
        $stmt->execute();
        $res = $stmt->get_result();
        if($res->num_rows == 0){
            $fav_car_brand = "no data available";
        } else {
            $fav_car_brand = $res->fetch_all(MYSQLI_ASSOC)[0]["name"];
        }

        $stmt = $this->conn->prepare("SELECT SUM(price) AS tot FROM orders_view WHERE id_user = ? GROUP BY id_user");
        $stmt->bind_param("i", $id_user);
        $stmt->execute();
        $res = $stmt->get_result();
        if($res->num_rows == 0){
            $tot_money_spent = 0;
        } else {
            $tot_money_spent = $res->fetch_all(MYSQLI_ASSOC)[0]["tot"];
        }


        $stmt = $this->conn->prepare("SELECT id, username, name, last_name, cell_number, avatar_image, role, credit FROM users WHERE id = ?");
        $stmt->bind_param("i",$id_user);
        $stmt->execute();
        $user = $stmt->get_result()->fetch_all(MYSQLI_ASSOC)[0];
        $stmt = $this->conn->prepare("SELECT * FROM users_delivering_addresses WHERE id_user = ?");
        $stmt->bind_param("i",$id_user);
        $stmt->execute();
        $addresses = array("addresses" => $stmt->get_result()->fetch_all(MYSQLI_ASSOC));
        return array_merge($user, $addresses,array("fav_car_type" => $fav_car_type), array("tot_money_spent" => $tot_money_spent),array("fav_car_brand" => $fav_car_brand));
    }
}