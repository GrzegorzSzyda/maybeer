// @flow

export const createArrayOfStarsByRating = (
    rating: number,
    maxStars: number = 5
): boolean[] => {
    const arrayOfStars = [];
    let ratingInStars = maxStars * rating;

    for (let n = 0; n < maxStars; n += 1) {
        arrayOfStars.push(ratingInStars >= 1 ? true : false);
        ratingInStars -= 1;
    }

    return arrayOfStars;
};
