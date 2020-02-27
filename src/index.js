import watchBalance from './watchBalance';
import check from './check';

const url = 'https://fruitlab.com/ggm';

async function setup() {
    const { pathname } = window.location;
    const pips = document.getElementById('flat_pips_balance');

    if (!pips || pathname === '/') {
        window.location.href = url;
    }

    if (pathname === '/ggm') {
        setInterval(() => {
            check();
        }, 5000);
    } else if (window.location.href.includes('video')) {
        watchBalance(pips.innerText);
    } else {
        window.location.href = url;
    }
}

window.addEventListener(
    'load',
    async () => {
        window.stop();
        await setup();
    },
    { capture: true, once: true },
);

window.addEventListener(
    'unload',
    async () => {
        // do some clean up?
    },
    false,
);
