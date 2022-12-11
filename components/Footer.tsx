import Image from 'next/image'

import Instagram from  '../public/assets/instagram.png';
import Discord from  '../public/assets/discord.png';
import Youtube from  '../public/assets/youtube.png';
import Twitch from  '../public/assets/twitch.png';


export default function Footer() {
  return (
    <div className="footer">
      <div className='texto'>Desenvolvido por: Equipe do site</div>
      <div className='logos'>
        <a href="https://www.instagram.com/rasufpb/">
          <Image
            className='icon'
            src={Instagram}
            alt="Instagram"
            width={40}
            height={40}
          />
        </a>
        <a href="https://discord.gg/tjf2RHBf4h">
          <Image
            className='icon'
            src={Discord}
            alt="Twitter"
            width={40}
            height={40}
          />
        </a>
        <a href="https://www.twitch.tv/rasufpb">
          <Image
            className='icon'
            src={Twitch}
            alt="Telegram"
            width={40}
            height={40}
          />
        </a>
        <a href="https://www.youtube.com/channel/UC7ivKC1W7ScdBqfKEkJO68g">
          <Image
            className='icon'
            src={Youtube}
            alt="Facebook"
            width={40}
            height={40}
          />
        </a>
      </div>
    </div>
  );
}
