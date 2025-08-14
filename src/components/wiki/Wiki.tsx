"use client";
import React, { useState, } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";
import { PlaceholdersAndVanishInput } from "../ui/InputAd";
import { TextHoverEffect } from "../ui/Spotlight";
import LoadingLetters from "@/loading";

const getGeneratedData = async (word: string) => {

    const { data } = await axios.get(`/api/genrate?word=${encodeURIComponent(word)}`);
    console.log("data", data)
    if (typeof data === "string") {
        return data.split(" ").filter(Boolean);
    }
    throw new Error("Unexpected API response");

}


function Wiki() {
    const [input, setInput] = useState("wordpool");
    const [queryWord, setQueryWord] = useState(input);
    const { data: words = [], isLoading, error } = useQuery({
        queryKey: ["generatedData", queryWord],
        queryFn: () => getGeneratedData(queryWord),
        enabled: !!queryWord
    });

    const clickDelayRef = React.useRef<NodeJS.Timeout | null>(null);

    const handleWordClick = (word: string) => {
        if (clickDelayRef.current) {
            clearTimeout(clickDelayRef.current);
        }

        clickDelayRef.current = setTimeout(() => {
            setInput(word);
            setQueryWord(word);
        }, 500); // delay before actually fetching
    };

    if (error) {
        toast.error( error.message||"Error fetching data");
    }
    return (
        <div className="flex flex-col relative sm:mb-20 mb-9">
            <div className="font-mono prose prose-invert max-w-none overflow-y-auto p-4 rounded-xl max-h-96 min-h-[400px] sm:min-h-[500px] mt-3.5">
                {isLoading ? <LoadingLetters /> : words.length ? (
                    <div className="text-sm whitespace-pre-wrap leading-8 tracking-widest">
                        {words.map((word, i) => (
                            <span
                                key={i}
                                className="cursor-pointer animated-underline"
                                onClick={() => handleWordClick(word)}
                            >
                                {word}
                            </span>
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col justify-center items-center w-full h-full">
                        <TextHoverEffect text="WordPool." />
                        <p className="mt-3 text-center text-gray-400 max-w-lg font-semibold tracking-wide">
                            Search. Learn. Master. Words made simple.
                        </p>
                    </div>
                )}
            </div>

            <div className="my-3.5">
                <PlaceholdersAndVanishInput
                    placeholders={[
                        "Start anywhere",
                        "Click to explore",
                        "One word, many paths",
                        "Tap and go deeper",
                        "Follow the chain",
                        "From here to anywhere",
                        "Ideas in motion",
                        "Jump between worlds",
                        "Click. Learn. Repeat.",
                        "One click away",
                    ]}
                    onChange={(e) => setInput(e.target.value)}
                    onSubmit={(e) => {
                        e.preventDefault();
                        setQueryWord(input)
                    }}
                />
            </div>
        </div>
    );
}

export default Wiki;
