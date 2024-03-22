<?php

namespace Model;

use jiel\Model\AnimalModel;
use PHPUnit\Framework\TestCase;

/**
 * @covers \jiel\Model\AnimalModel
 */
class AnimalModelTest extends TestCase
{
    private array $actualData = [
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

    private array $expectedData = [
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

    public function testCanCreateModelWithData(): void
    {
        $animalModel = new AnimalModel($this->actualData);
        $this->assertEquals($this->expectedData, $animalModel->jsonSerialize());
    }

    public function testCanCreateModelWithEmptyData(): void
    {
        $animalModel = new AnimalModel([]);
        $emptyResult = [
            'animalName' => null,
            'binomialName' => null,
            'class' => null,
            'family' => null,
            'size' => null,
            'lifespan' => null,
            'diet' => null,
            'animalDescription' => null,
            'picture' => null,
            'population' => null,
        ];
        $this->assertEquals($emptyResult, $animalModel->jsonSerialize());
    }
}
