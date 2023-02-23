import chalk from 'chalk';
import boxen from 'boxen';

console.log(chalk.blue.bgGreen('Hello chalk'));

console.log(boxen(chalk.black.bgGreen('sofia'),{
    padding: 1,
    margin: 3,
    borderStyle: 'arrow',
    title: 'Need',
    titleAlignment: 'left'
}));

console.log(boxen(chalk.black.bgRedBright('Dzyuba'),{
    padding: 6,
    margin: 1,
    borderStyle: 'classic',
    title: 'On',
    titleAlignment: 'bottom'
}));

console.log(boxen(chalk.black.bgYellow.underline('MM-21'),{
    padding: 3,
    margin: 1,
    borderStyle: 'double',
    title: 'Boxid',
    titleAlignment: 'center'
}));