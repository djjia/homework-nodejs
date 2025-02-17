const coordinates = [
    {id:"a",value:"31,49"},
    {id:"b",value:"44,67"},
    {id:"c",value:"93,6"},
    {id:"d",value:"20,16"},
    {id:"e",value:"68,53"},
    {id:"f",value:"71,8"},
    {id:"g",value:"61,90"},
    {id:"h",value:"34,97"},
    {id:"i",value:"21,63"},
    {id:"j",value:"19,84"},
    {id:"k",value:"0,81"},
    {id:"l",value:"6,76"},
    {id:"m",value:"43,64"},
    {id:"n",value:"18,64"},
    {id:"o",value:"10,61"},
    {id:"p",value:"37,27"},
    {id:"q",value:"44,88"},
    {id:"r",value:"75,63"},
    {id:"s",value:"99,46"},
    {id:"t",value:"28,51"},
    {id:"u",value:"88,79"},
    {id:"v",value:"47,21"},
    {id:"w",value:"18,66"},
    {id:"x",value:"84,100"},
    {id:"y",value:"75,92"},
    {id:"z",value:"32,33"}
]

const calDistance = (x1, y1, x2, y2) => {
    let d = Math.sqrt((x1 - x2)**2 + (y1 - y2)**2)
    return d
}


const closestToFarthest  = (x, y) => {
    let result = []
    for (let i = 0; i < coordinates.length; i++) {
        let x2 = +coordinates[i].value.split(',')[0]
        let y2 = +coordinates[i].value.split(',')[1]
        result[i] = {
            id: coordinates[i].id,
            distance: calDistance(x, y, x2, y2)
        }
    }
    result.sort((a, b) => {return a.distance - b.distance})
    return result
}


console.log(closestToFarthest(6, 33))