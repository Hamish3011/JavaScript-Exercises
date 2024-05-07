document.addEventListener('DOMContentLoaded', function () {
    const codeBlocks = document.querySelectorAll('pre code');

    codeBlocks.forEach(code => {
        const text = code.innerText;
        const lines = text.split('\n').length - 1;
        let numberLine = '<span aria-hidden="true" class="line-numbers-rows">';

        for (let i = 1; i <= lines; i++) {
            numberLine += i + '<br>';
        }
        numberLine += '</span>';

        code.innerHTML = numberLine + code.innerHTML;
    });
});
