"use client";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Button } from "../ui/button";
import { Send } from "lucide-react";
import { Input } from "../ui/input";
import axios from "axios";
import { toast } from "sonner";

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
        <div>
            <div className="font-mono col-span-3 capitalize prose prose-invert max-w-none overflow-y-auto p-4 rounded-xl min-h-[200px] max-h-[70vh] border">
                {data ? (
                    <div className="text-xl uppercase whitespace-pre-wrap">
                        <ReactMarkdown>{data}</ReactMarkdown>
                    </div>
                ) : (
                    <p className="text-gray-500 italic">Your generated content will appear here...</p>
                )}
            </div>

            <div className="flex gap-x-2.5 items-center w-full mt-2">
                <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your prompt..."
                    className="flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            e.preventDefault();
                            handleSend();
                        }
                    }}
                />
                <Button onClick={handleSend} variant="default" aria-label="Send prompt">
                    <Send className="w-5 h-5" />
                </Button>
            </div>
        </div>
    );
}

export default Wiki;
