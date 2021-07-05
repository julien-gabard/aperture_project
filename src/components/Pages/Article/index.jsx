import data from 'data/articles';
import { Redirect, useParams } from 'react-router-dom';
import './article.scss';

const Article = () => {

    const { id } = useParams();

    const articleFilter = data.filter(article => article.id === Number(id));

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

export default Article;
