import { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import FieldInput from "./FieldInput";

const meta: Meta<typeof FieldInput> = {
  title: "Forms/FieldInput",
  component: FieldInput,
  args: {
    label: "Label",
    id: "my-input",
  },
  argTypes: {
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof FieldInput>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const input = canvas.getByLabelText("Label", {
      selector: "input",
    });

    await userEvent.type(input, "example-email@email.com", {
      delay: 100,
    });
  },
};
export const LabelSimple: Story = {
  args: {},
};

export const Disabled: Story = {
  args: { disabled: true },
};
