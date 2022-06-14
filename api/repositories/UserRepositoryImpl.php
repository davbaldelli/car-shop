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

    function signIn($username, $password): ?array
    {
        $stmt = $this->conn->prepare("INSERT INTO users (username, password, role, salt) VALUES (?,SHA2(CONCAT(?, ?),?),?,?)");
        $length = 224;
        $role = "base";
        $salt = $this->generateRandomString(30);
        $stmt->bind_param("sssiss", $username, $password, $salt, $length, $role, $salt);
        try {
            if ($stmt->execute()) {
                $stmt = $this->conn->prepare("SELECT id,username, role, salt FROM users WHERE username = ? AND password = SHA2(CONCAT(?, salt),?)");
                $stmt->bind_param("ssi", $username, $password, $length);
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
        $stmt = $this->conn->prepare("SELECT id, username, role, credit FROM users WHERE id = ?");
        $stmt->bind_param("i",$id_user);
        $stmt->execute();
        $user = $stmt->get_result()->fetch_all(MYSQLI_ASSOC)[0];
        $stmt = $this->conn->prepare("SELECT * FROM users_delivering_addresses WHERE id_user = ?");
        $stmt->bind_param("i",$id_user);
        $stmt->execute();
        $addresses = array("addresses" => $stmt->get_result()->fetch_all(MYSQLI_ASSOC));
        return array_merge($user, $addresses);
    }
}