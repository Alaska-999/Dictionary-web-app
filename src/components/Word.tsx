import React, {useRef} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {IWord} from "../types/word";
import styled from "styled-components";
import soundImg from '/images/icon-play.svg'

const Word = () => {

// @ts-ignore
    const word: IWord = useTypedSelector(state => state.wordReducer.word)
    const {error, status} = useTypedSelector(state => state.wordReducer)

    const audioRef = useRef<HTMLAudioElement>(null);

    const playAudio = () => {
        if (audioRef.current !== null) {
            audioRef.current.play()
        }
    }

    if (status === 'loading') {
        return <h1>Loading...</h1>
    } else if (error) {
        return <h1>{error}</h1>
    }

    return (
        <>
            {word
                ?
                <Container>
                    <Main>
                        <div>
                            <WordName>{word.word}</WordName>
                            <Phonetic>{word.phonetic}</Phonetic>
                        </div>

                        {word.phonetics ?
                            word.phonetics.find(p => p.audio !== '') &&
                            <SoundButton onClick={playAudio}>
                                <Sound ref={audioRef} src={word.phonetics.find(p => p.audio)?.audio}/> </SoundButton>
                            : ''}
                    </Main>

                    {word.meanings && word.meanings.map(m => {
                        return (
                            <Meanings>
                                <Segment>
                                    <PartOfSpeech>{m.partOfSpeech}</PartOfSpeech>
                                    <Line/>
                                </Segment>
                                <Heading>Meaning</Heading>
                                {m.definitions.map(d => (
                                    <MeaningsItem>
                                        <Definition>{d.definition} </Definition>
                                        {d.example ? <Example>"{d.example}"</Example> : ''}
                                    </MeaningsItem>
                                ))}

                                {m.synonyms && m.synonyms?.length > 0 && (
                                    <ControlNames>
                                        <Heading>Synonyms</Heading>
                                        <Expressions>
                                            {m.synonyms.map((s) => (
                                                <ControlName>{s}</ControlName>
                                            ))}
                                        </Expressions>
                                    </ControlNames>

                                )}
                                {m.antonyms && m.antonyms?.length > 0 && (
                                    <ControlNames>
                                        <Heading>Antonyms</Heading>
                                        <Expressions>
                                            {m.antonyms.map((a) => (
                                                <ControlName>{a}</ControlName>
                                            ))}
                                        </Expressions>
                                    </ControlNames>
                                )}


                            </Meanings>
                        );
                    })}

                    {
                        word.word &&
                        <>
                            <Line/>
                            <Source>

                                Source
                                <Link href={`https://en.wiktionary.org/wiki/${word.word}`}>
                                    https://en.wiktionary.org/wiki/{word.word}
                                </Link>
                            </Source>
                        </>
                    }
                </Container>
                : ''
            }
        </>
    );
};

const Container = styled.div`
  font-family: var(--family);
  color: var(--color-text);
`

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const WordName = styled.div`
  font-size: 50px;
  font-weight: 700;
  
  @media (max-width: 600px) {
    font-size: 36px;
  }
`

const Phonetic = styled.div`
  margin: 10px 0;
  font-size: 20px;
  color: var(--purple);
  
  @media (max-width: 600px) {
    font-size: 18px;
  }
`

const SoundButton = styled.div`
  cursor: pointer;
  width: 100px;
  height: 100px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${soundImg});
  
  @media (max-width: 600px) {
    width: 60px;
    height: 60px;
  }
`
const Sound = styled.audio`

`

const Meanings = styled.div`
  margin: 20px 0;
`

const Segment = styled.div`
  display: flex;
  font-family: var(--family);
  font-size: 20px;
  font-weight: 500;
  font-style: italic;
  margin-bottom: 25px;
  
  @media (max-width: 600px) {
    font-size: 18px;
  }
`

const PartOfSpeech = styled.div`
  margin-right: 10px;
`
const Line = styled.div`
  border-top: 1px solid var(--line-color);
  margin: auto;
  flex: 1;
`

const Heading = styled.div`
  color: var(--gray);
  margin-bottom: 20px;
`

const MeaningsItem = styled.li`
  margin-left: 15px;
  font-size: 15px;
  line-height: 21px;
  margin-bottom: 10px;
  ::marker {
    color: var(--purple);
  }

  @media (max-width: 600px) {
    font-size: 14px;
    line-height: 18px;
  }
`

const Definition = styled.div`
  margin-left: 20px;
  position: relative;
  bottom: 20px;
  margin-bottom: -10px;
`

const Example = styled.div`
  color: var(--gray);
  margin-left: 20px;
  margin-bottom: 20px;
`

const Expressions = styled.div`
  display: flex;
  flex-wrap: wrap;

`
const ControlNames = styled.div`
  display: flex;
  margin: 20px 0;
`

const ControlName = styled.div`
  margin-left: 15px;
  color: var(--purple);
  font-weight: 700;
  max-width: 500px;
`

const Source = styled.div`
  margin-top: 25px;
  font-size: 14px;
  color: var(--gray);

`
const Link = styled.a`
  margin-left: 20px;
  text-decoration: none;
  color: var(--color-text);
`


export default Word;