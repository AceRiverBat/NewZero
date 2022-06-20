import { Outlet, Link } from "react-router-dom";
export default function footer() {
    return (
        <div>
        <nav class="navbar bg-light">
            <div class="container-fluid">
                <a class="nav-link active footer">©2022 NewZero Lyon. Tous droits réservés</a>
                <Link class="nav-link active" aria-current="page" to="/"><h1>NEWZERO Lyon</h1></Link>
                <a class="nav-link active footer" href="https://agreementservice.svs.nike.com/fr/fr_fr/rest/agreement?agreementType=privacyPolicy&uxId=com.nike.unite&country=FR&language=fr&requestType=redirect"> Politique en matière de confidentialité et de cookies</a>
            </div>
        </nav>
        <Outlet />
        </div>
    )
}