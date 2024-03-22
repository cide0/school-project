<?php

namespace jiel;

use jiel\Controller\CoreAPIController;

class Factory
{
    public function createApplication(): Application
    {
        return new Application(
            $this->createRouter()
        );
    }

    private function createRouter(): Router
    {
        return new Router(
            new CoreAPIController()
        );
    }
}