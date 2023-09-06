module.exports = function toReadable(number) {
    const ones = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let result = '';

    if (number === 0) {
        return 'zero';
    }

    if (number >= 1000) {
        result += ones[Math.floor(number / 1000) - 1] + ' thousand ';
        number %= 1000;
    }

    if (number >= 100) {
        result += ones[Math.floor(number / 100) - 1] + ' hundred ';
        number %= 100;
    }

    if (number >= 20) {
        result += tens[Math.floor(number / 10) - 1] + ' ';
        number %= 10;
    } else if (number >= 11) {
        result += teens[number - 11] + ' ';
        number = 0;
    }

    if (number > 0) {
        result += ones[number - 1];
    }

    return result.trim();
}
