const parseArticle = (article, key) => {
    article.sourceName = article.source.name || "";
    article.searchKeyword = key;
    delete article.urlToImage;
    delete article.source;
    return article;
}

export const getNewsParsedData = (data, key) => {
    if(!data.articles) return undefined;

    const result = data.articles.map(article => {
        return parseArticle(article, key);
    });
    return result;
}