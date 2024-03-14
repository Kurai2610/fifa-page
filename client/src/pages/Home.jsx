export function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(https://wallpapers.com/images/hd/fifa-background-l3ughsby0up571hf.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      ></div>

      <h1
        style={{
          color: "white",
          fontSize: "3rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        PAGINA FIFA
      </h1>
      <p
        style={{
          color: "white",
          fontSize: "1.5rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        Aqui podrás ver los jugadores y equipos
      </p>
    </div>
  );
}
