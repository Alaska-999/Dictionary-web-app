
interface Phonetics {
    text: string,
    audio?: any
}

interface Meanings {
    partOfSpeech: string,
    definitions: [
        {
            definition?: string,
            example?: string,
            synonyms?: string[],
            antonyms?: string[]
        }
    ]
}

export interface IWord {
    word: string,
    phonetic: string,
    phonetics: Phonetics[],
    origin?: string,
    meanings: Meanings[]
}


