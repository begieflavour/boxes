import chalk from 'chalk';
import boxen from 'boxen';

console.log(chalk.blue.bgGreen('Hello chalk'));

console.log(boxen(chalk.black.bgGreen('sofia'),{
    padding: 16,
    margin: 16,
    borderStyle: 'arrow',
    title: 'Need',
    titleAlignment: 'left'
}));

console.log(boxen(chalk.black.bgRedBright('Dzyuba'),{
    padding: 6,
    margin: 21,
    borderStyle: 'bold',
    title: 'on',
    titleAlignment: 'bottom'
}));

console.log(boxen(chalk.black.bgYellow.underline('MM-21'),{
    padding: 3,
    margin: 2,
    borderStyle: 'double',
    title: 'Boxid',
    titleAlignment: 'center'
}));

console.log(boxen(chalk.black.bgBlack('abstraktsioon'),{
    padding: 19,
    margin: 1,
    borderStyle: 'singleDouble',
    title: 'mis',
    titleAlignment: 'center'
}));

console.log(boxen(chalk.black.bgBlue('567'),{
    padding: 5,
    margin: 6,
    borderStyle: 'classic',
    title: 'on',
    titleAlignment: 'top'
}));
console.log(boxen(chalk.black.bgWhite('Frank Sinatra'),{
    padding: 9,
    margin: 3,
    borderStyle: 'round',
    title: 'ilusad',
    titleAlignment: 'bottom'
}));
