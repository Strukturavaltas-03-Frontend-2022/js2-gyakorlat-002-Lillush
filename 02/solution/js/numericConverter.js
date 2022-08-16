'use strict';

const numericConverter = (dec) => {
    const hexa = dec.toString(16);
    const bin = dec.toString(2);
    const okta = dec.toString(8);

    return {
        binary: bin,
        hexa: hexa,
        octal: okta,
    }
};

export default numericConverter;
