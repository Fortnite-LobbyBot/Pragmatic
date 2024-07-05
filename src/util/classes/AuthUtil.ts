export abstract class AuthUtil {
	public static encodeToken(id: string, auth: string): string {
		return Buffer.from(`${id}.${auth}`).toString('base64').replaceAll('=', '');
	}

	public static decodeToken(token: string): { id: string; auth: string } | null {
		const [id, auth] = Buffer.from(token, 'base64').toString('utf8').split('.');

		if (!id || !auth) return null;

		return { id, auth };
	}
}
