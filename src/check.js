const check = () => {
    const vid = document.getElementsByClassName('videothumbnail');
    const randomIndex = Math.floor(Math.random() * vid.length - 1);

    window.location.href = `${window.location.origin}${vid[randomIndex].pathname}${vid[randomIndex].search}`;
};

export default check;
