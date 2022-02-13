window.onload = (function() {
    let run = async () => {
        let a = document.body.querySelectorAll(".quiz")[0].querySelectorAll(".c-label--inline"),
            b = ["10,000,000", "Users in the waiting room for the sale will be given a random spot in the queue when the sale starts. Users who arrive after the sale starts for the sale will be placed behind those in the waiting room", "Credential data for Web3 applications and communities", "BTC, ETH, USDC, USDT, ALGO, SOL", "$1.50 per token, $500 limit", "The user's purchase may be canceled and the user may be banned from future CoinList sales", "CoinList.co", "The user's account will be terminated and all purchases will be canceled"];
        for (let c = 0; c < a.length; c++) - 1 !== b.indexOf(a[c].textContent) && (a[c].querySelectorAll(".c-input")[0].checked = !0);
        await (a => new Promise(b => setTimeout(b, a)))(200), document.body.querySelector(".js-submit").click()
    };
        (function Buying()
        {
        let checkEl = document.body.querySelectorAll(".quiz")[0].querySelectorAll(".c-label--inline");
        if (checkEl != null) {
            run();
            return;
            setTimeout(Buying, 10);
		}
        })();
})();