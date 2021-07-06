import PropTypes from 'prop-types';
import { Redirect, useParams } from 'react-router-dom';
import './article.scss';

const Article = ({ articles }) => {

    const { id } = useParams();

    const articleFilter = articles.filter(article => article.id === Number(id));

    return (
        <>
            {articleFilter.length !== 0 ? (
                <div className="article">
                    <h1 className="article-title">
                        {articleFilter[0].title}
                    </h1>
                    <p className="article-content">
                        {articleFilter[0].content}
                    </p>
                </div>
            ) : <Redirect to="/error404" />}
        </>
    );
}

Article.propTypes = {
    articles: PropTypes.array.isRequired,
}

export default Article;
