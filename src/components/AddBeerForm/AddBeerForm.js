// @flow
import React from 'react';
import styled from 'styled-components';

type AddBeerFormProps = {};

export const AddBeerForm = (props: AddBeerFormProps) => (
    <Container>
        <PhotoField>Tu bedą zdjęcia</PhotoField>
        <NameField type="text" placeholder="Nazwa piwa" />
        <RateField>Ocena</RateField>
        <DiscriptionField placeholder="Opis" />
    </Container>
);

const Container = styled.div`
    display: grid;
    height: calc(100vh - 70px);
    grid-template-rows: 210px auto auto 1fr;
    grid-gap: 1em;
    padding: 1em;
`;

const PhotoField = styled.div`
    background: rgba(255, 255, 255, 0.1);
    font-size: 1.3em;
`;

const NameField = styled.input`
    font: inherit;
    background: #fff;
    font-size: 1.3em;
    padding: 1em;
`;
const RateField = styled.div`
    background: #fff;
    font-size: 1.3em;
    padding: 1em;
`;
const DiscriptionField = styled.textarea`
    font: inherit;
    background: #fff;
    font-size: 1.3em;
    padding: 1em;
`;
