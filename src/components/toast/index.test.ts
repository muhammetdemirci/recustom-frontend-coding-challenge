import { render } from '@testing-library/react';

import { composeStory } from '@storybook/react';

import Meta, { Success as SuccessStory } from './index.stories';

const SuccessOK = composeStory(SuccessStory, Meta);

test('Validates toast', () => {
    render(<SuccessOK />);
});