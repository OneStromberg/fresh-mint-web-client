const initState = {
    recipe: [
        {
            type: 'Recipe 1',
            months: [
                {
                    name: 'First',
                    age: 29,
                    sex: 'male',
                    role: 'coder'
                }, {
                    name: 'Second',
                    age: 27,
                    sex: 'female',
                    role: 'ocamler'
                }, {
                    name: 'Third',
                    age: 27,
                    sex: 'female',
                    role: 'ocamler'
                }
            ]
        }
    ]
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default reducer
