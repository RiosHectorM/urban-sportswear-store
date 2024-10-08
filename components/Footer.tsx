import { footerLinks, Iconos } from '@constants';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => (
  <footer className="flex flex-col text-black-100  mt-5 border-t border-gray-100">
    <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
      <div className="flex flex-col justify-start items-start gap-6">
        <Image
          src="/logo.svg"
          alt="logo"
          width={118}
          height={18}
          className="object-contain"
        />
        <p className="text-base text-gray-700">
          Urban Sportswear <br />
          All Rights Reserved &copy;
        </p>
      </div>

      <div className="footer__links">
        {footerLinks.map((item) => (
          <div key={item.title} className="footer__link">
            <h3 className="font-bold">{item.title}</h3>
            <div className="flex flex-col gap-5">
              {item.links.map((link) => (
                <Link
                  key={link.title}
                  href={link.url}
                  className="text-gray-500 flex"
                >
                  {item.title === 'Redes Sociales' ? (
                    <Image
                      src={Iconos.get(link.title) || ''}
                      alt={link.title}
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                  ) : null}

                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
      <p>@2024 Urban Sportswear. All rights reserved</p>

      <div className="footer__copyrights-link">
        <Link href="/" className="text-gray-500">
          Web diseñada por HecThorDev
        </Link>
        <Link href="/" className="text-gray-500">
          Hace realidad tu idea. Contactate x Whatsapp!
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
