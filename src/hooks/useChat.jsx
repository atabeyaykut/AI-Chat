import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState } from "react";


const genAI = new GoogleGenerativeAI("AIzaSyALkAXfHbqfXAZvXbmk1M7FX546dSLm3Hc");

const useChat = (modelName = "gemini-1.5-flash") => {

    const [responses, setResponses] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const model = genAI.getGenerativeModel({ model: modelName });

    const askBot = async (prompt) => {
        try {
            setLoading(true)
            setError(null)
            const result = await model.generateContent(prompt)
            setResponses(result.response.text())
        } catch (error) {
            setError(error)
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    return { responses, loading, error, askBot }

}


export default useChat;