function FormatDate(time){
    const event = new  Date(time);
    const date = event.toDateString().slice(0,-4);
    return date;
}

export default FormatDate;