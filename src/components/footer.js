import { Outlet, Link } from "react-router-dom";
export default function footer() {
    return (
        <div>
            <footer class="bg-light text-center position">
                <div class="container">
                    <section>
                        <Link class="nav-link active" aria-current="page" to="/"><h1>NEWZERO Lyon</h1></Link>
                    </section>
                </div>
                <div>
                    <a class="nav-link active footer">©2022 NewZero Lyon. Tous droits réservés</a>
                    <a class="nav-link active footer" href="https://agreementservice.svs.nike.com/fr/fr_fr/rest/agreement?agreementType=privacyPolicy&uxId=com.nike.unite&country=FR&language=fr&requestType=redirect"> Politique en matière de confidentialité et de cookies</a>

                </div>
            </footer>
            <Outlet />
        </div>
    )
}