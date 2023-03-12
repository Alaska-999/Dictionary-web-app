import React, {useRef} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {IWord} from "../types/word";
import styled from "styled-components";
import soundImg from '/images/icon-play.svg'

const Word = () => {

    // @ts-ignore
    const word: IWord = useTypedSelector(state => state.wordReducer.word)

    const audioRef = useRef<HTMLAudioElement>(null);

    const playAudio = () => {
        if (audioRef.current !== null) {
            audioRef.current.play()
        }
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
                        {
                            word.phonetics ? <SoundButton onClick={playAudio}>
                                <Sound ref={audioRef} src={word.phonetics[0].audio}/>
                            </SoundButton> : ''
                        }
                    </Main>
                </Container>



                : ''
            }
        </>
    );
};

const Container = styled.div`
  font-family: sans-serif;
  color: var(--color-text);
`
const Main = styled.div`
  display: flex;
  justify-content: space-between;
`
const WordName = styled.div`
  font-size: 50px;
  font-weight: 700;
`
const Phonetic = styled.div`
  margin-top: 10px;
  font-size: 20px;
  color: var(--purple);
`
const SoundButton = styled.div`
  cursor: pointer;
  width: 100px;
  height: 100px;
  background-repeat: no-repeat;
  background-image: url(${soundImg});
`
const Sound = styled.audio`

`
const Segment = styled.div`

`


export default Word;