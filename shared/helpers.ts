export class Helpers {

	protected static fileSizeSuffixes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB'];

	public static bytesToString(byteCount: number)
	{
		if (byteCount == 0)
			return '0' + Helpers.fileSizeSuffixes[0];

		const bytes = Math.abs(byteCount);
		const place = Math.floor(Math.log(bytes) / Math.log(1024));
		const num = Math.round(bytes / Math.pow(1024, place));
		return (Math.sign(byteCount) * num) + Helpers.fileSizeSuffixes[place];
	}

	public static isValidUrl(url: string)
	{
		try {
			const urlObj = new URL(url);

			return urlObj.protocol === 'http:' || urlObj.protocol === 'https:';
		}
		catch
		{
			return false;
		}
	}
}