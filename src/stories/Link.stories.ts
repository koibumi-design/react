import type { Meta, StoryObj } from '@storybook/react';
import { Link } from '../components/Link/Link.tsx';

const meta = {
    title: 'Components/Data Display/Link',
    component: Link,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],

    argTypes: {
        darkMode: {
            control: {
                type: 'boolean',
            },
        },
        href: {
            control: {
                type: 'text',
            },
        },
    },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'Link',
    },
};
