const { repair, succeed, fail, get } = require('./enhancer')

describe('enhancer.js', () => {
    describe('repair()', () => {
        it('accepts an item object and restores durability to 100', () => {
            const item = {
                name: 'Sword',
                durability: 30,
                enhancement: 18
            }

            const expected = {
                name: 'Sword',
                durability: 100,
                enhancement: 18
            }

            const repairedItem = repair(item)

            expect(repairedItem).toEqual(expected)
        })
    })
    describe('succeed()', () => {
            it('raises enhancement by 1 if less than 20', () => {
                    const item = {
                        name: 'Sword',
                        durability: 30,
                        enhancement: 18
                    }

                    const expected = {
                        name: 'Sword',
                        durability: 30,
                        enhancement: 19
                    }
                    const enhancedItem = succeed(item)
                    expect(enhancedItem).toEqual(expected)
                })
        })
        describe('fail()', () => {
            it('reduces durability by 5 if enhancement is less than 15', () => {
                const item = {
                    name: 'Sword',
                    durability: 90,
                    enhancement: 14
                }
                const expected = {
                    name: 'Sword',
                    durability: 85,
                    enhancement: 14
                }
                const failItem = fail(item)
                expect(failItem).toEqual(expected)
            })
            it('reduces durability by 10 if enhancement is 15', () => {
                const item = {
                    name: 'Sword',
                    durability: 90,
                    enhancement: 15
                }
                const expected = {
                    name: 'Sword',
                    durability: 80,
                    enhancement: 15
                }
                const failItem = fail(item)
                expect(failItem).toEqual(expected)
            })
            it('reduces durability by 10 if enhancement is greater than 15', () => {
                const item = {
                    name: 'Sword',
                    durability: 90,
                    enhancement: 16
                }
                const expected = {
                    name: 'Sword',
                    durability: 80,
                    enhancement: 16
                }
                const failItem = fail(item)
                expect(failItem).toEqual(expected)
            })

        })
        describe('get()', () => {
            it('does nothing if enhancement is 0', () => {
                const item = {
                    name: 'Sword',
                    durability: 40,
                    enhancement: 0
                }
                const expected = {
                    name: 'Sword',
                    durability: 40,
                    enhancement: 0
                }
                const gottenItem = get(item)
                expect(gottenItem).toEqual(expected)
            })
            it('adds enhancement level to name if greater than 0', () => {
                const item = {
                    name: 'Sword',
                    durability: 40,
                    enhancement: 2
                }
                const expected = {
                    name: 'Sword +2',
                    durability: 40,
                    enhancement: 2
                }
                const gottenItem = get(item)
                expect(gottenItem).toEqual(expected)
            })
        })
})