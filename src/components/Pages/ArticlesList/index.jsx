import ArticleCard from './ArticleCard';
import './articlesList.scss';
import data from 'data/articles';
import Button from 'components/Button';

const ArticlesList = () => {

    const handleClickButtonPagination = (evt) => {
        console.log(`Button ${evt.target.name}`);
    }

    return (
        <div className="articlesList">
            <h1 className="articlesList-title">Liste d'articles</h1>
            <div className="articlesList-list">
                {data.map((article) => (
                    <ArticleCard
                        key={article.id}
                        id={article.id}
                        title={article.title}
                        author={article.user}
                        date={article.date}
                    />
                ))}
            </div>
            <div className="articlesList-pagination">
                <Button name={'previous'} onClick={handleClickButtonPagination}>
                    Précédent
                </Button>
                <Button name={'next'} onClick={handleClickButtonPagination}>
                    Suivant
                </Button>
            </div>
        </div>
    );
}

export default ArticlesList;