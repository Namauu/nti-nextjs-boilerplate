/** @type {import('next').NextConfig} */
const nextConfig = {
	redirects: async () => {
		return [
			{
				source: "/me/dashboard",
				destination: "/",
				permanent: false,
			},
		];
	},
};
export default nextConfig;
