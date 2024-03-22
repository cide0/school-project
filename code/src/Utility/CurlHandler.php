<?php

namespace jiel\Utility;

use jiel\Exception\CurlHandlerException;

class CurlHandler
{
    private function __construct()
    {

    }

    public static function sendRequest(string $url): array
    {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $response = curl_exec($ch);
        curl_close($ch);

        if($error = curl_error($ch)){
            throw new CurlHandlerException('Core API not available!', 500);
        }
        else {
            return json_decode($response, true);
        }
    }
}