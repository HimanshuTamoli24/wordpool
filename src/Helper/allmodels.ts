import { Groq } from 'groq-sdk';

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

const content = (words: string) => `
TASK
You are to compose a short, refined, and engaging article inspired by the provided word or phrase. Treat the word with the respect and curiosity you would grant a rare artifact in the library of English literature.

INPUT
term: "${words}"

OUTPUT STRUCTURE
1) First line: The normalized form of the term, followed by a single colon (e.g., hello:)
2) A newline, then two or three paragraphs of continuous prose
3) Exactly one blank line between paragraphs; no extra or missing blank lines

LENGTH
- Total word count: between 120 and 250 words

STYLE
- Written in elegant, fluid, modern English, yet clear and accessible to a broad audience
- Sentences should vary in rhythm and length, weaving precision with natural flow
- Avoid mechanical repetition; use rich synonyms and related forms naturally
- Treat the input as a complete phrase in meaning, not a literal breakdown of each word
- Infuse tone with generosity, curiosity, and an inclusive warmth
- Avoid overuse of the term itself; mention it only where contextually meaningful

FORMAT RESTRICTIONS
- Plain text only: no markdown, HTML, symbols, emojis, or formatting characters (#, *, _, ~, \`, etc.)
- Maintain consistent spacing with no double spaces
- No lists, titles, or headings beyond the first line

TERM SANITIZATION
- Trim unnecessary whitespace
- Collapse exaggerated or repeated characters to their standard form (e.g., "heyyyyyyyy" → "hey")
- If the input is nonsense or indecipherable, replace it with:
unknown:
and describe the concept of the unknown in the body

CONTENT GUIDELINES
- Paragraph 1: Introduce the essence and significance of the term in everyday life and cultural understanding
- Paragraph 2: Explore deeper associations, possible interpretations, historical or social contexts
- Paragraph 3 (optional): Offer a subtle narrative, example, or poetic reflection to leave a lasting impression

VALIDATION CHECKS
- 2–3 paragraphs only
- Word count is within range
- First line strictly follows the "term:" format
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


const asciiPrompt = (topic: string) =>
    `1. "art": meta ASCII visualization of the word "${topic}":
- Palette: │─┌┐└┘├┤┬┴┼►◄▲▼○●◐◑░▒▓█▀▄■□▪▫★⟨⟩/\\_|
    - Shape mirrors concept - make the visual form embody the word's essence
        - Examples:
* "explosion" → radiating lines from center
    * "hierarchy" → pyramid structure
        * "flow" → curved directional lines
            - Return as single string with \n for line breaks`;


export const generateAscii = async (topic: string): Promise<string> => {
    if (!topic) throw new Error("No topic provided");

    const chatCompletion = await groq.chat.completions.create({
        messages: [{ role: "user", content: asciiPrompt(topic) }],
        model: "meta-llama/llama-4-scout-17b-16e-instruct",
        temperature: 0.7,
        max_completion_tokens: 512,
        stream: true,
    });

    let result = "";
    for await (const chunk of chatCompletion) {
        result += chunk.choices[0]?.delta?.content || "";
    }

    // Attempt to extract JSON.art
    try {
        const parsed = JSON.parse(result.trim());
        return parsed.art || "";
    } catch (err) {
        console.log("Error parsing JSON from Groq:", err);
        console.log("Raw response from Groq:", result);
        throw new Error(`Invalid JSON from Groq: ${result}`);
    }
};
