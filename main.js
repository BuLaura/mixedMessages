const fortuneCookie = {
    time: ['Yestrday', 'Day after tomorrow', 'Never', 'Always', 'Next year', 'Your entire life', 'Today', 'Sometimes', 'Last year', 'Next month', 'Next week', 'Next summer', 'Next winter'],
    wisdom: ['count back words until you see', 'remember to smile for', 'is going to pay of so remember', 'forget to to regret', 'do not hold onto', 'look back at', 'realize how much you love', 'sit in silence with', 'go out of your way for'],
    subject: ['your family.', 'your friends.', 'your neighbor.', 'love.', 'time.', 'patience.', 'hope.', 'happiness.', 'money.', 'people.', 'your career.', 'the past.', 'the future.', 'your life.'],
    luckyNumber() {
        return Math.floor(Math.random() * 101);
    },
    get newLuck() {
        let mixedMessage = [];
        let trapped = "HELP ME! I'm trapped in a fortune cookie factory";
        let error = 'Ouups... Your cookie was empty. Hopefully you have better luck next time.';
        mixedMessage.push(this.time[Math.floor(Math.random() * this.time.length)]);
        mixedMessage.push(this.wisdom[Math.floor(Math.random() * this.wisdom.length)]);
        mixedMessage.push(this.subject[Math.floor(Math.random() * this.subject.length)]);   
        let chances = Math.floor(Math.random() * 100);
        if (chances === 99) {
            return trapped;
        } else if (chances === 50) {
            return error;
        } 
        return `Your fortune cookie reads: ${mixedMessage.join(" ")} & your lucky number is: ${this.luckyNumber()} !`;
    }
}

// test function

/*const test = (fortuneCookie) => { 
    for (let i = 0; i < 200; i++) {
        console.log(fortuneCookie.newLuck);
    }
}

test(fortuneCookie); */

let cookie = document.getElementById("cookie");
let message = document.getElementById("message");

cookie.onclick = function() {
    if (message.style.visibility === "visible") {
        message.style.visibility = "hidden";
    } else {
        message.style.visibility = "visible";
        message.getElementsByTagName("p")[0].innerHTML = fortuneCookie.newLuck;
    }
}
