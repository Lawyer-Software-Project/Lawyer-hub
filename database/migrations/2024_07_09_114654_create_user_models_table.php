<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('cad_users', function (Blueprint $table) {
            $table->bigIncrements('usu_id'); 
            $table->string('usu_nome');
            $table->string('usu_email')->unique();
            $table->string('usu_password');
            $table->boolean('usu_admin')->default(false);
            $table->boolean('usu_lawyer')->default(false)->index('idx_usu_lawyer');
            $table->string('usu_oab')->nullable();
            $table->string('usu_cpf', 12)->unique(); 
            $table->string('usu_phone', 12);
            $table->timestamps();
        });
        

        Schema::create('sessions', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->foreignId('user_id')->nullable()->index();
            $table->string('ip_address', 45)->nullable();
            $table->text('user_agent')->nullable();
            $table->longText('payload');
            $table->integer('last_activity')->index();
        });

    }

    public function down(): void
    {
        Schema::dropIfExists('cad_users');
        Schema::dropIfExists('sessions');

    }
};

