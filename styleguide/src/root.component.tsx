import { Button } from "./components/ui/button";


export default function Root(props) {
  return (
    <section className="text-lime-600 text-3xl font-bold underline flex justify-center">
      {props.name} is mounted!
      <Button variant="default">Botao</Button>
    </section>
  ) 
}
