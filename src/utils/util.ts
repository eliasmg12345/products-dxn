export const getImagenUrl = (path: string) => {
    return new URL(`../assets/${path}`, import.meta.url).href
}