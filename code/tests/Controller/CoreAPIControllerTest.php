<?php

namespace Controller;

use jiel\Controller\CoreAPIController;
use jiel\Exception\CurlHandlerException;
use jiel\Model\AnimalModel;
use PHPUnit\Framework\TestCase;

/**
 * @covers \jiel\Controller\CoreAPIController
 */
class CoreAPIControllerTest extends TestCase
{

    private array $data = [
        'animalName' => 'European robin',
        'binomialName' => 'Motacilla rubecula',
        'class' => 'Aves',
        'family' => 'Turdidae',
        'size' => 13,
        'lifespan' => '12 - 14 Months',
        'diet' => 'Mainly insects',
        'population' => '370 Million',
        'animalDescription' => 'The American robin (Turdus migratorius) is a migratory bird of the true thrush genus and Turdidae, the wider thrush family. It is named after the European robin because of its reddish-orange breast, though the two species are not closely related, with the European robin belonging to the Old World flycatcher family. The American robin is widely distributed throughout North America, wintering from southern Canada to central Mexico and along the Pacific coast.',
        'picture' => './../../assets/red-robin.jpg'
    ];

    public function testFetchAnimalData(): void
    {
        $animalModel = new AnimalModel($this->data);
        $id = "2";

        $coreAPIController = new CoreAPIController();

        $this->assertEquals($animalModel, $coreAPIController->fetchAnimalData($id));
    }

    public function testThrowsCorrectExceptionWhenCoreAPICallFails(): void
    {
        $coreAPIController = new CoreAPIController();

        $id = "2";

        $this->expectException(CurlHandlerException::class);
        $this->expectExceptionMessage('Core API not available!');

        $coreAPIController->fetchAnimalData($id, true);
    }
}
