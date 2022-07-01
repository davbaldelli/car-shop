<?php

class AddressesRepositoryImpl implements AddressesRepository
{
    private mysqli $conn;

    function __construct($conn)
    {
        $this->conn = $conn;
    }

    function getUserAddresses($id_user): array
    {
        $stmt = $this->conn->prepare("SELECT * FROM users_delivering_addresses WHERE id_user = ?");
        $stmt->bind_param("i", $id_user);
        $stmt->execute();
        return $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    }

    function updateAddress($address): string{
        $stmt = $this->conn->prepare("UPDATE users_delivering_addresses SET id_country = ?, first_name = ?,last_name = ?, 
                                       administrative_area = ?, locality = ?, postal_code = ?, address_line_1 = ?,
                                       address_line_2 = ? WHERE id = ?");
        $stmt->bind_param("isssssssi", $address->id_country, $address->first_name,
            $address->last_name, $address->administrative_area, $address->locality, $address->postal_code,
            $address->address_line_1, $address->address_line_2, $address->id);
        try {
            $stmt->execute();
        } catch (Exception $ex){
            return $ex->getMessage();
        }
        return "";
    }

    function addUserAddress($address): string
    {
        $stmt = $this->conn->prepare("INSERT INTO users_delivering_addresses(id_user, id_country, first_name,last_name, 
                                       administrative_area, locality, postal_code, address_line_1,
                                       address_line_2) VALUES (?,?,?,?,?,?,?,?,?)");
        $stmt->bind_param("iisssssss", $address->id_user, $address->id_country, $address->first_name,
            $address->last_name, $address->administrative_area, $address->locality, $address->postal_code,
            $address->address_line_1, $address->address_line_2);
        try {
            $stmt->execute();
        } catch (Exception $ex){
            return $ex->getMessage();
        }
        return "";
    }

    public function deleteAddress($id_address): string
    {
        $stmt = $this->conn->prepare("DELETE FROM users_delivering_addresses WHERE id = ?");
        $stmt->bind_param("i", $id_address);
        try {
            $stmt->execute();
        } catch (Exception $ex){
            return $ex->getMessage();
        }
        return  "";
    }
}