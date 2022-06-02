<?php
class PaymentsRepositoryImpl implements PaymentsRepository
{
    private mysqli $conn;

    function __construct($conn){
        $this->conn = $conn;
    }

    function makePayment($id_user, $amount): string
    {
        $stmt = $this->conn->prepare("SELECT credit FROM users WHERE id = ?");
        $stmt->bind_param("i", $id_user);
        $stmt->execute();
        $res = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
        if($res[0]["credit"] >= $amount){
            $stmt = $this->conn->prepare("UPDATE users SET credit = (credit - ?) WHERE id = ?");
            $stmt->bind_param("ii",$amount, $id_user);
            $stmt->execute();
            if($stmt->error == ""){
                return true;
            } else {
                echo $stmt->error;
            }
        }
        return false;
    }

    function rechargeWallet($ud_user, $amount): string
    {
        $stmt = $this->conn->prepare("UPDATE users SET credit = (credit + ?)");
        $stmt->bind_param("i", $amount);
        $stmt->execute();
        return $stmt->error;
    }
}