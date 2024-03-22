<?php

namespace jiel;
use Slim\Factory\AppFactory;

require_once(__DIR__ . '/../vendor/autoload.php');

date_default_timezone_set('Europe/Berlin');
session_start();

$app = AppFactory::create();

$factory = new Factory();
$factory->createApplication()->run($app);

$app->run();