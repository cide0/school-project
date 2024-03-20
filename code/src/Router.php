<?php

namespace jiel;

use jiel\Controller\CoreAPIController;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\App;
use Slim\Routing\RouteCollectorProxy;

class Router
{
    public function __construct(private CoreAPIController $coreAPIController)
    {

    }

    public function setRoutes(App $app): void
    {
        $app->options('/{routes:.+}', function ($request, $response) {
            return $response;
        });

        $app->group('', function (RouteCollectorProxy $defaultPageRoute) {
            $defaultPageRoute->get('/animals/{id}', function (Request $request, Response $response, array $args) {
                $animalModel = $this->coreAPIController->fetchAnimalData($args['id']);
                $json = json_encode($animalModel);
                $response->getBody()->write($json);
                return $response->withHeader('Access-Control-Allow-Origin', '*')
                    ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
                    ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
            })->setName("animals");

        });
    }
}