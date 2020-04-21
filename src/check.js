const check = () => {
    const vid = document.getElementsByClassName('videothumbnail');
    const randomIndex = Math.floor(Math.random() * vid.length - 1);

    // check if a blank videos page, reload if false
    if (document.querySelectorAll('#ggm_videos ul li').length >= 1) {
        window.location.href = `${window.location.origin}${vid[randomIndex].pathname}${vid[randomIndex].search}`;
    } else {
        window.location.reload();
    }
};

export default check;
