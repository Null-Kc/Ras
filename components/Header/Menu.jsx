import Link from 'next/link'

export default function Menu() {
  return (
    <div className="Menu">
      <div className="Menu_item_box">
        <h3>Inicio</h3>
      </div>
      <div className="Menu_item_box">
        <h3>Sobre</h3>
      </div>
      <div className="Menu_item_box">
        <h3>Projetos</h3>
      </div>
      <Link href="#Membros" scroll={true}>
        <div className="Menu_item_box">
          <h3>Equipe</h3>
        </div>
      </Link>
      <Link href="#Contato" scroll={true}>
        <div className="Menu_item_box" >
          <h3>Contato</h3>
        </div>
      </Link>
      
    </div>
  );
}
