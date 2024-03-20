<?php

namespace jiel\Controller;

use jiel\Model\AnimalModel;
use jiel\Utility\CurlHandler;

class CoreAPIController
{
    public function __construct()
    {

    }
    public function fetchAnimalData(string $id): AnimalModel
    {
        //$data = CurlHandler::sendRequest('core/api/request');
        $animalData = [];
        $animalData["animalName"] = "European robin";
        $animalData["binomialName"] = "Motacilla rubecula";
        $animalData["class"] = "Aves";
        $animalData["family"] = "Turdidae";
        $animalData["size"] = 13;
        $animalData["lifespan"] = "12 - 14 Months";
        $animalData["diet"] = "Mainly insects";
        $animalData["animalDescription"] = "The American robin (Turdus migratorius) is a migratory bird of the true thrush genus and Turdidae, the wider thrush family. It is named after the European robin because of its reddish-orange breast, though the two species are not closely related, with the European robin belonging to the Old World flycatcher family. The American robin is widely distributed throughout North America, wintering from southern Canada to central Mexico and along the Pacific coast.";
        $animalData["picture"] = "./../../assets/red-robin.jpg";
        $animalData["population"] = "370 Million";

        $animalModel = new AnimalModel($animalData);

        return $animalModel;
    }
}