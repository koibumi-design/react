import type {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';
import {Button} from '../components/Button/Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        variant: {
            control: {
                type: 'select',
                options: ['solid', 'light', 'outline', 'flat', 'ghost', 'glow'],
            },
        },
        color: {
            control: {
                type: 'select',
                options: ['primary'],
            },
        }
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {onClick: fn()},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Solid: Story = {
    args: {
        children: 'Button',
        variant: 'solid',
    },
};

export const Light: Story = {
    args: {
        children: 'Button',
        variant: 'light',
    },
};

export const Outline: Story = {
    args: {
        children: 'Button',
        variant: 'outline',
    },
};

export const Flat: Story = {
    args: {
        children: 'Button',
        variant: 'flat',
    },
};

export const Ghost: Story = {
    args: {
        children: 'Button',
        variant: 'ghost',
    },
};

export const Glow: Story = {
    args: {
        children: 'Button',
        variant: 'glow',
    },
};