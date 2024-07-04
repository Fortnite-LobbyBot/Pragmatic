export const cutText = (text: string, maxLength: number, addDots = true): string => {
	return text.length > maxLength
		? `${text.slice(0, addDots ? Math.max(maxLength - 3, 0) : maxLength)}${addDots ? '...' : ''}`
		: text;
};
