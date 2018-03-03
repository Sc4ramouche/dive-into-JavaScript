'use strict';
// Count created objects
// Remember date of the latest created object

function Article() {
    this.created = new Date();
     Article.latest = this.created;
    Article.count++;
}

Article.count = 0;

Article.showStats = function () {
    console.log(`Count: ${Article.count}; latest: ${Article.latest}`);
}

new Article();
new Article()

Article.showStats();