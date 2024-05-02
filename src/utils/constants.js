export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const PHOTO_URL =
  "https://avatars.githubusercontent.com/u/25129668?s=400&v=4";
export const BACKGROUND =
  "https://assets.nflxext.com/ffe/siteui/vlv3/058eee37-6c24-403a-95bd-7d85d3260ae1/5030300f-ed0c-473a-9795-a5123d1dd81d/US-en-20240422-POP_SIGNUP_TWO_WEEKS-perspective_WEB_0941c399-f3c4-4352-8c6d-0a3281e37aa0_large.jpg";
export const GET_NOW_PLAYING_MOVIES =
  "https://api.themoviedb.org/3/movie/now_playing?page=";
// export const GET_POPULAR_MOVIES = "https://api.themoviedb.org/3/movie/" popular?page=";
export const GET_MOVIES = "https://api.themoviedb.org/3/movie/";
export const GET_MOVIE_TRAILER =
  "https://api.themoviedb.org/3/movie/{$MOVIEID}/videos";
export const IMG_CDN = "https://image.tmdb.org/t/p/w500";
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiN2JiYTE0M2Q5NDM5MTVhYTU3Y2U4N2U0MTFlOTVmYyIsInN1YiI6IjY2MzJmOTIxYWQ1OWI1MDEyNTZkMDEwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k-MVfYfbeShubtHr_ZOuuo-__ZkiViR2OOOiH5CL5B0",
  },
};

export const SUPPORTED_LANGUAGES = [
  {identfier: "en",name: "English"},
   {identfier: "hi",name: "Hindi"},
 {identfier: "sp",name: "Spanish"}
]