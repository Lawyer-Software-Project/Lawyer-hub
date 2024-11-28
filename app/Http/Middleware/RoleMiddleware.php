<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Models\UserModel;
use Illuminate\Support\Facades\Auth;


class RoleMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $user = UserModel::where('fk_user_id', Auth::user()->id)->first();

            if ($user->isLawyer() ) {
                return redirect('/');
            }
            else if ($user->isClient()) {
                return $next($request);
            }
    }
}
