import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    parameters: {
      backgrounds: {
        default: 'light',
        values: [
          { name: 'light', value: '#ffffff' },
          { name: 'dark', value: '#020309' },
        ]
      }
    },
  },
};

export default preview;
