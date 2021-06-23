'use strict';

import user from './user';
import article from './article';
import category from './category';
import college from './college';

export default app => {
    app.use('/user', user);
    app.use('/article', article);
    app.use('/category', category);
    app.use('/college', college);
}