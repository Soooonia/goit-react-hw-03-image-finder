
// function SearchApi(value, pageNumber = 1) {
//     const KEY = "36976828-185b29cf4941df1518df1f340";
//     return fetch(`https://pixabay.com/api/?q=cat&page=${pageNumber}&key=${KEY}&q=${value}&image_type=photo&orientation=horizontal&per_page=12`);
// }


// export default SearchApi;
export const fetchImages = async (name, page = 1) => {
    const key = "36976828-185b29cf4941df1518df1f340";
    const response = await fetch(`https://pixabay.com/api/?q=${name}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`);
    if (response.ok) {
        return response.json();
    }
    return await Promise.reject(`No image found with the name ${name}`);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { fetchImages };