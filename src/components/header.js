import { Outlet, Link } from "react-router-dom";
export default function header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse line" id="navbarNavAltMarkup">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link active" to="/map"><p>Tous les composts</p></Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/blog"><p>Les Associations</p></Link>
              </li>
            </ul>

          </div>
          <ul class="navbar-nav brand">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/"><h1>NEWZERO Lyon</h1></Link>
            </li>
          </ul>
          <ul class="navbar-nav shop">
            <li class="nav-item">
              <a class="nav-link active shop" href="http://127.0.0.1:8002"><button type="button" class="btn btn-outline-dark">Shop</button></a>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  )
}