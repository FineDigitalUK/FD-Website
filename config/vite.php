<?php

use craft\helpers\App;

return [
    'devServerPublic' => App::env('VITE_DEV_SERVER_PUBLIC') ?: 'http://localhost:5173',
    'devServerInternal' => App::env('VITE_DEV_SERVER_INTERNAL') ?: 'http://localhost:5173',
    'checkDevServer' => true,
    'includeReactRefreshShim' => false,
    'includeModulePreloadShim' => true,
    'manifestPath' => 'dist/manifest.json',
    'serverPublic' => App::env('PRIMARY_SITE_URL') ?: '@web',
    'errorEntry' => '',
    'cacheKeySuffix' => '',
    'devServerRunning' => false,
    'runningDevServer' => false,
];