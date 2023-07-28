//@ts-ignore

// importando o botao do mfe @canais/styleguide, o botao e sua funcao retornam normalmente, mas o estilo nao
import { Button } from "@canais/styleguide";

export default function Root(props) {
  return (
    <div className="flex justify-center">
      <div className="flex-initial">
        <h1 className="text-cyan-700 text-3xl font-bold underline">
          {props.name} is mounted!
          <Button variant='secondary' onClick={()=> console.log('click')}>botao vindo do styleguide</Button>
        </h1>
      </div>
    </div>
  ) 
}
