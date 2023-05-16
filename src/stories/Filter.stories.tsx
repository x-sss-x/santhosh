import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Story } from "@storybook/react";
import FilterButton from "../components/Filter";

// Create a query client
const queryClient = new QueryClient();

export default {
  title: "Components/FilterButton",
  component: FilterButton,
} as const;

const Template: Story = () => (
  <QueryClientProvider client={queryClient}>
    <FilterButton />
  </QueryClientProvider>
);

export const Default = Template.bind({});
