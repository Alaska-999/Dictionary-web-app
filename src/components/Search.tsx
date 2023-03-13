import React, {FormEvent, useEffect} from 'react';
import styled from "styled-components";
import searchIcon from '/images/icon-search.svg'
import {useDispatch} from "react-redux";
import {loadWord} from "../store/reducers/wordActions";


const Search = () => {
    const dispatch = useDispatch()

    const toggleWord = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // @ts-ignore
        dispatch(loadWord((e.currentTarget.elements[0] as HTMLInputElement).value))
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
`

const Input = styled.input`
  border: none;
  background-color: var(--input-color);
  width: 100%;
  padding: 18px;
  border-radius: 15px;
  font-size: 16px;
  font-weight: 700;
  color: var(--color-text);
    ::placeholder {
      color: var(--placeholder);
    }
`

const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  ::after {
    content: url(${searchIcon});
    position: relative;
    top: -35px;
    left: 540px;
  }
 
`

export default Search;