import { BotStatus } from '../src/types';
import { TextUtil } from '../src/util';

console.log(TextUtil.cutText('hello world', 4, false));

const botStatus = BotStatus.Available;

console.log(botStatus);
