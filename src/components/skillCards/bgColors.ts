type bgType = {
    backgroundColor: string,
}
interface bgColorsType {
    [key: string]: bgType,
 }

export const bgColors: bgColorsType = {
    purple: {
        backgroundColor: "#7D458C",   
    },
    yellow: {
        backgroundColor: "#FFC700",   
    },
    pink: {
        backgroundColor: "#FF7E65",   
    },
    orange: {
        backgroundColor: "#F7A012",   
    },
    blue: {
        backgroundColor: "#2491D2",   
    },
};


type courseColorType = {
    "Степ-аэробика": string,
    "Йога": string,
    "Стретчинг": string,
    "Бодифлекс": string,
    "Зумба": string, 
}
export const courseColor: courseColorType = {
    "Степ-аэробика": "pink",
    "Йога": "yellow",
    "Стретчинг": "blue",
    "Бодифлекс": "purple",
    "Зумба": "orange",
}