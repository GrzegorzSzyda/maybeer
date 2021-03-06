// @flow
import React from 'react';
import styled from 'styled-components';
import { StarRatings } from '../StarRatings';
import { AddPhotoField } from '../AddPhotoField';

type AddBeerFormProps = {
    fields: {
        photo: any,
        name: string,
        rating: number,
        description: string
    },
    onChangeField(name: string, value: string | number | any): void,
    onChangePhoto(event: any): void
};

export const AddBeerForm = ({
    fields,
    onChangeField,
    onChangePhoto
}: AddBeerFormProps) => (
    <Container>
        <AddPhotoField photo={fields.photo} onChangePhoto={onChangePhoto} />
        <NameField
            type="text"
            value={fields.name}
            placeholder="Nazwa piwa"
            onChange={event => onChangeField('name', event.target.value)}
        />
        <RatingField>
            <StarRatings rating={fields.rating} onChange={onChangeField} />
        </RatingField>
        <DiscriptionField
            value={fields.description}
            placeholder="Opis"
            onChange={event => onChangeField('description', event.target.value)}
        />
    </Container>
);

const Container = styled.div`
    display: grid;
    height: calc(100vh - 130px);
    grid-template-rows: 210px auto auto 1fr;
    grid-gap: 1em;
    padding: 1em;
`;

const NameField = styled.input`
    font: inherit;
    background: #fff;
    font-size: 1.3em;
    padding: 1em;
`;

const RatingField = styled.div`
    background: #fff;
    font-size: 1.3em;
    padding: 1em;
    text-align: center;
`;

const DiscriptionField = styled.textarea`
    font: inherit;
    background: #fff;
    font-size: 1.3em;
    padding: 1em;
`;
