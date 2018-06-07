// @flow
import React from 'react';
import styled from 'styled-components';
import { Icon } from '../Icon';

type AddPhotoFieldProps = {
    photo: string,
    onChangePhoto(file: Blob[]): void
};

export const AddPhotoField = ({ photo, onChangePhoto }: AddPhotoFieldProps) => (
    <Container>
        <GalleryWrapper>
            <GalleryPhoto src={photo} alt="" style={{ height: '210px' }} />
        </GalleryWrapper>
        <AddPhotoWrapper>
            <IconWrapper>
                <Icon name="plus" />
            </IconWrapper>
            <AddPhotoInput
                type="file"
                accept="image/*"
                name="Photo"
                onChange={event => onChangePhoto(event.target.files)}
            />
        </AddPhotoWrapper>
    </Container>
);

const Container = styled.div`
    background: rgba(255, 255, 255, 0.1);
    font-size: 1.3em;
    display: grid;
    grid-template-columns: auto 120px;
    align-items: center;
`;

const GalleryWrapper = styled.div`
    display: block;
`;

const GalleryPhoto = styled.img`
    object-fit: contain;
`;

const AddPhotoWrapper = styled.label`
    height: 90px;
    width: 90px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 100%;
    position: relative;
    overflow: hidden;
`;

const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 36px;
    width: 100%;
    height: 100%;
`;

const AddPhotoInput = styled.input`
    opacity: 0;
    background: #f00;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;
