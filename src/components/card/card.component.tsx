import './card.styles.css'

interface PokemonInterface {
  pokemon: any
}

const CardComponent: React.FC<PokemonInterface> = ({pokemon}) => {
  return (
    <div className='card-container'>
      <img width='100' src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`} alt=""/>
      {pokemon.name}
    </div>
  )
}

export default CardComponent;