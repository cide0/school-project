<?php

namespace jiel;

use Slim\App;

class Application
{
    public function __construct(private Router $router)
    {

    }
    public function run(App $app){
        $this->router->setRoutes($app);
    }
}