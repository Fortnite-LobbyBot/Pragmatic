export abstract class PromiseUtil {
	public static wait(ms: number): Promise<void> {
		return new Promise((res) => setTimeout(res, ms));
	}
}
