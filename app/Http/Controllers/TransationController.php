<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use App\Models\Wallet;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class TransationController extends Controller
{
    public function transfer(Request $request)
    {
        $request->validate([
            'amount' => 'required|numeric|min:0',
            'receiver_wallet_id' => 'required|exists:wallets,id',

        ]);

        $senderWallet = Auth::user()->wallet;

        $receiverWalletId = $request->receiver_wallet_id;
        $receiverWallet = Wallet::findOrFail($receiverWalletId);
        

        

        if ($senderWallet->balance < $request->amount) {
            return response()->json(['error' => 'Insufficient balance'], 422);
        }

        DB::beginTransaction();

        try {
            $senderWallet->decrement('balance', $request->amount);

            $receiverWallet->increment('balance', $request->amount);

            $this->insertTransaction($request->amount, $senderWallet->id, $receiverWalletId);

            DB::commit();

            return response()->json(['message' => 'Money transfer successful']);
        } catch (\Exception $e) {
            DB::rollback();
            return response()->json(['error' => 'Transaction failed. Please try again.'], 500);
        }
    }

    public function getSTransactions()
    {

        if(Auth::user()->role->name == 'admin')
        {
            $transactions = Transaction::with('senderWallet.user', 'receiverWallet.user')
            ->get();
        }
        else
        {

            $transactions = Transaction::with('senderWallet.user', 'receiverWallet.user')->where('sender_wallet_id', Auth::user()->wallet->id)
            ->get();
        }

        

        if ($transactions->isEmpty()) {
            return response()->json(['No transactions available'], 200);
        }

        return response()->json($transactions);
    }


    public function getRTransactions()
    {
        $transactions = Transaction::with('senderWallet.user', 'receiverWallet.user')->where('receiver_wallet_id', Auth::user()->wallet->id)->get();

        if ($transactions->isEmpty()) {
            return response()->json(['No transactions available'], 200);
        }

        return response()->json($transactions);
    }



    private function insertTransaction($amount, $senderWalletId, $receiverWalletId)
    {
        DB::table('transactions')->insert([
            'amount' => $amount,
            'sender_wallet_id' => $senderWalletId,
            'receiver_wallet_id' => $receiverWalletId,

        ]);
    }
}
