import Button from 'components/Button';
import PropTypes from 'prop-types';
import './articleCard.scss';

const ArticleCard = ({
    id,
    title,
    author,
    date,
}) => {
    const dateFormat = new Date(date).toLocaleDateString(
        'fr-FR',
        {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        }
    )

    const handleClickButtonSee = () => {
        console.log('Button See');
    }

    return (
        <div className="articleCard">
            <div className="articleCard-image">
                <img src={`http://placeimg.com/320/200/tech/${id}`} alt="exemple.png" className="image" />
            </div>
            <div className="articleCard-content">
                <h3 className="articleCard-content-title">{title}</h3>
                <p className="articleCard-content-details">
                    Edité le
                    <span className="articleCard-content-details-infos"> {dateFormat} </span>
                    par
                    <span className="articleCard-content-details-infos"> {author}</span>
                </p>
            </div>
            <div className="articleCard-content-button">
                <Button name={'See'} onClick={handleClickButtonSee} choiseStyle={'option'}>
                    Voire
                </Button>
            </div>
        </div>
    );
}

ArticleCard.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
}

export default ArticleCard;