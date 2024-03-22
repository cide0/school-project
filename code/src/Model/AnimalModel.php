<?php

namespace jiel\Model;

use JsonSerializable;

class AnimalModel implements JsonSerializable
{
    private ?string $animalName = null;
    private ?string $binomialName = null;
    private ?string $class = null;
    private ?string $family = null;
    private ?int $size = null;
    private ?string $lifespan = null;
    private ?string $diet = null;
    private ?string $population = null;
    private ?string $animalDescription = null;
    private ?string $picture = null;

    public function __construct(array $data)
    {
        if (array_key_exists("animalName", $data))
        {
            $this->animalName = $data["animalName"];
        }
        if (array_key_exists("binomialName", $data))
        {
            $this->binomialName = $data["binomialName"];
        }
        if (array_key_exists("class", $data))
        {
            $this->class = $data["class"];
        }
        if (array_key_exists("family", $data))
        {
            $this->family = $data["family"];
        }
        if (array_key_exists("size", $data))
        {
            $this->size = $data["size"];
        }
        if (array_key_exists("lifespan", $data))
        {
            $this->lifespan = $data["lifespan"];
        }
        if (array_key_exists("diet", $data))
        {
            $this->diet = $data["diet"];
        }
        if (array_key_exists("population", $data))
        {
            $this->population = $data["population"];
        }
        if (array_key_exists("animalDescription", $data))
        {
            $this->animalDescription = $data["animalDescription"];
        }
        if (array_key_exists("picture", $data))
        {
            $this->picture = $data["picture"];
        }
    }
    public function jsonSerialize(): array
    {
        $animalData = [];
        $animalData["animalName"] = $this->animalName;
        $animalData["binomialName"] = $this->binomialName;
        $animalData["class"] = $this->class;
        $animalData["family"] = $this->family;
        $animalData["size"] = $this->size;
        $animalData["lifespan"] = $this->lifespan;
        $animalData["diet"] = $this->diet;
        $animalData["animalDescription"] = $this->animalDescription;
        $animalData["picture"] = $this->picture;
        $animalData["population"] = $this->population;

        return $animalData;
    }
}