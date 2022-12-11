import Image from 'next/image'

export default function Member({ imagem, descricao = '', nome = '', ocupacao = '' }) {

  return (
    <div className='membro_card'>
      <Image
        className='icon'
        src={imagem}
        alt={descricao}
        width={200}
        height={200}
      />
      <div className='texto_membro'>
        <h1>{nome}</h1>
        <p>{ocupacao}</p>
      </div>
    </div>
  );
}
