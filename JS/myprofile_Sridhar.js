
var user = prompt('what is your name?');
console.log('user name:', user);
alert('Hi there ' + user + 'I\'m going to ask you few questions. Let see ow much you will score. Start the Game');

var Question1 = prompt(user + ' My favorite sportsman is Steffi Graf. Please answer yes/no Or y/n');
console.log('user answer1:', Question1);
if (Question1.toUpperCase() === 'Y' || Question1.toUpperCase() === 'YES') {
    alert('You are correct. Lets move on 4 more to go');
}
else if (Question1.toUpperCase() === 'N' || Question1.toUpperCase() === 'NO') {
    alert('You are wrong. Lets try another question, we have 4 more. All the best!!');
}
else {
    alert('Please answer only in yes/no Or y/n. All the best!!');
}

var Question2 = prompt(' I am working for Amazon.Please answer yes/no Or y/n');
console.log('user answer2:', Question2);
if (Question2.toUpperCase() === 'Y' || Question2.toUpperCase() === 'YES') {
    alert('You are correct. Lets move on we have 3 more');
}
else if (Question2.toUpperCase() === 'N' || Question2.toUpperCase() === 'NO') {
    alert('You are wrong. Lets try another question, we have 3 more. All the best!!');
}
else {
    alert('Please answer only in yes/no Or y/n. All the best!!');
}

var Question3 = prompt(' I love to watch Horror Movies.Please answer yes/no Or y/n');
console.log('user answer3:', Question3);
if (Question3.toUpperCase() === 'N' || Question3.toUpperCase() === 'NO') {
    alert('You are correct. Lets move on we have 2 more');
}
else if (Question3.toUpperCase() === 'Y' || Question3.toUpperCase() === 'YES') {
    alert('You are wrong. Lets try another question, we have 2 more. All the best!!');
}
else {
    alert('Please answer only in yes/no Or y/n. All the best!!');
}
var Question4 = prompt(' My favorite Heroine is Rakul.Please answer yes/no Or y/n');
console.log('user answer4:', Question4);
if (Question4.toUpperCase() === 'Y' || Question4.toUpperCase() === 'YES') {
    alert('You are correct. Lets move on we have one more');
}
else if (Question4.toUpperCase() === 'N' || Question4.toUpperCase() === 'NO') {
    alert('You are wrong. Lets try another question, we have 1 more. All the best!!');
}
else {
    alert('Please answer only in yes/no Or y/n. All the best!!');
}

var Question5 = prompt(' I am not married .Please answer yes/no Or y/n');
console.log('user answer5:', Question5);
if (Question5.toUpperCase() === 'N' || Question5.toUpperCase() === 'NO') {
    alert('You are correct. We are done with the questions. Let me provide more details about myself');
}
else if (Question5.toUpperCase() === 'Y' || Question5.toUpperCase() === 'YES') {
    alert('You are wrong. Lets try another question, Let me provide more details about about myself');
}
else {
    alert('Please answer only in yes/no Or y/n. Let me provide more details about myself');
}


