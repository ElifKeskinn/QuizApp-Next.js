import Link from 'next/link';
import Image from 'next/image';

const Header = ({ goToQuizPage }) => {
  return (
    <div className='StartPage'>
      <div className='leftSide'>
        <h1 className='welcome'>Frontend Sınavına</h1>
        <h1 className='front'>Hoşgeldiniz!</h1>
        <h4 className='subtitle'>Başlamak için bir konu seç.</h4>
      </div>
      <div className='rightSide'>
        <div className='topicBtns'>
          <Link href="/quiz/html" className='html' style={{ display: 'flex', alignItems: 'center' }}>
            <Image src="/img/html.png" alt="HTML" width={24} height={24} style={{ marginRight: '10px', width: '1.5em', height: '1.5em' }} />
            HTML
          </Link>
          <Link href="/quiz/javascript" className='javascript' style={{ display: 'flex', alignItems: 'center' }}>
            <Image src="/img/js.png" alt="JavaScript" width={24} height={24} style={{ marginRight: '10px', width: '1.5em', height: '1.5em' }} />
            Javascript
          </Link>
          <Link href="/quiz/css" className='css' style={{ display: 'flex', alignItems: 'center' }}>
            <Image src="/img/css.png" alt="CSS" width={24} height={24} style={{ marginRight: '10px', width: '1.5em', height: '1.5em' }} />
            CSS
          </Link>
          <Link href="/quiz/Accessibility" className='accessibility' style={{ display: 'flex', alignItems: 'center' }}>
            <Image src="/img/acces.png" alt="Accessibility" width={24} height={24} style={{ marginRight: '10px', width: '1.5em', height: '1.5em' }} />
            Accessibility
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
