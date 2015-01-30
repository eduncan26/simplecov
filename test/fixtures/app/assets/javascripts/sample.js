function foo(){
    var _baz = 'baz';

    function bar(){
        return _baz;
    }

    return bar();
}