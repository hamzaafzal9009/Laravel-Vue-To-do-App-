# To Do app

#### Server Requirements

* PHP >= 7.3
* BCMath PHP Extension
* Ctype PHP Extension
* Fileinfo PHP Extension
* JSON PHP Extension
* Mbstring PHP Extension
* OpenSSL PHP Extension
* PDO PHP Extension
* Tokenizer PHP Extension
* XML PHP Extension
* ImageMagick
* Laravel utilizes [Composer](https://getcomposer.org/) to manage its dependencies. So, before using Laravel, make sure you have Composer installed on your machine.
---

#### Documentations

* [Laravel 8.x](https://laravel.com/docs/8.x/installation)
---
#### Installation

* Git clone
```
$ git clone https://gitlab.com/aleksandar.syncit/laravel-vuejs-app.git
```

Step by Step

* Install Laravel packages
```
$ composer install
```

* Duplicate .env.example and rename duplicated file to .env and change credentials for DB and set your application domain "SANCTUM_STATEFUL_DOMAINS"

* Generate Application Key
```
$ php artisan key:generate
```
* Generate a compiled class file with default options
```
$ php artisan optimize
```
* Create Database tables
```
$ php artisan migrate
```
* Start server (http://localhost:8000)
```
$ php artisan serve
```

* That's everything on the backend part.
