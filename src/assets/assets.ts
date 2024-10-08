import logo_ko from "./images/footer/ktwiz_ko.svg"
import facebook from "./images/footer/facebook.png"
import instagram from "./images/footer/instagram.png"
import naver from "./images/footer/naver.png"
import youtube from "./images/footer/youtube.png"
import subBackground from "./images/common/subBackground.png"
import subBg from "./images/common/subBg.png"
import landingBackground01 from "./images/landing/landingBackground.png"
import landingBackground02 from "./images/landing/bg01.png"
import item01 from "./images/landing/bg02.png"
import item02 from "./images/landing/bg03.png"
import rightArrow from "./images/landing/rightArrow.png"
import leftArrow from "./images/landing/leftArrow.png"
import doosan from "./images/landing/doosan.png"
import ktwiz from "./images/common/newLogo.png"
import nc from "./images/landing/nc.png"
import shopItem from "./images/landing/shopItem.png"
import ktwizEnLogo from "./images/common/ktwiz.png"
import ktWizParkStadium from "./images/common/ktWizParkStadium.jpg"
import ktParkKorean from "./images/common/ktParkKorean.png"
import ParkGuide from "./images/common/ParkGuide.png"
import ktwizMap from "./images/ktwiz/map.png"
import light from "./images/landing/light.png"
import parkView from "./images/landing/parkView.webp"
import baseball from "./images/common/baseball.png"
import select from "./images/common/select.png"
import redBaseball from "./images/common/redBaseball.png"
import gold from "./images/player/gold.png"
import silver from "./images/player/silver.png"
import bronze from "./images/player/bronze.png"
import notfound from "./images/common/notfound.png"
import vs from "./images/common/versus.png"

const addressIcon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAUCAYAAACEYr13AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAc1JREFUeNp8009IVFEUx/GnmOJMCNofEyTduDTBpE1JwVAEs1BBUDONaCPiwoWoFFG6EdRVKzdWYjgojji5KAQXQguVcCMoRImEgoKBC0FB/PM98HtxGd7zwGfm3Td3zr3vnXMz9iNRz4kM3Ee9vm/p3h6WkMQiTv//wUlwE314gVwvOE7wBW+x4yYoxiieaOIGEviDc5SiEXf0+w8ttJnJRzYGnD8PohopZCEH3/BQO7SEDzCMiO0gzsVXWLIP6FGSNlxR0jN8QifeoFf3GyxBQtv7hUd4jY6Qd/AZXVhABeZs1Ur9mNJ2X3nh0YwCVcOi3BLkafAXt5UkLOyRyrClcY4lONYgH//cGgfEqXriul9WS/Bbgxh21Sh+nKclWFFpYxpvZzrPY2WqQyt+Op3pxxqe4yniujdrVbjGxXdU4QAvtQubfE/ltYTjuKvvG1jHY78TrXGm1Pv2TiYxYVvUSkVWczThqt7VM8y7Z6EFH9V9ft8f6jqqjvXfSztG0g+TxXu88y6PIXQHnUZPq4ypM4Mipcc4CktgUYhpHRg3VlHjvJfQBJ763FYr0dj6oxbL6RPDEniqd1KPZRWYCZp0WQJPJy+C/rAJFwIMAKPmZvp5dQo6AAAAAElFTkSuQmCC"
const busIcon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAUCAYAAACAl21KAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAYFJREFUeNqklE8oBVEUxmfuG9TzJzakvEe9lcRGWFgQdsrSTtbKyt7Gwtb22SmlxIpYeAs2tiQbLCjKn6gXHok3w3fqmzqmMeO999Wve8+Zueeee2busZ+StRaVBhNgFPSDFpCwfusd3IEjsEeu5YHNQGNgF1RxQQF8gC/g0eeAalADkvS5YBZk/UD7YJgPl8CcFa1JsK7sOoeTTo5vYASsSbZ/BPkGbcxaMjMg47AWwitoB42gmQvCJBu8gFuwAwYFh4Yor7iy/qcCx0VJqzewWynyP06DqSCIljGq+pUEOpdAWRpeRIHjapSTYrfSaAILJQbr1v+Rfw3qwXyZR0uYMo4TXm1QVLb82cvgJGLNM985Uz5PjvapHDNglV+wyI2CmgLbvAF5P5Bha/DVxXEgIqMejn3K58rtH8LkQDlvQCqmJG6gV23J0U7BJrNIkUNezDBJT8qADtrHYMNWHXIFTDOjdExG0h0eOB+XpqiLKcd7ZKeMk3TPC3APLsXxI8AAEZlQ6LkqLcwAAAAASUVORK5CYII="
const subwayIcon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAWCAYAAADNX8xBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAYNJREFUeNqklM1HRFEUwN97ppqmDyolpUSbiBalfZs+6IPEDC0i0aJ/ICIS/QPRvj+gFhmGKGpTm0hiZhkpiT5FGTLT73Am13hfM+/w887MOffcc8+599gviQZLpQ9mYRT6oROaoA5s+IVveIcHyMIZpGWxrYE2YQscq3K5hUUJtIayZ0WTDwl0j9ITMZAVgzbVL+HOxWcGmuEaci72aamjZPSF0gjjcOLieANDsAz7LvYrGJHiFvSPdo+sa/Xb4mGvscq6FNQxL7tdbiwGBCqG3eXRwyev32c/e8yo0TrMlVI1pHQ1VmHYxS4vIi9de0VpjXiNPh2XHaoRp7wTcqfeQi42a1YwM7rQ8/bCgU+AH5hXv6TWuF5qJIY4jMG5Onf4dOkYpozf8mwGHD2OSMowLvlkNGg0R15DV2kebes8EjnSe5EMqM8TnMKEZv8/2NL6yquVlG2M2gWYhJWQk1Lm2C5kpE7mgkNIVDBuu3WG5cyjiezAhlH8IInrpjKrsn8CDADefUvjQKy7MgAAAABJRU5ErkJggg=="

export {
    logo_ko,
    facebook,
    instagram,
    naver,
    youtube,
    subBackground,
    subBg,
    landingBackground01,
    landingBackground02,
    rightArrow,
    leftArrow,
    doosan,
    ktwiz,
    nc,
    item01,
    item02,
    shopItem,
    ktwizEnLogo,
    ktWizParkStadium,
    ktParkKorean,
    ParkGuide,
    ktwizMap,
    addressIcon,
    busIcon,
    subwayIcon,
    light,
    parkView,
    baseball,
    redBaseball,
    select,
    gold,
    silver,
    bronze,
    notfound,
    vs,
};