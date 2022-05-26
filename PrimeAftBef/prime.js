////* temize yakın
    function primeBefAft(bNumber) {
       
        for (let i = 0; i < 200000; i++) {
            bNumber += 1;
            let sayac = 0;
            for (let k = 1; k <= bNumber; k++) {
                if (bNumber % k == 0) {
                    sayac += 1;
    
                }
            }
            if (sayac < 3) {
                console.log(bNumber);
                break
            }
        }
        
        for (let i = 0; i < 1000; i++) {
            bNumber -= 1;
            let sayacc = 0;
            for (let k = 1; k <= bNumber; k++) {
                if (bNumber % k == 0) {
                    sayacc += 1;
    
                }
            }
            if (sayacc < 3) {
                console.log(bNumber);
                break
            }
        }
    }
    
    primeBefAft(785);


