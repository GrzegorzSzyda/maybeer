// @flow
import React from 'react';
import styled from 'styled-components';
import { Icon } from '../Icon';
import { createArrayOfStarsByRating } from './lib/createArrayOfStarsByRating';

type RatingsProps = {
    rating: number,
    maxStars?: number,
    onChange?: (name: string, value: string | number) => void
};

export const StarRatings = ({ rating, maxStars = 5, onChange }: RatingsProps) => (
    <StarsWrapper>
        {createArrayOfStarsByRating(rating, maxStars).map((star: boolean, i: number) => (
            <Star
                key={i}
                active={star}
                editable={!!onChange}
                onClick={() => {
                    if (onChange) {
                        onChange('rating', (i + 1) / maxStars);
                    }
                }}
            >
                <Icon name="star" />
            </Star>
        ))}
    </StarsWrapper>
);

const StarsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 1em;
`;

const Star = styled.div`
    color: ${props => (props.active ? '#F2C94C' : '#BDBDBD')};
    font-size: 24px;
    text-align: center;
    cursor: pointer;
`;
