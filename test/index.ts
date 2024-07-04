import { BotStatus } from '../dist/types';
import { cutText } from '../dist/util';

console.log(cutText('hello world', 4, false));

const botStatus = BotStatus.Available

console.log(botStatus)