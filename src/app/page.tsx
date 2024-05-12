import NewTaskForm from "./NewTaskForm";

export default async function Home() {
  return (
    <div className="grid h-screen w-full place-content-center">
      <NewTaskForm />
    </div>
  );
}
