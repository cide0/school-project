<?php

namespace tests;

use jiel\Application;
use jiel\Factory;
use PHPUnit\Framework\TestCase;

/**
 * @covers \jiel\Factory
 */
class FactoryTest extends TestCase
{
    private function testCreationOfApplication(): void
    {
        $factory = new Factory();
        $this->assertEquals(Application::class, $factory->createApplication());
    }
}
