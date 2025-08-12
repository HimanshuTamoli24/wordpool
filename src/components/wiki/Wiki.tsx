"use client";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Button } from "../ui/button";
import { Send } from "lucide-react";
import { Input } from "../ui/input";
import axios from "axios";
import { toast } from "sonner";
import { PlaceholdersAndVanishInput } from "../ui/InputAd";

function Wiki() {
    const [input, setInput] = useState("");
    const [data, setData] = useState("");

    const getGeneratedData = async (word: string) => {
        try {
            const response = await axios.get(`/api/genrate?word=${encodeURIComponent(word)}`);
            setData(response.data);
            toast.success("Data generated successfully");
        } catch (error) {
            console.error("Error fetching data:", error);
            toast.error("Failed to generate data");
        }
    };

    const handleSend = () => {
        if (!input.trim()) {
            toast.error("Please enter a prompt");
            return;
        }
        getGeneratedData(input.trim());
    };

    return (
        <div className="flex flex-col h-screen relative ">
            <div className="font-mono  capitalize prose prose-invert max-w-none overflow-y-auto p-4 rounded-xl max-h-vh  border min-h-[500px] mt-3.5">
                {data ? (
                    <div className="text-sm uppercase whitespace-pre-wrap leading-8 tracking-widest">
                        <ReactMarkdown>{data}</ReactMarkdown>
                    </div>
                ) : (
                    <p className="text-gray-500  min-h-full italic">Your generated content will appear here...</p>
                )}

            </div>
            {/* <div className="border-t border-white/20  px-2.5 "/> */} <div className="my-3.5">
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
                        "One click away"
                    ]

                    }
                    onChange={(e) => setInput(e.target.value)}
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSend();
                    }}
                />

                
            </div>
        </div>
    );
}

export default Wiki;
