const color = ["#D81C60","#7B20A1","#F06192","#FFA000"]

export const randomize_color = () => {
    return color[Math.floor(Math.random() * color.length)]
}

export const randomize_id = () => {
    return Math.floor(Math.random() * 10000)
}