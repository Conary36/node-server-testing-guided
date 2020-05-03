//configured instance of knex
const db = require('../data/dbConfig.js')
const Hobbits = require('./hobbitsModel.js')

describe('hobbits model', ()=>{
    describe('insert()', ()=>{
        it('should insert hobbits into the db', async ()=>{
            await Hobbits.insert({name: 'gaffer'})
            await Hobbits.insert({name: "sam"})

            const addedHobbits = await db('hobbits')
            expect(addedHobbits).toHaveLength(2);
        })

        it('should add a single hobbit', async () =>{
            let hobbit = await Hobbits.insert({name: 'gaffer'})
            expect(hobbit.name).toBe('gaffer')

             hobbit = await Hobbits.insert({ name: "sam" });
            expect(hobbit.name).toBe("sam");
        })
    })
})

beforeEach(async () => {//clear out database before each run
    await db('hobbits').truncate();
})