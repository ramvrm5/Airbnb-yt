/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['links.papareact.com']
  },
  env: {
    mapbox_key: 'pk.eyJ1IjoicmFtdnJtNSIsImEiOiJjbDJ5a256NTYwMW1jM2ptcTMwcHJyYWl2In0.Ty4gjkLkPDZjvk2QIX3K3g'
  }
}

module.exports = nextConfig
