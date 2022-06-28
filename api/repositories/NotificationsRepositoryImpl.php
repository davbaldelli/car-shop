<?php

class NotificationsRepositoryImpl implements NotificationsRepository
{
    private mysqli $conn;

    function __construct($conn)
    {
        $this->conn = $conn;
    }

    function addNotify($notify): string
    {
        $stmt = $this->conn->prepare("INSERT INTO users_notifications(id_user, title, description) VALUES (?, ?, ?)");
        $stmt->bind_param("iss", $notify->userId, $notify->title, $notify->description);
        try {
            $stmt->execute();
        } catch (Exception $ex){
            return $ex->getMessage();
        }
        return "";
    }

    function setNotificationRead($notifications_ids): string
    {
        $in = str_repeat('?,', count($notifications_ids) - 1) . '?';
        $stmt = $this->conn->prepare("UPDATE users_notifications SET watched = 1 WHERE id IN ($in)");
        $types = str_repeat('s', count($notifications_ids));
        $stmt->bind_param($types,...$notifications_ids);
        try {
            $stmt->execute();
        } catch (Exception $ex){
            return $ex->getMessage();
        }
        return "";
    }

    function getUserNotifications($id_user): array
    {
        $stmt = $this->conn->prepare("SELECT * FROM users_notifications WHERE id_user = ? AND watched = 0");
        $stmt->bind_param("i", $id_user);
        $stmt->execute();
        return $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    }
}