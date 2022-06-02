<?php
class OrdersRepositoryImpl implements OrdersRepository
{
    private mysqli $conn;

    function __construct($conn){
        $this->conn = $conn;
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

    function addOrder($order): string
    {
        $stmt = $this->conn->prepare("INSERT INTO orders(id_car,id_user,id_user_address,state, quantity) VALUES (?, ?, ?, ?, ?)");
        $stmt->bind_param("iiisi", $order->id_car, $order->id_user,$order->id_address, $order->state, $order->quantity);
        $stmt->execute();
        return $stmt->error;
    }

    function getAllOrders(): array
    {
        $stmt = $this->conn->prepare("SELECT * FROM orders_view");
        $stmt->execute();
        return $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    }

    function getUserOrders($id_user): array
    {
        $stmt = $this->conn->prepare("SELECT * FROM orders_view WHERE id_user = ?");
        $stmt->bind_param("i", $id_user);
        $stmt->execute();
        return $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    }

    function getUserOrderById($id_user, $id_order): array
    {
        $stmt = $this->conn->prepare("SELECT state, timestamp FROM orders_logs WHERE id_order = ?");
        $stmt->bind_param("i", $id_order);
        $stmt->execute();
        $logs = array("logs" => $stmt->get_result()->fetch_all(MYSQLI_ASSOC));

        $stmt = $this->conn->prepare("SELECT * FROM orders_view WHERE id_user = ? AND id = ?");
        $stmt->bind_param("ii", $id_user, $id_order);
        $stmt->execute();
        $order = $stmt->get_result()->fetch_all(MYSQLI_ASSOC)[0];

        $stmt = $this->conn->prepare("SELECT * FROM users_delivering_addresses WHERE id = ?");
        $stmt->bind_param("i", $order["id_user_address"]);
        $stmt->execute();
        $address = array("address" => $stmt->get_result()->fetch_all(MYSQLI_ASSOC)[0]);

        return array_merge($order,$logs,$address);
    }

    function getUserOrdersByState($id_user, $state): array
    {
        $stmt = $this->conn->prepare("SELECT * FROM orders_view WHERE id_user = ? AND state = ?");
        $stmt->bind_param("is", $id_user, $state);
        $stmt->execute();
        return $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    }

    function getUserOrdersByNotState($id_user, $state): array
    {
        $stmt = $this->conn->prepare("SELECT * FROM orders_view WHERE id_user = ? AND NOT state = ?");
        $stmt->bind_param("is", $id_user, $state);
        $stmt->execute();
        return $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    }

}