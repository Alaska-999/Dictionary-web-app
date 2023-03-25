import React, {FormEvent} from 'react';
import styled from "styled-components";
import searchIcon from '/images/icon-search.svg'
import {useDispatch} from "react-redux";
import {loadWord} from "../store/reducers/wordActions";


const Search = () => {
    const dispatch = useDispatch()

    const toggleWord = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // @ts-ignore
        dispatch(loadWord((e.currentTarget.elements[0] as HTMLInputElement).value));
        (e.currentTarget.elements[0] as HTMLInputElement).value = ''
    }

    return (
        <Form onSubmit={toggleWord}>
            <Input placeholder={'Search for any word...'}/>
            <Button/>
        </Form>
    );
};

const Form = styled.form`
  margin-bottom: 20px;
  @media (max-width: 600px) {
    margin-bottom: 0;

  }
`

const Input = styled.input`
  border: none;
  background-color: var(--input-color);
  width: 100%;
  padding: 18px;
  border-radius: 15px;
  font-size: 16px;
  font-weight: 700;
  font-family: var(--family);
  color: var(--color-text);
    ::placeholder {
      color: var(--placeholder);
    }
  @media (max-width: 600px) {
    padding: 14px;
    font-size: 14px;
  }
`

const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  position: sticky;
  left: 870px;
  
  ::after {
    content: url(${searchIcon});
    position: relative;
    top: -35px;
    right: 20px;
  }
  @media (max-width: 600px) {
    ::after {
      top: -32px;
    }
  }
`

export default Search;