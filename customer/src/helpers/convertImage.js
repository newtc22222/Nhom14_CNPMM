const getImageSource = (buffer) => {
    if(buffer) {
        const b64 = btoa(
            String.fromCharCode(...new Uint8Array(buffer))
        );
        return `data:image/png;base64,${b64}`;
    }
    return null; 
}

export default getImageSource;