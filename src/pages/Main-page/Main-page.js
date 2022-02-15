import './Main-page.style.scss'
import Header from "../../components/Header/Header";
import Icon from '../../components/Icon/Icon';
import getCategory from '../../api/category';
import Clothes from '../../components/Clothes/Clothes';

function MainPage() {

  const category = getCategory()

  return (
    <>
      <Header />
      <main>
        <section className="section section__first container">
          <div className="slider">
            <div className='slider__images'>
              <img className='slider__img' src='https://s3-alpha-sig.figma.com/img/c072/8fdd/70f97a2d0791cf0fa41a7c7ea1bf1cc8?Expires=1645401600&Signature=CccxtvnxTze-a-cmZpxsUNjNisRBJT5XOfPQMlswuWlibZ1XXGP4jxkaJ58ByiKnDsDmIrg7D3TFQgI~6t4L9zFPOcigZgfsxf8spdybnfC12-bm2~4mKTSXTqqbxYaOkAs4Gm4b71Cmg-8VJE7qM7f8-PoHxUeFz5fF~iRykWJSAkL~Ka3TIz33bJPsG6Qds37Kb2fVMUcaUZ4UEtRQhO8tgeG3-HUj5quuEDksO6Y-9V7pQm1o8d2cvM0N8iUZ2BC~Ube3pGkZ86qgcPG0L-H8zUvFjs38DRPHhRntVDMdLz7lJjETPUOTOO2qvG-zT4FogAJkB-HUS3dHidiTUA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' alt='slider image' />
            </div>
            <div className='title-img'>
              <div className='title-img__wrapper'>
                <p className='title-img__text title-img__text--small'>Banner</p>
                <h3 className='title-img__text'>your Title text </h3>
              </div>
            </div>
            <div className='slider__control'>
              <button className='slider__btn'><div className='slider__btn--left'></div></button>
              <button className='slider__btn'><div className='slider__btn--right'></div></button>
            </div>
          </div>
          <div className="top-category">
            <div className='top-category__wrapper'>
              <div>
                <a className='link' href='/'>
                  <img src='https://s3-alpha-sig.figma.com/img/c206/8e6f/af794bf198ec79ac13e6e6ec98cc69cc?Expires=1646006400&Signature=M3CtNiTsLvM3-e6~biK5SIBpCEpXIkkxf9ujGfhT6w74fU4FvEj4UtfpE2lsREmQhwQch6KfrtnvoQvrBbJKiTKGZppVV01TYjpWvKlWKHdTn1U8tZeTTkx493x4cnDG8al0~OorbdNaYA0IVax~B-6t~VQbJ18TQaSNFgOY1PqzH-NUdyUm96bwxPDAXaUXzcsKCMzSiSIl7aa2TEneANoUZ8aWSk9p8XL317WafEM8iXItn2jJ4yfnaz-EK8~i9cJeIDK3LUDuVFXEER73vIax1X8hq9V8m8WXRzR1KcN4xn-9Znd6aK5w-CDU86RIj6fpCWJ2w5mBlLXPlKkHZA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' alt='women category' />
                  <div className='title-img title-img--small'>
                    <div className='title-img__wrapper'>
                      <h3 className='title-img__text'>Women</h3>
                    </div>
                  </div>
                </a>
                <a className='link' href='/'>
                  <img src='https://s3-alpha-sig.figma.com/img/ecd0/777f/254b32040a5bfb5ef6ae919c6637d6cc?Expires=1646006400&Signature=AJ7NSRA-M8DVbJaND5h-iDmXeEm5-WdADHUgx0r8FWfex-IDCz2TfiyRuxr2ZA~87OnZkh4oK8L9UTOwrm4S34WbTKxyvLIclzn9JWkK2jaBdtdMeV815o31RT~Ib6CB3bpMzvm4hFlH6stxKbct~wKD-kHzhBF9BVct58Po0ALIrDzDJ6ecxaoFfLj64VKT~FCua8go-rPSQZOXQD0WOY1zuq71MR1g71OsO4wJVTdaA6ehEsvYNjzA-sSlzKYlYbxAU~jTlbVCbxLr3FJqD106ZRDsyOxyex8MBaO6qQBuhYTBnWWB681ILKtc0CnpXqJ07UCtxH5nTbwVY4YAew__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' alt='men category' />
                  <div className='title-img title-img--small'>
                    <div className='title-img__wrapper'>
                      <h3 className='title-img__text'>Men</h3>
                    </div>
                  </div>
                </a>
              </div>
              <a className='link' href='/'>
                <img src='https://s3-alpha-sig.figma.com/img/44c7/2af7/0d23a7a1ce03dd8cd9cdc5dadb5f7d18?Expires=1646006400&Signature=P440FPwoDujvIZpOhhpKodbvbTi9o-0GnUvJADVmchMP7TR2lTADV8FN2jMx-ZD9PDnuOIkAQtXIaVNnaioVVbUU86fKvYcgUxuGylCi5mvwI~efqkrdH7dl14Lsd6BZUm55KI8J8gNw-~n0iis1ELiarwatB2vQNZ-~F2EZrC0VFROYxJKM4U26EFfHHCw6ikLtWvsUQxqSYDnOe8uNKGKSBoA3-6PzIPlapnZB-e-7wLISJd46PxNAnaa01~Bfn0BtoIoa~e2WNA3Bi~-ltFObmV8IcJDBuQRiHEXLOZYtL2vkA5-3DTvZLwwGudp3NX8DsJDKtWQxeA760ti~tA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' alt='Accessories category' />
                <div className='title-img title-img--small'>
                  <div className='title-img__wrapper'>
                    <h3 className='title-img__text'>Accessories</h3>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
        <section className='section section__advantage'>
          <div className='container advantage'>
            <div className='advantage__item'>
              <Icon icon='truck' size='large' />
              <div>
                <h3 className='advantage__title'>FRee SHIppING</h3>
                <p className='advantage__text'>On all UA order or order above $100</p>
              </div>
            </div>
            <div className='advantage__item'>
              <Icon icon='refresh' size='large' />
              <div>
                <h3 className='advantage__title'>30 DAYS RETURN</h3>
                <p className='advantage__text'>Simply return it within 30 days for an exchange</p>
              </div>
            </div>
            <div className='advantage__item'>
              <Icon icon='support' size='large' />
              <div>
                <h3 className='advantage__title'>SUPPORT 24/7</h3>
                <p className='advantage__text'>Contact us 24 hours a day, 7 days a week</p>
              </div>
            </div>
          </div>
        </section>
        {category.map((i, v) => <Clothes category={i} key={v} />)}
      </main>
    </>
  );
}

export default MainPage;