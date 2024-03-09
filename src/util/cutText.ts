export const cutText = (text: string, maxLength: number, addDots = true): string => {
	return text.length > maxLength
		? `${text.slice(0, addDots ? maxLength - 3 : maxLength)}${addDots ? '...' : ''}`
		: text;
};
