const validation = [
    {
        condition: 'rating',
        properti: 'attributes.rating',
        validationFungsion: (data) => data >= 4
    },
    {
        condition: 'stock',
        properti: 'attributes.stock',
        validationFungsion: (data) => data > 0
    },
]



export const filterHandler = (productList = [], conditionCheck) => {
    const loadData = []
    validation.map(data => {
        if(data.condition === conditionCheck){
           loadData.push([...productList.filter(item => data.validationFungsion(item))])
        }
    })
    return [...loadData]
}