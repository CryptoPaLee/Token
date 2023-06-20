import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <maine>
        {/* <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing <code>pages/index.js</code>
        </p> */}

        <div className={styles.wrapper}>
          <h1>Tipont NFTs Mint</h1>
          <div className={styles.cols}>
            <div className={styles.col}>
              <div className={styles.cont}>
                <div className={styles.front}>
                  <img
                    className={styles.frontImg}
                    src="/Tipont_NFT_B_2.png"
                    alt="Tipont Token"
                  />
                  <div className={styles.inner}>
                    <p>Tipont Token</p>
                    <h6>   </h6>
                    <span>Items: 10k</span>
                    <h3>150 Matic</h3>
                  </div>
                </div>
                <div className={styles.back}>
                  <div className={styles.header}>
                    <div className={styles.item}>left:10000</div>
                    <div className={styles.info}>
                      <a
                        href="https://docs.tipont.com/nfts/tipont-token"
                        target="_blank"
                      >
                        <img
                          className={styles.i_button}
                          src="/info_green_48dp.svg"
                          alt="Tipont Token"
                        />
                      </a>
                    </div>
                  </div>
                  <div className={styles.inner}>
                    <div className="main">
                      <img
                        className={styles.myImages}
                        id="myImg"
                        src="/Tipont_NFT_B_2.png"
                        height={150}
                        alt="Tipont Token"
                        // width="150"
                      />

                      <div className="footer">
                        <div className={styles.button}>
                          <div className={styles.mint}>
                            <button>Mint</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.col}>
              <div className={styles.cont}>
                <div className={styles.front}>
                  <img
                    className={styles.frontImg}
                    src="/img_blue.svg"
                    alt="Tipont Token"
                  />
                  <div className={styles.inner}>
                    <p>PFPs</p>
                    <h6> free mint </h6>
                    <span>Items: 10k</span>
                    <h3>coming soon</h3>
                  </div>
                </div>
                <div className={styles.back}>
                  <div className={styles.header}>
                    <div className={styles.item}>left:10000</div>
                    <div className={styles.info}>
                      <a
                        href="https://docs.tipont.com/nfts/tipont-token"
                        target="_blank"
                      >
                        <img
                          className={styles.i_button}
                          src="/info_green_48dp.svg"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                  <div className={styles.inner}>
                    <p>NFT művész által készített egyedi kollekció.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.col}>
              <div className={styles.cont}>
                <div className={styles.front}>
                  <img
                    className={styles.i60}
                    src="/NFT_01-Eihwaz.svg"
                    alt="Tipont Token"
                  />
                  <div className={styles.inner}>
                    <p>Loyalty NFT</p>
                    <h6> pre-sale </h6>
                    <span> </span>
                    <h3>coming soon</h3>
                  </div>
                </div>
                <div className={styles.back}>
                  <div className={styles.header}>
                    <div className={styles.info}>
                      <a
                        href="https://docs.tipont.com/en-v1.0/nfts/tipont-token"
                        target="_blank"
                      >
                        <img
                          className={styles.i_button}
                          src="/info_green_48dp.svg"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                  <div className={styles.inner}>
                    <p>
                      Korlátozott számú kollekció a Token NFT tulajdonosoknak.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.col}>
              <div className={styles.cont}>
                <div className={styles.front}>
                  <img
                    className={styles.i50}
                    src="/NFT_02-Perthro.svg"
                    alt="Tipont Token"
                  />
                  <div className={styles.inner}>
                    <p>Loyalty NFT</p>
                    <h6> public sale </h6>
                    <span> </span>
                    <h3>coming soon</h3>
                  </div>
                </div>
                <div className={styles.back}>
                  <div className={styles.header}>
                    <div className={styles.item}></div>
                    <div className={styles.info}>
                      <a
                        href="https://docs.tipont.com/nfts/tipont-token"
                        target="_blank"
                      >
                        <img
                          className={styles.i_button}
                          src="/info_green_48dp.svg"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                  <div className={styles.inner}>
                    <p>
                      Korlátozott mennyiségben elérhető. Egyedi kedvezményeket
                      szerezhetnek.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.col}>
              <div className={styles.cont}>
                <div className={styles.front}>
                  <img
                    className={styles.frontImg}
                    src="/NFT_10_card.png"
                    alt="Tipont Token"
                  />
                  <div className={styles.inner}>
                    <p>Futhark</p>
                    <h6>free mint</h6>
                    <span> </span>
                    <h3>coming soon</h3>
                  </div>
                </div>
                <div className={styles.back}>
                  <div className={styles.header}>
                    <div className={styles.item}></div>
                    <div className={styles.info}>
                      <a href="https://docs.tipont.com/nfts" target="_blank">
                        <img
                          className={styles.i_button}
                          src="/info_green_48dp.svg"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                  <div className={styles.inner}>
                    <p>
                      Minden Tipont Token tulajdonos igényelhet egy Futhark
                      kártyát.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.col}>
              <div className={styles.cont}>
                <div className={styles.front}>
                  <img
                    className={styles.frontImg}
                    src="/NFT_04_card.png"
                    alt="Tipont Token"
                  />
                  <div className={styles.inner}>
                    <p>Futhark</p>
                    <h6>public sale</h6>
                    <span> </span>
                    <h3>coming soon</h3>
                  </div>
                </div>
                <div className={styles.back}>
                  <div className={styles.header}>
                    <div className={styles.item}></div>
                    <div className={styles.info}>
                      <a href="https://docs.tipont.com/nfts" target="_blank">
                        <img
                          className={styles.i_button}
                          src="/info_green_48dp.svg"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                  <div className={styles.inner}>
                    <p>
                      Gyűjts össze minél több sorozatot, értékes NFT
                      jutalmakért.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.col}>
              <div className={styles.cont}>
                <div className={styles.front}>
                  <img
                    className={styles.frontImg}
                    src="/game_blue.svg"
                    alt="Tipont Token"
                  />
                  <div className={styles.inner}>
                    <p>Server PASS</p>
                    <h6>public sale</h6>
                    <span> </span>
                    <h3>coming soon</h3>
                  </div>
                </div>
                <div className={styles.back}>
                  <div className={styles.header}>
                    <div className={styles.item}></div>
                    <div className={styles.info}>
                      <a href="https://docs.tipont.com/nfts" target="_blank">
                        <img
                          className={styles.i_button}
                          src="/info_green_48dp.svg"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                  <div className={styles.inner}>
                    <p>
                      Egy izgalmas Play & Earn játék. Szerezz hozzáférést, hogy
                      megnyerd a mesés jutalmakat.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.col}>
              <div className={styles.cont}>
                <div className={styles.front}>
                  <img
                    className={styles.frontImg}
                    src="/img_green.svg"
                    alt="Tipont Token"
                  />
                  <div className={styles.inner}>
                    <p>Utility NFT</p>
                    <h6>public sale</h6>
                    <span> </span>
                    <h3>coming soon</h3>
                  </div>
                </div>
                <div className={styles.back}>
                  <div className={styles.header}>
                    <div className={styles.item}></div>
                    <div className={styles.info}>
                      <a href="https://docs.tipont.com/nfts" target="_blank">
                        <img
                          className={styles.i_button}
                          src="/info_green_48dp.svg"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                  <div className={styles.inner}>
                    <p>
                      A játékhoz tartozó utility NFT-k. Token NFT tulajdonosok
                      1db random NFT-t kérhetnek ki.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </maine>

      <footer>
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a> */}
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        *,
        *:before,
        *:after {
          margin: 0;
          padding: 0;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          // font-family: "Roboto", sans-serif;
        }
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          background-color: #434343;
          background-image: linear-gradient(#434343, #282828);
        }

        h1 {
          font-size: 2.5rem;
          font-weight: normal;
          color: #bbbbbb;
          text-align: center;
          margin: 2rem 0;
        }

        h3 {
          margin: 1rem;
        }

        h6 {
          font-size: 1.3rem;
          font-style: italic;
          margin: 1em;
        }
      `}</style>
    </div>
  );
}
