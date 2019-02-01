const fizzBuzz = require('./fizzBuzz');


test('ทดสอบ', () =>{ 
    expect(fizzBuzz(1)).toBe(1)
});

test('ทดสอบ2', () =>{ 
    expect(fizzBuzz(3)).toBe("Fizz")
});

test('ทดสอบ2', () =>{ 
    expect(fizzBuzz(5)).toBe("Buzz")
});


test('ทดสอบ2', () =>{ 
    expect(fizzBuzz(15)).toBe("FizzBuzz")
});
