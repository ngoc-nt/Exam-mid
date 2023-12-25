export const GetUrlImage = (path: string): string => {
    const TMDB_IMAGE_URL = "https://image.tmdb.org/t/p/original/";
    return path ? TMDB_IMAGE_URL + path : '/assets/img/Black-Knight.svg';
};