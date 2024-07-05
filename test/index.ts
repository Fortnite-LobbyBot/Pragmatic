import { BotStatus } from '../dist/types';
import { TextUtil } from '../dist/util';

console.log(TextUtil.cutText('hello world', 4, false));

const botStatus = BotStatus.Available;

console.log(botStatus);
