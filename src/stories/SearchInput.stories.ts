import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { SearchInput } from '../components/SearchInput/SearchInput.tsx';

const meta = {
  title: 'Components/Interact/SearchInput',
  component: SearchInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    customSearchButton: {
      description: 'Custom the text or the icon of the search button',
      control: {
        type: 'text',
      },
    },
    placeholder: {
      control: {
        type: 'text',
      },
    },
    buttonVariant: {
      control: {
        type: 'select',
        options: ['solid', 'outline', 'flat', 'ghost'],
      },
    },
    buttonColor: {
      control: {
        type: 'select',
        options: ['primary'],
      },
    },
  },

  args: { onSearch: fn() },
} satisfies Meta<typeof SearchInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Search...',
  },
};
