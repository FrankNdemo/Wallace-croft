import { createFileRoute } from "@tanstack/react-router";
import { ApproachPage } from "./resources";

export const Route = createFileRoute("/approach")({
  component: ApproachPage,
  head: () => ({
    meta: [
      { title: "Approach - Wallace Croft" },
      {
        name: "description",
        content:
          "See the Wallace Croft approach to strategy, design, software engineering, data, AI, and managed digital delivery.",
      },
      { property: "og:title", content: "Approach - Wallace Croft" },
      {
        property: "og:description",
        content:
          "See the Wallace Croft approach to strategy, design, software engineering, data, AI, and managed digital delivery.",
      },
    ],
  }),
});
