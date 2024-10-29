class Validator {
    validateUsername(username) {
        const regex = /^(?!.*_{2})(?!.*--)(?!.*\d{4})(?!.*[^\w-]).*$/;
        const startsEndsWithInvalidChar = /^[\d_-]|[\d_-]$/;

        return regex.test(username) && !startsEndsWithInvalidChar.test(username);
    }
}

export default Validator;
