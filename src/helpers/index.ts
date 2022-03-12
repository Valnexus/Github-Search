// Function for time ago
const MONTH_NAMES = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

const getFormattedDate = (date:any, prefomattedDate:boolean | string = false, hideYear = false) => {
    const day = date.getDate();
    const month = MONTH_NAMES[date.getMonth()];
    const year = date.getFullYear();
    const hours = date.getHours();
    let minutes = date.getMinutes();
  
    if (minutes < 10) {
      // Adding leading zero to minutes
      minutes = `0${ minutes }`;
    }
  
    if (prefomattedDate) {
      // Today at 10:20
      // Yesterday at 10:20
      return `${ prefomattedDate } at ${ hours }:${ minutes }`;
    }
  
    if (hideYear) {
      // 10. January at 10:20
      return `${ day }. ${ month } at ${ hours }:${ minutes }`;
    }
  
    // 10. January 2017. at 10:20
    return `${ day }. ${ month } ${ year }. at ${ hours }:${ minutes }`;
  }

export const timeAgo = (dateParam:any) => {
    if (!dateParam) {
      return null;
    }
  
    const date = typeof dateParam === 'object' ? dateParam : new Date(dateParam);
    const DAY_IN_MS = 86400000; // 24 * 60 * 60 * 1000
    const today:any = new Date();
    const yesterday = new Date(today - DAY_IN_MS);
    const seconds = Math.round((today - date) / 1000);
    const minutes = Math.round(seconds / 60);
    const isToday = today.toDateString() === date.toDateString();
    const isYesterday = yesterday.toDateString() === date.toDateString();
    const isThisYear = today.getFullYear() === date.getFullYear();
  
  
    if (seconds < 5) {
      return 'now';
    } else if (seconds < 60) {
      return `${ seconds } seconds ago`;
    } else if (seconds < 90) {
      return 'about a minute ago';
    } else if (minutes < 60) {
      return `${ minutes } minutes ago`;
    } else if (isToday) {
      return getFormattedDate(date, 'today'); // Today at 10:20
    } else if (isYesterday) {
      return getFormattedDate(date, 'yesterday'); // Yesterday at 10:20
    } else if (isThisYear) {
      return getFormattedDate(date, false, true); // 10. January at 10:20
    }
  
    return getFormattedDate(date); // 10. January 2017. at 10:20
};

// Export function to convert number to number with ','
export const numberWithCommas = (x:number):string => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// Export function for replacing 000 with symbol
export const numberWithSymbol = (num:number, digits:number) => {
    const lookup = [{
            value: 1e3,
            symbol: "k"
        },{
            value: 1e6,
            symbol: "m"
        },
        {
            value: 1e9,
            symbol: "b"
        },
        {
            value: 1e12,
            symbol: "t"
        }
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    if(num < 1000) {
        return num
    } else {
        var item = lookup.slice().reverse().find(function (item) {
            return num >= item.value;
        });
    }
    return item ? (num / item.value).toFixed(digits).replace(rx, "1") + item.symbol : "0";
};