 function validateCreditCard(number) {
    const cleaned = number.replace(/-/g, '');
    
    if (cleaned.length !== 16) return { valid: false, number, error: 'wrong_length' };
    if (!/^\d+$/.test(cleaned)) return { valid: false, number, error: 'invalid_characters' };
    
    const digits = cleaned.split('').map(Number);
    if (new Set(digits).size < 2) return { valid: false, number, error: 'all_digits_same' };
    if (digits[15] % 2 !== 0) return { valid: false, number, error: 'final_digit_not_even' };
    if (digits.reduce((a, b) => a + b, 0) <= 16) return { valid: false, number, error: 'sum_less_than_16' };

    return { valid: true, number };
}

console.log(validateCreditCard("9999-9999-8888-0000"));
console.log(validateCreditCard("a923-3211-9c01-1112"));
