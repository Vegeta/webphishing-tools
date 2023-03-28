<?php

use Illuminate\Database\Capsule\Manager as DB;

class PhishDatabase {

	function init() {
		$dbconfig = [
			'driver' => env('DB_DRIVER', 'mysql'),
			'host' => env('DB_HOST', '127.0.0.1'),
			'port' => env('DB_PORT', '5432'),
			'database' => env('DB_DATABASE', 'elecciones'),
			'username' => env('DB_USERNAME', 'postgres'),
			'password' => env('DB_PASSWORD', 'postgres'),
			'charset' => 'utf8',
			'prefix' => env('DB_PREFIX', ''),
			'prefix_indexes' => true,
			'schema' => 'public',
			'sslmode' => 'prefer',
			'options' => [
				\PDO::ATTR_DEFAULT_FETCH_MODE => \PDO::FETCH_ASSOC,
				\PDO::ATTR_TIMEOUT => 2
			]
		];

		$laraCon = new Illuminate\Container\Container();
		$capsule = new \Illuminate\Database\Capsule\Manager($laraCon);
		$capsule->addConnection($dbconfig);
		$capsule->setEventDispatcher(new \Illuminate\Events\Dispatcher($laraCon));
		$capsule->setAsGlobal();
		$capsule->bootEloquent();
		return $capsule;
	}

	function saveData($lista) {
		DB::connection()->getPdo()->exec('truncate table ejercicio');
		DB::connection()->getPdo()->exec('ALTER SEQUENCE ejercicio_id_seq RESTART;');

		foreach ($lista as $rec) {
			DB::table('ejercicio')->insert((array)$rec);
		}

	}

}