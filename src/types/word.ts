
interface Phonetics {
    text: string,
    audio?: any
}

interface Meanings {
    partOfSpeech: string,
    definitions: Definitions[],
    synonyms?: string[],
    antonyms?: string[]
}

interface Definitions {
    definition?: string,
    example?: string,

}

export interface IWord {
    word: string,
    phonetic: string,
    phonetics: Phonetics[],
    origin?: string,
    meanings: Meanings[]
}


