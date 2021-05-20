import { useTitle } from 'hooks/useTitle';
import './legalNotice.scss';

const LegalNotice = () => {
    useTitle('Mentions légales');

    return (
        <div className="legalNotice">
            <h1 className="legalNotice-title">Mentions légales</h1>
            <h2 className="legalNotice-secondaryTitle">Identité</h2>
            <p>Nom du site web : <strong>Aperture Project</strong></p>
            <p>Adresse : <strong>https://wwww.aperture-project.fr</strong></p>
            <p>Propriétaire : <strong>Gabard Julien</strong></p>
            <p>Responsable de la publication : <strong>Gabard Julien</strong></p>
            <p>Conception et réalisation : <strong>Gabard Julien</strong></p>
            <p>Animation : <strong>Gabard Julien</strong></p>
            <p>Hébergement : <strong>Microsoft Azure</strong></p>
            <h2 className="legalNotice-secondaryTitle">Personne morale</h2>
            <p>Raison sociale - Forme juridique au capitale de XXX XXX euros - RCS XXXXXX - 71 Avenue de la progression - 000000 Par-là</p>
            <p>01 60 00 87 09 - aperture.project@gmail.com</p>
            <h2 className="legalNotice-secondaryTitle">Conditions d'utilisation</h2>
            <p>
            L'utilisation du présent site implique l'acceptation pleine et entière des conditions générales d'utilisation décrites ci-après.
            Ces conditions d'utilisation sont susceptibles d'être modifiées ou complétées à tout moment.
            </p>
            <h2 className="legalNotice-secondaryTitle">Informations</h2>
            <p>
            Les informations et documents du site sont présentés à titre indicatif, n'ont pas de caractère exhaustif, et ne peuvent engager la
            responsabilité du propriétaire du site.
            </p>
            <p>
            Le propriétaire du site ne peut être tenu responsable des dommages directs et indirects consécutifs à l'accès au site.
            </p>
            <h2 className="legalNotice-secondaryTitle">Interactivité</h2>
            <p>
            Les utilisateurs du site peuvent y déposer du contenu, apparaissant sur le site dans des espaces dédiés (notamment via les commentaire).
            Le contenu déposé reste sous la responsabilité de leur auteurs, qui en assument pleinement l'entière responsabilité juridique.
            </p>
            <p>
            Le propriétaire du site se réserve néanmoins le droit de retirer sans préavis et sans justification tout contenu déposé par Les
            utilisateurs qui ne satisferait pas à la charte déontologique du site ou à la législation en vigueur.
            </p>
            <h2 className="legalNotice-secondaryTitle">Propriété intellectuelle</h2>
            <p>
            Sauf mention contraire, tous les éléments accessibles sur le site (texte, images, graphismes, logo, icônes, sons, logiciels, etc.)
            restent la propriété exclusive de leur auteur, en ce qui concerne les droits de propriété intellectuelle ou les droits d'usage.
            </p>
            <p>
            Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen
            ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de l'auteur.
            </p>
            <p>
            Toute exploitation non autorisée du site ou de l'un quelconque des éléments qu'il contient est considérée comme constitutive d'une
            contrefaçon et poursuivie.
            </p>
            <p>
            Les marques et logos reproduits sur le sitesont déposés par les sociétés qui en sont propriétaires.
            </p>
            <h2 className="legalNotice-secondaryTitle">Liens</h2>
            <h3>Liens sortants</h3>
            <p>
            Le propriétaire du site décline toute responsabilité et n'est pas engagé par le référencement via des liens hypertextes, de ressources tierces
            présentes sur le réseau internet, tant en ce qui concerne leur contenu que leur pertinance.
            </p>
            <h3>Liens entrants</h3>
            <p>
            Le propriétaire du site autorise les liens hypertextes vers l'une des pages de ce site, à condition que ceux-ci ouvrent une nouvelle fenêtre
            et soient présentés de manière non equivoque afin d'éviter :
            </p>
            <ul>
                <li>
                    tout risque de confusion entre le site citant et le propriétaire du site
                </li>
                <li>
                    ainsi que toute présentation tendancieuse, ou contraire au lois en vigueur.
                </li>
            </ul>
            <p>
            Le propriétairedu site se réserve le droit de demander la suppression d'un lien s'il estime que le site source
            ne respecte pas les règles ainsi définies.
            </p>
            <h2 className="legalNotice-secondaryTitle">Confidentialité</h2>
            <p>
            Tout utilisateur dispose d'un droit d'accès, de rectification et d'opposition aux données personnelles le concernant,
            en effectuant sa demande écrite et signée, accompagnée d'une preuve d'identité.
            </p>
            <h2 className="legalNotice-secondaryTitle">Crédits</h2>
            <p><strong>Gabard Julien</strong></p>
        </div>
    );
}

export default LegalNotice;