import { wordToPageGenerator } from "@/Helper/allmodels";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const word = "i had bad day";
    console.log(`Received request to generate article for word: "${word}"`);

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
