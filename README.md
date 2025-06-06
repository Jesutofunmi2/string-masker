# string-masker

A lightweight utility to mask parts of strings. Useful for hiding sensitive parts of emails, phone numbers, etc.

## Installation

```bash
npm install string-masker

    ---

import { mask } from 'string-masker';

console.log(mask("helloWorld", "*", 4)); 
// ****World

console.log(mask("1234567890", "#", 4, false)); 
// 123456####
