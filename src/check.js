const check = () => {
    const vid = document.getElementsByClassName('videothumbnail');
    const randomIndex = Math.floor(Math.random() * vid.length - 1);
    const baseUrl = window.location.origin;
    const pathToNew = vid[randomIndex].pathname;
    const endSearch = vid[randomIndex].search;
    window.location.href = `${baseUrl}${pathToNew}${endSearch}`;
    return null;
};

export default check;
