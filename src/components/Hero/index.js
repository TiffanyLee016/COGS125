import "./style.css";

function Hero() {
  return (
    <div className="hero">
      <div className="heroLeft">
        <div className="cover">
          <img
            src={"albumcover.png"}
            className="heroPic"
            fill
            priority
            alt="Hero Image"
          />
          {/* <div className="disk">
            <img src={vinyl} className="vinyl" fill priority alt="Vinyl Disc" />
          </div> */}
          {/* <div
            className="roundText"
            style={{
              aspectRatio: aspect,
            }}
          >
            <img src={text} fill alt="Hidden Text" />
          </div> */}
        </div>
      </div>
      <div className="heroRight">
        <div className="content">
          <h5 className="album">A Design Collective</h5>
          <h1
            className="title"
            style={{
              color: "var(--lavendar)",
            }}
          >
            Tiffany Lee
          </h1>
          <h3 className="subtitle">
            A product designer transforming data and creativity into delightful
            and intuitive experiences.
          </h3>
          {/* {buttons} */}
        </div>
      </div>
    </div>
    // <div className="pic-text">
    //   <img className="album-cover" alt="Album cover" src="album-cover.png" />
    //   <div className="text">
    //     <div className="text-wrapper">A Design Collective</div>
    //     <div className="div">Tiffany Lee</div>
    //     <p className="p">
    //       A product designer transforming data and creativity into delightful
    //       and intuitive experiences.
    //     </p>
    //   </div>
    // </div>
  );
}

export default Hero;
