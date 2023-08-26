
function SearchApi(value, pageNumber = 1) {
    const KEY = "5f2a66e63fa9a8139a0b7e8b9aba27ca";
    return fetch(`https://pixabay.com/api/?q=cat&page=${pageNumber}&key=${KEY}&q=${value}&image_type=photo&orientation=horizontal&per_page=12`);
}


export default SearchApi;