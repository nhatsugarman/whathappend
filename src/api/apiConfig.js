
const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '7ccfda4de728d05dd630c84f5801df90',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;


