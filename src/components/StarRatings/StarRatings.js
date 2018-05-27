// @flow
import React from 'react';
import { Icon } from '../Icon';

type RatingsProps = {
    rating: number | null,
    maxStars?: number,
    onChange(name: string, value: string): void
};

const STAR = 'star';
const STAR_EMPTY = 'starEmpty';

const createArrayOfStarsByRating = (rating, maxStars = 5) => {
    const arrayOfStars = [];
    let ratingInStars = maxStars * rating;

    for (let n = 0; n < maxStars; n += 1) {
        arrayOfStars.push(ratingInStars >= 1 ? STAR : STAR_EMPTY);
        ratingInStars -= 1;
    }

    return arrayOfStars;
};

export const StarRatings = ({ rating, maxStars = 5, onChange }: RatingsProps) => (
    <div>
        {createArrayOfStarsByRating(0.4, maxStars).map(
            (star, i) => star === STAR && <Icon key={i} name="star" />
        )}
    </div>
);
