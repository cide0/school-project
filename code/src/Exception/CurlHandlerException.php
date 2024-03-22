<?php

namespace jiel\Exception;

use Exception;

class CurlHandlerException extends Exception
{
    private string $userMessage;
    private int $statusCode;

    public function __construct(
        string $internalMessage,
        int $statusCode
    ) {
        parent::__construct($internalMessage, $statusCode);
    }
}