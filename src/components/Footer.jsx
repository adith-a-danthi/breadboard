export default function Footer() {
  return (
    <>
      <hr />

      <footer className="flex justify-center align-center">
        <div>
          <div className="flex gap-2">
            <a href="http://github.com/adith-a-danthi" target="_blank" rel="noopener noreferrer">
              <span className="fa-brands fa-github fa-xl"></span>
            </a>
            <a
              href="https://linkedin.com/in/adith-a-danthi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="fa-brands fa-linkedin fa-xl"></span>
            </a>
            <a href="http://adith.dev" target="_blank" rel="noopener noreferrer">
              <span className="fas fa-globe fa-xl"></span>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
