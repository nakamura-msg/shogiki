class Hisya {
    constructor() {
        this.isPromotion = false
    }
    get canPromotion() {
        return true
    }

    get moveIndex() {
        if(this.isPromotion) {
            return [
                [0, 0, 2, 0, 0],
                [0, 1, 1, 1, 0],
                [2, 1, 0, 1, 2],
                [0, 1, 1, 1, 0],
                [0, 0, 2, 0, 0]
            ]
        } else {
            return [
                [0, 0, 2, 0, 0],
                [0, 0, 1, 0, 0],
                [2, 1, 0, 1, 2],
                [0, 0, 1, 0, 0],
                [0, 0, 2, 0, 0]
            ]
        }
    }
}

