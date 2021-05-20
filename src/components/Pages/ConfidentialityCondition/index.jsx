import { useTitle } from 'hooks/useTitle';
import './confidentialityCondition.scss';

const ConfidentialityCondition = () => {
    useTitle('Conditions de confidentialités');

    return (
        <div className="confidentialityCondition">
            <h1 className="confidentialityCondition-title">Conditions de confidentialités</h1>
            <p>Dernières mise à jours : 18 Mai 2021</p>
            <h2 className="confidentialityCondition-secondaryTitle">Introduction</h2>
            <p>
                Dans le cadre de son activité, la société <strong>Aperture Project</strong>, dont le siège social est situé au
                <strong> 33 Avenue du projet - 00000 Par ici</strong>, est amenée à collecter et à traiter des informations dont
                certaines sont qualifiées de "données personnelles".
                <strong> Aperture Project</strong> attache une grande importance au respect de la vie privée,
                et n'utilise que des données de manière responsable
                et confidentielle et dans une finalité précise.
            </p>
            <h2 className="confidentialityCondition-secondaryTitle">Données personnelles</h2>
            <p>
                Sur le site web <strong>Aperture Project</strong>, il y a 2 types de données susceptibles d'être recueillies :
            </p>
            <ul>
                <li>
                <h3>Les données transmises directement</h3>
                <p>
                    Ces données sont celles que vous nous transmettez directement, via un formulaire d'inscription. Sont obligatoires dans
                    le formulaire d'inscription les champs "Nom d'utilisateur", "email".
                </p>
                </li>
                <li>
                <h3>Les données collectées automatiquement</h3>
                <p>
                    Lors de vos visites, une fois votre consentement donné, nous pouvons recueillir des informations de types
                    "web analytics" relatives à votre navigation, la durée de votre consultation, votre adresse IP, votre
                    type et version de navigateur. La technologie utilisée est les cookies.
                </p>
                </li>
            </ul>
            <h2 className="confidentialityCondition-secondaryTitle">Utilisation des données</h2>
            <p>
                Les données que vous nous transmettez directement sont utilisées dans le but de vous re-contacter et/ou dans le cadre de la demande
                que vous nous faites. Les données "web analytics" sont collectées de forme anonyme (en enregistrant des adresses IP anonymes) par
                Google Analytics, et nous permettent de mesurer l'audience de notre site web, les consultations et les éventuelles erreurs afin
                d'améliorer constamment l'expérience des utilisateurs. Ces données sont utilisées par <strong>Aperture Project</strong>,
                responsable du traitement des données, et ne seront jamais cédés à un tiers ni utilisées à d'autres fins que celles détaillées ci-dessus.
            </p>
            <h2 className="confidentialityCondition-secondaryTitle">Base légale</h2>
            <p>
                Les données personnelles ne sont collectées qu'après consentement obligatoire de l'utilisateur. Ce
                consentement est valablement recueilli (boutons et case à cocher), libre, claire et sans équivoque.
            </p>
            <h2>Durée de conservation</h2>
            <p>
                Les données seront sauvegardées durant une durée maximale de 3 ans.
            </p>
            <h2 className="confidentialityCondition-secondaryTitle">Cookies</h2>
            <p>Voici la liste des cookies utilisées et leur objectif :</p>
            <ul>
                <li>
                Cookies Google Analytics : Wen analytics.
                </li>
            </ul>
            <h2 className="confidentialityCondition-secondaryTitle">Vos droits concernant les données personnelles</h2>
            <p>
                Vous avez le droit de consultation, de modification ou de demande d'effacement sur l'ensemble de vos données personnelles.
                Vous pouvez également retirer votre consentement au traitement de vos données.
            </p>
            <h2 className="confidentialityCondition-secondaryTitle">Contact délégué à la protection des données</h2>
            <p>
                <strong>Gabard Julien</strong> - juliengabard@hotmail.fr
            </p>
        </div>
    );
}

export default ConfidentialityCondition;