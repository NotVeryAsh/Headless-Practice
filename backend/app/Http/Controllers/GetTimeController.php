<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class GetTimeController extends Controller
{
    public function __invoke()
    {
        return response()->json([
            'time' => Carbon::now()->format('Y/m/d H:i')
        ]);
    }
}
