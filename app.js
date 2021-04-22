new Vue({
    el: '#app',
    computed: {
        turn() {
            return this.moves.length % 2 === 0 ? 'X' : 'O'
        },
        table() {
            const table = [
                [null, null, null],
                [null, null, null],
                [null, null, null],
            ]
            this.moves.map(el => {
                table[el.indexX][el.indexY] = el.turn
            })
            return table
        }
    },
    data() {
        return {
            moves: [],
            score: {
                X: 0,
                O: 0,
                D: 0
            }
        }
    },
    methods: {
        setMove(indexX, indexY) {
            if (!!this.table[indexX][indexY]) return
            this.moves.push({
                indexX,
                indexY,
                turn: this.turn
            })
            const winner = this.checkWinner()
            if (!!winner) {
                this.win(winner)
            } else if (this.moves.length === 9) {
                this.draw()
            }
        },
        checkWinner() {
            const { table } = this
            const positions = [
                // columns
                [table[0][0], table[0][1], table[0][2]],
                [table[1][0], table[1][1], table[1][2]],
                [table[2][0], table[2][1], table[2][2]],
                // rows
                [table[0][0], table[1][0], table[2][0]],
                [table[0][1], table[1][1], table[2][1]],
                [table[0][2], table[1][2], table[2][2]],
                // crosses
                [table[0][0], table[1][1], table[2][2]],
                [table[0][2], table[1][1], table[2][0]],
            ]
            const winner = positions.find(el => !!el[0] && el[0] === el[1] && el[1] === el[2])
            return !!winner ? winner[0] : null
        },
        draw() {
            this.score['D']++
            this.reset()
        },
        win(winner) {
            this.score[winner]++
            this.reset()
        },
        reset() {
            this.moves = []
        },
        restart() {
            this.moves = []
            this.score = {
                'X': 0,
                'O': 0,
                'D': 0
            }
        },
        turnBack() {
            this.moves.pop()
        }
    }
})