
const form = document.querySelector("form");
const textArea = document.getElementById("reqDesc");
const charCount = document.getElementById("charCount");
const counterText = document.querySelector(".counter");
const maxLength = 200;

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const data = new FormData(form);

    const newEntry = {
        reqType: data.get("reqType"),
        reqName: data.get("req-name"),
        reqDesc: data.get("req-desc")
    }

    try {
        const postRequest = await fetch('./api/data/userRefRequest', {
            method: "POST",
            body: JSON.stringify(newEntry),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });
    } catch (error) {
        console.error(error.message);
    }
    alert("Request submitted, thank you for helping to build this resource!");
    form.reset();
    charCount.textContent = 0;
});

textArea.addEventListener("input", () => {
    const length = textArea.value.length;
    charCount.textContent = length;
});
