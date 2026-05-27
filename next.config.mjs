/** @type {import('next').NextConfig} */
const nextConfig = {
	// Allow dev origins (add your machine IP and port if different)
	allowedDevOrigins: [
		'http://192.168.1.26:3000',
		'http://192.168.1.26',
		'192.168.1.26',
		'localhost',
		'127.0.0.1',
	],
};

export default nextConfig;
