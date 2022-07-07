import { Outlet, Link } from "react-router-dom";
export default function header() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg">
                <div class="container">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <Link class="nav-link active arrondissement" to="/Lyon1"><button type="button" class="btn btn-dark">Lyon 1</button></Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link active arrondissement" to="/Lyon2"><button type="button" class="btn btn-dark">Lyon 2</button></Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link active arrondissement" to="/Lyon3"><button type="button" class="btn btn-dark">Lyon 3</button></Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link active arrondissement" to="/Lyon4"><button type="button" class="btn btn-dark">Lyon 4</button></Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link active arrondissement" to="/Lyon5"><button type="button" class="btn btn-dark">Lyon 5</button></Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link active arrondissement" to="/Lyon6"><button type="button" class="btn btn-dark">Lyon 6</button></Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link active arrondissement" to="/Lyon7"><button type="button" class="btn btn-dark">Lyon 7</button></Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link active arrondissement" to="/Lyon8"><button type="button" class="btn btn-dark">Lyon 8</button></Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link active arrondissement" to="/Lyon9"><button type="button" class="btn btn-dark">Lyon 9</button></Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Outlet />
        </div>
    )
}