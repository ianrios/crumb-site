import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Crumb" },
    { name: "description", content: "Crumb & Culture Lexington" },
  ];
};

export default function Index() {
  return (
    <div>
      <h1>Crumb & Culture Lexington</h1>
    </div>
  );
}
