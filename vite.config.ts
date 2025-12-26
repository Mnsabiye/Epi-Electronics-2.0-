import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
	base: '/art_space/',
	plugins: [react()],
	server: {
		open: true
	},
	build: {
		target: 'es2020'
	}
})


