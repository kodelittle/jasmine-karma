describe ("SUITE: This is my first Jasmine test.", function(){
    it("SPEC: Hello world. A true should be true, if not in physical world, at least in the digital world.", function(){
        expect(true).toBe(false) ; 
        expect(false).not.toBe(true);
    }) ; 
}) ; 
