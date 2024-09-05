<?php

/**
 * This file contains the MyClass class.
 *
 * @category CI/CD
 * @package  My\Project
 * @author   Md. Abu Shoyeb <mdsoyeb@iut-dhaka.edu>
 * @license  http://opensource.org/licenses/MIT MIT License
 * @link     https://github.com/ShoyebWritesCode/github-actions-learning.git
 */

declare(strict_types=1);

namespace My\Project;

use My\Project\Tools;
use My\Project\Helpers\Formatter;

/**
 * Class MyClass
 *
 * @category CI/CD
 * @package  My\Project
 * @author   Md. Abu Shoyeb <mdsoyeb@iut-dhaka.edu>
 * @license  http://opensource.org/licenses/MIT MIT License
 * @link     https://github.com/ShoyebWritesCode/github-actions-learning.git
 */
class MyClass extends ParentClass implements AnInterface
{
    /**
     * Processes the given arguments.
     *
     * @param string $arg1 First argument.
     * @param int    $arg2 Second argument.
     *
     * @return void
     */
    public function myFunction(string $arg1, int $arg2): void
    {
        if ($arg1 === 'example') {
            // Code
        }
    }
}
