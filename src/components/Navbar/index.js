import "./style.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navLeft">
        <a href="/">
          <img src="logo.png" />
        </a>
      </div>
      {/* <div className="dropdownBtn">
        <Button type="outlined" href="/" className={style.navLink}>
          Work
        </Button>
        <div className={style.dropdown}>
          <Button
            type="outlined"
            href="/projects/cnn"
            className={style.navLink}
          >
            CNN
          </Button>
          <Button
            type="outlined"
            href="/projects/protolab"
            className={style.navLink}
          >
            Protolab
          </Button>
        </div>
      </div>
      <Button type="outlined" href="/playground" className={style.navLink}>
        Playground
      </Button>
      <Button type="outlined" href="/about" className={style.navLink}>
        About
      </Button>
      <button
        className={style.toggle}
        onClick={() => setOpen((s) => !s)}
        data-open={open}
      >
        <div className={style.one} />
        <div className={style.two} />
        <div className={style.three} />
      </button> */}
      {/* <div className={style.mobile} data-state={open ? "active" : "inactive"}>
        <Button type="outlined" href="/">
          Work
        </Button>
        <Button type="outlined" href="/playground">
          Playground
        </Button>
        <Button type="outlined" href="/about">
          About
        </Button>
      </div> */}
    </nav>
  );
  // return (
  //   <div className="nav-bar-desktop">
  //     <img className="logo" alt="log" src="logo.png" />
  //     <div className="right">
  //       <button className="button">
  //         <div className="state-layer">
  //           <button className="text-wrapper">Work</button>
  //         </div>
  //       </button>
  //       <button className="button">
  //         <div className="state-layer">
  //           <button className="text-wrapper">Playground</button>
  //         </div>
  //       </button>
  //       <button className="button">
  //         <div className="state-layer">
  //           <button className="text-wrapper">About</button>
  //         </div>
  //       </button>
  //       <button className="button">
  //         <div className="state-layer">
  //           <button className="text-wrapper">Resume</button>
  //         </div>
  //       </button>
  //     </div>
  //   </div>
  // );
}

export default Navbar;
