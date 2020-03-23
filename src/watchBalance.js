const watchBalance = (pips) => {
    setInterval(() => {
        const checkPips = document.getElementById('flat_pips_balance').innerText;

        GM_notification(`Balance check: ${checkPips}`);

        if (pips !== checkPips) {
            window.location.href = 'https://fruitlab.com/ggm';
        }
    }, 1000);
};

export default watchBalance;
