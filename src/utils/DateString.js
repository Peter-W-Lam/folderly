import dayjs from 'dayjs'

export const getDateString = date => {
    let time = dayjs(date)
    let now = dayjs()
    let minutesDiff = now.diff(time, "minute");
    let hoursDiff = now.diff(time, "hour")
    
    if (minutesDiff < 60) {
        return minutesDiff === 1 ? `${minutesDiff} minute ago` : `${minutesDiff} minutes ago`

    }

    if (hoursDiff < 24) {
        return hoursDiff === 1 ? `${hoursDiff} hour ago` : `${hoursDiff} hours ago`
    }

    return time.format("DD MMMM YYYY")
}

export const statusString = num => {
    switch(num) {
        case 0: 
            return "Not Touched";
        case 1: 
            return "In Progress"; 
        case 2: 
            return "Approved"; 
        default: 
            return "All";
    }
}