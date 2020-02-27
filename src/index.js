import watchBalance from './watchBalance';
import check from './check';

const url = 'https://fruitlab.com/ggm';

async function setup() {
    const pips = document.getElementById('flat_pips_balance').innerText;
    const { pathname } = window.location;

    if (!document.getElementById('flat_pips_balance')) {
        window.location.href = url;
        return null;
    }

    if (pathname === '/') {
        window.location.href = url;
    }

    if (pathname === '/ggm') {
        setInterval(() => {
            check();
        }, 5000);
    } else if (window.location.href.includes('video')) {
        watchBalance(pips);
    } else {
        window.location.href = url;
    }

    return null;
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
