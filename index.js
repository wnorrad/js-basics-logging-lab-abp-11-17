const driver = 'bob';

function calledWithExactly(string); {
  if st
}


it('invokes console.log() with the string "this code was called"', function () {
      expect(spy.calledWithExactly('this code was called')).to.be.true;
    });

    it('invokes console.log() with the `driver` variable', function () {
      expect(spy.calledWithExactly('bob')).to.be.true;
    });

    it('invokes the console.log with the `driver` variable as the first argument and `is the driver variable name` as the second argument', function () {
      expect(spy.calledWithExactly('bob', 'is the driver variable name')).to.be.true;
    });


