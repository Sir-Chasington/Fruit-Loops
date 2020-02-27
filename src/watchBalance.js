const watchBalance = (pips) => {
    setInterval(() => {
        const { log } = console;
        const checkPips = document.getElementById('flat_pips_balance').innerText;

        log('balance check');

        if (pips !== checkPips) {
            window.location.href = 'https://fruitlab.com/ggm';
        }
    }, 1000);
};

export default watchBalance;
