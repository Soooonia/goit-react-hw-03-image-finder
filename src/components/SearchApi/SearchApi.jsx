
function SearchApi(value, pageNumber = 1) {
    const KEY = "36976828-185b29cf4941df1518df1f340";
    return fetch(`https://pixabay.com/api/?q=cat&page=${pageNumber}&key=${KEY}&q=${value}&image_type=photo&orientation=horizontal&per_page=12`);
}


export default SearchApi;