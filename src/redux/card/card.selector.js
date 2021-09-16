import { createSelector } from 'reselect';

const selectCard = state => state.card;

export const selectCardSections = createSelector(
    [selectCard],
    card => card.sections
);