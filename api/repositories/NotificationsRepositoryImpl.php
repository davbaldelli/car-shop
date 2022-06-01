<?php
class NotificationsRepositoryImpl implements NotificationsRepository
{
    private mysqli $conn;

    function __construct($conn){
        $this->conn = $conn;
    }

    function addNotify($notify): string
    {
        $stmt = $this->conn->prepare("INSERT INTO users_notifications(id_user, title, description) VALUES (?, ?, ?)");
        $stmt->bind_param("iss", $notify->userId, $notify->title, $notify->description);
        $stmt->execute();
        return $stmt->error;
    }

    function getUserNotifications($id_user): array
    {
        $stmt = $this->conn->prepare("SELECT * FROM users_notifications WHERE id_user = ?");
        $stmt->bind_param("i", $id_user);
        $stmt->execute();
        return $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    }
}