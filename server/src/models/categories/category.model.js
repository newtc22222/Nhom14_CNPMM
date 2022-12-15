const Category = require('./category.mongo');

async function getAllCategories(skip, limit) {
    const result = await Category.find({});
    return result;
}

async function findCategoryWithId(categoryId) {
    const result = await Category.findById(categoryId)
        .catch((err) => {
            // console.log(err);
            return null;
        });
    return result;
}

async function createNewCategory(category) {
    const result = await Category.create(category)
        .catch((err) => {
            // console.log(err);
            return null;
        });
    return result;
}

async function updateCategory(category, categoryId) {
    const result = await Category.updateOne({ _id: categoryId }, category)
        .catch((err) => {
            // console.log(err);
            return null;
        });
    return result;
}

async function removeCategory(categoryId) {
    const result = await Category.deleteOne({ _id: categoryId})
        .catch((err) => {
            // console.log(err);
            return null;
        });
    return result;
}


module.exports = {
    getAllCategories,
    findCategoryWithId,
    createNewCategory,
    updateCategory,
    removeCategory
};