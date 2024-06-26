// import { Cloudinary } from "cloudinary-core";
// new Cloudinary({ cloud_name: "dq5nc6lbr" });

// const UploadImage = async (file) => {
//     try {
//         const formData = new FormData();
//         formData.append("file", file);
//         formData.append("upload_preset", "Emmanuel");
//         formData.append("folder", "DevSync");

//         const response = await fetch(
//             `https://api.cloudinary.com/v1_1/dq5nc6lbr/image/upload`,
//             {
//                 method: "POST",
//                 body: formData,
//             }
//         );

//         const data = await response.json();

//         return data.secure_url; // This is the URL of the uploaded image
//     } catch (error) {
//         console.error("Error uploading image:", error);
//     }
// };


const checkPasswordValidity = (value) => {
    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(value)) {
        return "Password must not contain Whitespaces.";
    }

    const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    if (!isContainsUppercase.test(value)) {
        return "Password must have at least one Uppercase Character.";
    }

    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    if (!isContainsLowercase.test(value)) {
        return "Password must have at least one Lowercase Character.";
    }

    const isContainsNumber = /^(?=.*[0-9]).*$/;
    if (!isContainsNumber.test(value)) {
        return "Password must contain at least one Digit.";
    }
    const isContainsSymbol = /(?=.*[!@#$%^&*])/
    if (!isContainsSymbol.test(value)) {
        return "Password must contain at least one Special Symbol.";
    }

    //   const isValidLength = /^.{6}$/;
    //   if (!isValidLength.test(value)) {
    //     return "Password must be atleast 6 Characters Long.";
    //   }

    return null;
}


const TimeConverter = (timestamp) => {
    const date = new Date(timestamp);

    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    // Extracting date components
    const year = date.getFullYear();
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    // const seconds = date.getSeconds();

    // Creating a formatted date string
    const formattedDate = `${month} ${day}, ${year} - ${hours}:${minutes}`;

    return formattedDate;
}


const DateConverter = (timestamp) => {
    const date = new Date(timestamp);

    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    // Extracting date components
    const year = date.getFullYear();
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    // const seconds = date.getSeconds();

    // Creating a formatted date string
    const formattedDate = `${month} ${day}, ${year}`;

    return formattedDate;
}

const Check = () => {
    const Check = localStorage.getItem('userLoggedIn');
    return Check
}

// const DataCheck = () => {
//     let status
//     const data = JSON.parse(localStorage.getItem('userData'));
//     if(data === null || data === undefined){
//         status = true
//     }else{
//         status = false
//     }
//     return status
// }

const calculateAge = (birthDate) => {
    const birth = new Date(birthDate);
    const today = new Date();

    let age = today.getFullYear() - birth.getFullYear();

    const birthMonth = birth.getMonth();
    const todayMonth = today.getMonth();
    if (todayMonth < birthMonth || (todayMonth === birthMonth && today.getDate() < birth.getDate())) {
        age--;
    }

    return age;
}

function timestampToTime(timestamp) {
    const date = new Date(timestamp);

    let hours = date.getHours();
    const minutes = date.getMinutes();

    const period = hours < 12 ? 'AM' : 'PM';

    if (hours > 12) {
        hours -= 12;
    }

    const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${hours}:${paddedMinutes} ${period}`;
}

function generateTimeOptions() {
    const options = [];
    for (let hour = 0; hour < 24; hour++) {
        const isPM = hour >= 12;
        const displayHour = hour % 12 === 0 ? 12 : hour % 12;
        const timeString = `${displayHour.toString().padStart(2, '0')}:00 ${isPM ? 'PM' : 'AM'}`;
        const timestamp = hour * 60 * 60 * 1000;
        options.push({ time: timeString, timestamp: timestamp });
    }
    return options;
}

function subtractHourFromTimestamp(timestamp) {
    const milliseconds = Number(timestamp);

    const hourMilliseconds = 60 * 60 * 1000;
    const newMilliseconds = milliseconds - hourMilliseconds;

    return newMilliseconds;
}

function StatusChecker(status) {
    let className;
    let name;
    if (status === 0) {
        className = "yellowStatus";
        name = "Pending"
    } else if (status === 1) {
        className = "blueStatus";
        name = "Accepted"
    } else if (status === 2) {
        className = "greenStatus";
        name = "Attended"
    } else if (status === 3) {
        className = "redStatus";
        name = "Canceled"
    }
    return (<span className={className}>{name}</span>)
}

function convertTimeToTimestamp(timeString) {
    const [hours, minutes] = timeString.split(':').map(Number);

    const date = new Date();
    date.setHours(hours, minutes, 0, 0);
    const timestamp = date.getTime();

    return timestamp;
}

function convertDateToTimestamp(value) {
    const date = new Date(value);
    const timestamp = date.getTime();
    return timestamp; 
}

function GetTodaysDate () {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); 
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function GetTime () {
    const currentTime = Date.now();
    return currentTime;
}

export { checkPasswordValidity, GetTime, GetTodaysDate, convertDateToTimestamp, convertTimeToTimestamp, StatusChecker, timestampToTime, subtractHourFromTimestamp, generateTimeOptions, TimeConverter, DateConverter, Check, calculateAge }
