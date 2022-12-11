import Member from './components/Member';

import Member1 from  '../assets/lucas.png';
import Member2 from  '../assets/aurelio.png';
import Member3 from  '../assets/alan.png';

export default function Members() {
  return (
    <div className='center'>
      <div className="custom-shape-divider-top-1670772060">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M1200 0L0 0 598.97 114.72 1200 0z" className="shape-fill"></path>
          </svg>
      </div>
      <div className='Membros_title'>
        <h1>Membros</h1>
      </div>
      <div className='Membros_box'>
        <Member imagem={Member1} descricao="Membro da equipe do site" nome = "Lucas" ocupacao = "Membro da equipe do site" />
        <Member imagem={Member2} descricao="Membro da equipe do site" nome = "Aurelio" ocupacao = "Membro da equipe do site" />
        <Member imagem={Member3} descricao="Membro da equipe do site" nome = "Alan" ocupacao = "Membro da equipe do site" />
        <Member imagem={Member2} descricao="Membro da equipe do site" nome = "Aurelio" ocupacao = "Membro da equipe do site" />
        <Member imagem={Member1} descricao="Membro da equipe do site" nome = "Lucas" ocupacao = "Membro da equipe do site" />
        <Member imagem={Member2} descricao="Membro da equipe do site" nome = "Aurelio" ocupacao = "Membro da equipe do site" />
        <Member imagem={Member3} descricao="Membro da equipe do site" nome = "Alan" ocupacao = "Membro da equipe do site" />
        <Member imagem={Member2} descricao="Membro da equipe do site" nome = "Aurelio" ocupacao = "Membro da equipe do site" />
      </div>
    </div>
  );
}
