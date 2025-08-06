import { Groq } from 'groq-sdk';

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

const content = (words: string) => `
You are an AI-powered infinite wiki generator. For the word or sentence: "${words}", write a short and interesting article (80–150 words)...
`;

export const wordToPageGenerator = async (word: string): Promise<string[]> => {
    if (!word) return [];

    const prompt = content(word);
    console.log(`\nGenerating article for: "${word}"\n`);

    try {
        const chatCompletion = await groq.chat.completions.create({
            messages: [{ role: 'user', content: prompt }],
            model: 'meta-llama/llama-4-scout-17b-16e-instruct',
            temperature: 1,
            max_completion_tokens: 1024,
            top_p: 1,
            stream: true,
        });

        const articleParts: string[] = [];
        for await (const chunk of chatCompletion) {
            articleParts.push(chunk.choices[0]?.delta?.content || '');
        }

        console.log('\n✅ Done generating article.\n');
        return articleParts;

    } catch (error) {
        console.error(`❌ Error generating article for "${word}":`, error);
        throw new Error(`Failed to generate article for "${word}"`);
    }
};
