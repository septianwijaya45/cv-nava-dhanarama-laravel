<?php

require_once 'vendor/autoload.php';

$app = require_once 'bootstrap/app.php';
$app->make('Illuminate\Contracts\Console\Kernel')->bootstrap();

use App\Models\Client;

echo "Total clients: " . Client::count() . PHP_EOL;
echo "Clients details:" . PHP_EOL;

Client::all()->each(function($client) {
    echo "ID: {$client->id}, Name: {$client->client_name}, Status: " . ($client->status ? 'true' : 'false') . PHP_EOL;
});

echo PHP_EOL . "Active clients (where status = true):" . PHP_EOL;
Client::where('status', true)->get()->each(function($client) {
    echo "ID: {$client->id}, Name: {$client->client_name}" . PHP_EOL;
});
