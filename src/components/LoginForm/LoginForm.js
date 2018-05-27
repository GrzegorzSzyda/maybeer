// @flow
import React from 'react';
import styled from 'styled-components';

type LoginFormProps = {
    show: boolean,
    onLogin(): void
};

export const LoginForm = ({ show, onLogin }: LoginFormProps) => {
    if (!show) {
        return null;
    }
    return (
        <FormWrapper>
            <Form>
                <FacebookLoginButton onClick={onLogin}>
                    Zaloguj się Facebookiem
                </FacebookLoginButton>
            </Form>
        </FormWrapper>
    );
};

const FormWrapper = styled.div`
    position: fixed;
    bottom: 68px;
    left: 0;
    right: 0;
    background: #f2994a;
    z-index: 1;
    box-shadow: 0 -2px 2px rgba(0, 0, 0, 0.25);
`;

const Form = styled.form`
    max-width: 800px;
    margin: 0 auto;
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FacebookLoginButton = styled.button`
    background: #fff;
    border: none;
    padding: 0.5em 1em;
    font-size: 1.2em;
`;
