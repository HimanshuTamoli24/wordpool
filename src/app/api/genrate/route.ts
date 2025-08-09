import { wordToPageGenerator } from "@/Helper/allmodels";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const word = searchParams.get("word");

    if (!word) {
        return new Response("Missing 'word' query parameter", { status: 400 });
    }
    try {
        const result = await wordToPageGenerator(word);
        return new Response(result.join(""), {
            status: 200,
            headers: { "Content-Type": "text/plain" },
        });
    } catch (error) {
        console.error(`Error generating article for "${word}":`, error);
        return new Response(`Failed to generate article for "${word}"`, {
            status: 500,
        });
    }
}
