<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\API\BaseController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Database\QueryException;
use Illuminate\Support\Str;



class AuthController extends BaseController
{
    /**
     * Register api
     *
     * @return \Illuminate\Http\Response
     */

    /** get all users */
    public function index()
    {
        $users = User::all();
        return $this->sendResponse($users, 'Displaying all users data');
    }

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'firstname' => 'required',
            'lastname' => 'required',
            'email' => 'required|email',
            'password' => 'required',
            'c_password' => 'required|same:password',
        ]);

        if ($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->errors());
        }

        $input = $request->all();
        $input['password'] = Hash::make($input['password']);


        try {
            $user = User::create($input);
            $success['firstname'] =  $user->firstname;
            return $this->sendResponse($success, 'User registered successfully.');
        } catch (QueryException $e) {

            if (Str::contains($e->getMessage(), 'Duplicate entry')) {
                return $this->sendError('Email already taken.', [], 409);
            }
            return $this->sendError('Failed to register user.', [], 500);
        }
    }

    /**
     * Login api
     *
     * @return \Illuminate\Http\Response
     */

    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (!Auth::attempt($credentials)) {
            $user = User::where('email', $request->email)->first();

            if (!$user) {
                return $this->sendError('Email not found.', ['error' => 'Email not found'], 401);
            } else {
                return $this->sendError('Incorrect password.', ['error' => 'Incorrect password'], 401);
            }
        } else {
            $user = Auth::user();
            $success['token'] =  $user->createToken('MyApp')->plainTextToken;
            $success['user'] =  $user;
            return $this->sendResponse($success, 'User logged in successfully.');
        }
    }
    

    public function logout(Request $request)
    {

        
            $user = auth()->user();
            // $user->tokens()->where('id', $user->currentAccessToken()->id)->delete();
            $user->currentAccessToken()->delete();
            return $this->sendResponse([], 'User logout successfully.');
        
    }
}
