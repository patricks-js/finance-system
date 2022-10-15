import { Header } from "./components/Header";
import { Content } from "./Content";

export const App = () => {
  return (
    <div className="bg-gray-100 text-zinc-900 w-full min-h-screen">
      <Header />
      <div className="container mx-auto">
        <Content />
      </div>
    </div>
  );
};
