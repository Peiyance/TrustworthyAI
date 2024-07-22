import { postRequestAsync } from "./common";

const prefix = `attack`

export const APIPostAttack = (guideline: string, domain: string, strength_level: number, llmName: string) => {
    return postRequestAsync({guideline: guideline, domain: domain, strength_level: strength_level, llm_name: llmName}, `${prefix}/attack`)
};

export const APIPostDemoPrivacy = (prompt: string, llm_name: string) => {
    return postRequestAsync({prompt, llm_name}, `${prefix}/privacy`)
};

export const APIPostDemoBias = (prompt: string, llm_name: string, attribute: string) => {
    return postRequestAsync({prompt, llm_name, attribute}, `${prefix}/bias`)
};

export const APIPostDemoHarmfulOutput = (prompt: string, llm_name: string) => {
    return postRequestAsync({prompt, llm_name}, `${prefix}/harmful-output`)
};
