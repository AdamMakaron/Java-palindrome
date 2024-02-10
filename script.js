document.getElementById('check-btn').addEventListener('click', function() {
    const text = document.getElementById('text-input').value;
    if (!text) {
        alert('Please input a value');
        return;
    }
    const result = isPalindrome(text) ? `${text} is a palindrome` : `${text} is not a palindrome`;
    document.getElementById('result').innerText = result;
});

function isPalindrome(str) {
    const cleaned = str.replace(/[\W_]/g, '').toLowerCase();
    const reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
}
