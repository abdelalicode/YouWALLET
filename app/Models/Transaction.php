<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Transaction extends Model
{
    use HasFactory;

    protected $fillable = [
        'amount',
        'sender_wallet_id',
        'receiver_wallet_id'
    ];
    

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->{$model->getKeyName()} = Str::uuid();
        });
    }

    public function senderWallet()
    {
        return $this->belongsTo(Wallet::class, 'sender_wallet_id');
    }

    public function receiverWallet()
    {
        return $this->belongsTo(Wallet::class, 'receiver_wallet_id');
    }

}
