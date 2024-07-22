import DropdownInput, { DropdownDataEntry } from "."

const models: DropdownDataEntry[] = [
    {
        key: "ChatGPT-3.5",
        data: "GPT35", 
    },
    { 
        key: "ChatGPT-4",
        data: "GPT4", 
    },
    {
        key: "Gemini",
        data: "Gemini"
    },
    // {
    //     key: "bank-of-america-chatbot-internal-v1.2.34",
    //     data: "bank-of-america-chatbot-internal-v1.2.34"
    // },
    // {
    //     key: "bank-of-america-chatbot-website-v1.1.20",
    //     data: "bank-of-america-chatbot-website-v1.1.20"
    // },
    // {
    //     key: "bank-of-america-chatbot-test-v1.3.0",
    //     data: "bank-of-america-chatbot-test-v1.3.0"
    // },
]
interface Props {
    onSelect: (value: string) => void;
}

export default function ModelSelection({ onSelect } : Props) {
    return <DropdownInput dataEntries={models} onSelect={onSelect} />
}
