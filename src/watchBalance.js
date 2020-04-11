const watchBalance = (pips) => {
    setInterval(() => {
        const checkPips = document.getElementById('flat_pips_balance').innerText;

        if (pips !== checkPips) {
            const date = new Date();
            const options = {
                hour12: true,
                hour: '2-digit',
                minute: '2-digit',
            };

            GM_notification(`${date.toLocaleTimeString([], options)} Balance: ${checkPips}`);

            window.location.href = 'https://fruitlab.com/ggm';
        }
    }, 1000);
};

export default watchBalance;
