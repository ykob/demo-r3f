import { json } from "@remix-run/node";

export const loader = () => {
  return json({});
};

export default function Home() {
  return (
    <div>
      <p>Hello world!</p>
    </div>
  );
}
