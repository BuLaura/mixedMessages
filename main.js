const FortuneCookie = {
    time: ['Yestrday', 'Day after tomorrow', 'Never', 'Always', 'Next year', 'Your entire life', 'Today', 'Sometimes', 'Last year', 'Next month', 'Next Week', 'Next summer', 'Next winter'],
    wisdom: ['count back words until you see', 'remember to smile for', 'is going to pay of so remember', 'forget to to regret', 'do not hold onto', 'look back at', 'realize how much you love', 'sit in silence with', 'go out of your way for'],
    subject: ['your family.', 'your friends.', 'your neighbor.', 'love.', 'time.', 'patience.', 'hope.', 'happiness.', 'money.', 'people.', 'your career.', 'the past.', 'the future.', 'your life.'],
    luckyNumber() {
        return Math.floor(Math.random() * 101);
    },
    get newLuck() {
        let mixedMessage = [];
        mixedMessage.push(this.time[Math.floor(Math.random() * this.time.length - 1)]);
        mixedMessage.push(this.wisdom[Math.floor(Math.random() * this.wisdom.length - 1)]);
        mixedMessage.push(this.subject[Math.floor(Math.random() * this.subject.length -1)]);
        return `Your fortune cookie reads: ${mixedMessage.join(" ")} and your lucky number is: ${this.luckyNumber()}`;
    }
}

console.log(FortuneCookie.newLuck);