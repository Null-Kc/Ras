import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export const Contato = () => {  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bbdlxbl', 'template_vw5w8or', form.current, 'ipalIRkIyvSXUCqcs')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const duvida = document.getElementById('duvida');
    nome.value = ""
    email.value = ""
    duvida.value = ""
  };

  return (
    <div className='formulario_box'>
      <div className="custom-shape-divider-top-1670773315">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 0L0 0 598.97 114.72 1200 0z" className="shape-fill"></path>
        </svg>
      </div>
      <h1>Duvidas</h1>
      <form className='formulario' ref={form} onSubmit={sendEmail}>
      <label>Nome:</label>
      <input id='nome' className='nome_email' type="text" name="user_name"/>
      <label>Email:</label>
      <input id='email' className='nome_email' type="email" name="user_email" />
      <label>Duvida:</label>
      <textarea id='duvida' className='Duvida' name="user_duvida" />
      <div className='botao'>
        <input type="submit" value="Enviar" />
      </div>
    </form>
    </div>
  );
};

export default Contato;