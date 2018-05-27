// @flow
import React from 'react';
import styled from 'styled-components';
import { StarRatings } from '../StarRatings';

type AddBeerFormProps = {
    fields: {
        photo: any,
        name: string,
        rate: number | null,
        description: string
    },
    onChangeField(name: string, value: string): void
};

export const AddBeerForm = ({ fields, onChangeField }: AddBeerFormProps) => (
    <Container>
        <PhotoField>Tu bedą zdjęcia</PhotoField>
        <NameField
            type="text"
            value={fields.name}
            placeholder="Nazwa piwa"
            onChange={event => onChangeField('name', event.target.value)}
        />
        <RateField>
            Ocena
            <StarRatings rating={fields.rate} onChange={onChangeField} />
        </RateField>
        <DiscriptionField
            value={fields.description}
            placeholder="Opis"
            onChange={event => onChangeField('description', event.target.value)}
        />
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
