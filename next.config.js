/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	distDir: '.next',

	images: {
		domains: ['files.stripe.com'],
	},
}

module.exports = nextConfig
