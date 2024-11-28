<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;

class SeedCases extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();  // Criando instância do Faker

        // Gerar 100 registros aleatórios
        for ($i = 0; $i < 100; $i++) {
            DB::table('cases')->insert([
                'case_desc_short' => $faker->sentence(6), 
                'case_desc_long' => $faker->paragraph(),  
                'case_jud' => rand(1, 10),             
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
