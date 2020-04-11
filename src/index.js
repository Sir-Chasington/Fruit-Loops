import watchBalance from './watchBalance';
import check from './check';

const url = 'https://fruitlab.com/ggm';

async function setup() {
    let { href } = window.location;
    const { pathname } = window.location;
    const pips = document.getElementById('flat_pips_balance');

    if (!pips || pathname === '/') {
        href = url;
    }

    if (pathname === '/ggm') {
        setInterval(() => {
            check();
        }, 5000);
    } else if (href.includes('video')) {
        watchBalance(pips.innerText);
    } else {
        href = url;
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
