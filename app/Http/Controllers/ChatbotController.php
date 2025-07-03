<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;

class ChatbotController extends Controller
{
    public function index()
    {
        return Inertia::render('Chat');
    }

    public function chat(Request $request)
    {
        $userMessage = $request->input('message');
    
        $response = Http::withToken(env('OPENAI_API_KEY'))
            ->post('https://api.openai.com/v1/chat/completions', [
                'model' => 'gpt-3.5-turbo',
                'messages' => [
                    ['role' => 'user', 'content' => $userMessage],
                ]
            ]);
    
        // ✅ Log full response
        Log::info('OpenAI Response: ' . $response->body());
    
        if ($response->failed()) {
            Log::error('OpenAI API Error: ' . $response->body());
            return response()->json(['reply' => 'Failed to contact AI.'], 500);
        }
    
        $botReply = $response['choices'][0]['message']['content'] ?? 'Sorry, something went wrong.';
    
        return response()->json(['reply' => $botReply]);
    }
}
