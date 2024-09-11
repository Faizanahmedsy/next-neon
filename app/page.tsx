import { getData } from "@/actions/todoActions";
import Todos from "@/components/todos";

export default async function Home() {
  const data = await getData();
  return (
    <main className="flex justify-center items-center">
      <Todos todos={data} />
    </main>
  );
}
