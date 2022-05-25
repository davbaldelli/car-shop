<?php

function generateToken($username, $role): string
{
    // Create token header as a JSON string
    $header = json_encode(['typ' => 'JWT', 'alg' => 'HS256']);

    // Create token payload as a JSON string
    $payload = json_encode(['username' => $username,'role' => $role]);

    // Encode Header to Base64Url String
    $base64UrlHeader = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($header));

    // Encode Payload to Base64Url String
    $base64UrlPayload = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($payload));

    // Create Signature Hash
    $signature = hash_hmac('sha256', $base64UrlHeader . "." . $base64UrlPayload, 'abC123!', true);

    // Encode Signature to Base64Url String
    $base64UrlSignature = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($signature));

    // Create JWT
    return $base64UrlHeader . "." . $base64UrlPayload . "." . $base64UrlSignature;


}

function is_jwt_valid($jwt, $secret = 'abC123!'): bool
{
    // split the jwt
    $tokenParts = explode('.', $jwt);
    $header = base64_decode($tokenParts[0]);
    $payload = base64_decode($tokenParts[1]);
    $signature_provided = $tokenParts[2];

    // check the expiration time - note this will cause an error if there is no 'exp' claim in the jwt
    //$expiration = json_decode($payload)->exp;
    //$is_token_expired = ($expiration - time()) < 0;
    $is_token_expired = false;

    // build a signature based on the header and payload using the secret
    $base64_url_header = base64url_encode($header);
    $base64_url_payload = base64url_encode($payload);
    $signature = hash_hmac('SHA256', $base64_url_header . "." . $base64_url_payload, $secret, true);
    $base64_url_signature = base64url_encode($signature);

    // verify it matches the signature provided in the jwt
    $is_signature_valid = ($base64_url_signature === $signature_provided);

    if ($is_token_expired || !$is_signature_valid) {
        return false;
    } else {
        return true;
    }
}

function getJWTPayload($jwt, $secret = 'abC123!'){
    $tokenParts = explode('.', $jwt);
    return base64_decode($tokenParts[1]);
}


function base64url_encode($str): string
{
    return rtrim(strtr(base64_encode($str), '+/', '-_'), '=');
}