const timeCreated = (createdAt) => {
    const createdTime = Date.parse(createdAt);
    const now = new Date().getTime();
    const seconds = (now - createdTime) / 1000;
    const days = parseInt(seconds / (24 * 60 * 60));
    const hours = parseInt(seconds / (60 * 60));
    const minutes = parseInt(seconds / 60);

    if(days > 0) {
        return days + " ngày trước";
    }
    if(hours > 0) {
        return hours + " giờ trước"
    }
    if(minutes > 0) {
        return minutes + " phút trước"
    }
    return seconds + " giây trước";
}

export default timeCreated;