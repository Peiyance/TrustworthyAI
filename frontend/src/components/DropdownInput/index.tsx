import { AutoComplete, Input } from "antd";
import { DefaultOptionType } from "antd/es/select";
import { useEffect, useState } from "react";

export class DropdownDataEntry {
    // `key` field is used for query
    readonly key: string;
    readonly data: string;

    constructor(key: string, data: string) {
        this.key = key;
        this.data = data;
    }
}

const searchForResults = (key: string, dataEntries: DropdownDataEntry[]) => {
    return dataEntries.filter(entry => entry.key.toLowerCase().includes(key.toLocaleLowerCase()));
}

export default function DropdownInput({
    dataEntries,
    onSelect,
    placeholder = 'Input here...',
    defaultValue = '',
    disabled = false,
}: {
    dataEntries: DropdownDataEntry[];
    onSelect: (value: string) => void;
    placeholder?: string;
    defaultValue?: string;
    disabled?: boolean;
}) {
    const [currResults, setCurrResults] = useState<DefaultOptionType[]>([]);
    const [currQuery, setCurrQuery] = useState<string>('');

    useEffect(() => {
        if (dataEntries.length === 0) return; 
        const newResults: DropdownDataEntry[] = currQuery ? searchForResults(currQuery, dataEntries) : dataEntries;
        const newOptions = newResults.map(entry => {return {
            label: entry.key,
            value: entry.data
        }})
        setCurrResults(newOptions);
    }, [dataEntries, currQuery])

    const handleSearch = (query: string) => {
        setCurrQuery(query);
    }

    return (
        <div>
            <AutoComplete
                dropdownMatchSelectWidth 
                options={currResults}
                onSearch={handleSearch}
                onSelect={(value: string) => {
                    onSelect(value);
                }}
                disabled={disabled}
                defaultValue={defaultValue}
            >
                <Input.Search placeholder={placeholder} enterButton />
            </AutoComplete>
        </div>
    )
}