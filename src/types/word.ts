
interface Phonetics {
    text: string,
    audio?: any
}

export interface IWord {
    word: string,
    phonetic: string,
    phonetics: Phonetics[],
    origin?: string,
    meanings: [
        {
            partOfSpeech: string,
            definitions: [
                {
                    definition: string,
                    example: string,
                    synonyms: string[],
                    antonyms: string[]
                }
            ]
        },
        {
            partOfSpeech: string,
            definitions: [
                {
                    definition: string,
                    example: string,
                    synonyms: string[],
                    antonyms: string[]
                }
            ]
        },
        {
            partOfSpeech: string,
            definitions: [
                {
                    definition: string,
                    example: string,
                    synonyms: string[],
                    antonyms: string[]
                }
            ]
        }
    ]
}


