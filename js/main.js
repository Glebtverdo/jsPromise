import * as ArticlesModel from './articles';


ArticlesModel.all().then((res) => {
    console.log(res.length);
    let ind = Math.floor(Math.random() * res.length);
    console.log('select index ' + ind + ', id = ' + res[ind].id)
    return ArticlesModel.one(res[ind].id)
}).then((article) => {
    console.log(article);
    return ArticlesModel.remove(article.id)
}).then((result) => {
    console.log("что с удалением " + result);
    return ArticlesModel.all()
}).then((articles) => {
    console.log('articles count = ' + articles.length);
}).catch(err => {
    console.log(err);
})