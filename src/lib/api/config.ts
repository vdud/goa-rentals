export const siteName = 'Goa Rentals';
export const siteUrl = 'https://goarentals.com/';
export const siteTitle = 'Goa Rental Services';
export const siteDescription = 'Embrace the Freedom of Two-Wheelers';
export const siteImage = `${siteUrl}social.png`;
export const postImage = 'https://social-share-images.vercel.app/';

export const api = 'https://api.github.com';
export const owner = 'vdud';
export const repo = 'goa-rentals';
export const path = 'posts';

export const categories = {
	javascript: 'JavaScript',
	react: 'React',
	css: 'CSS',
	general: 'General',
	design: 'Design',
	git: 'Git & GitHub',
	next: 'Next.js',
	typescript: 'TypeScript',
	svelte: 'Svelte',
	sveltekit: 'SvelteKit'
};

// https://api.github.com/repos/user/repo/contents/posts
export const postsUrl = `${api}/repos/${owner}/${repo}/contents/${path}`;

// https://github.com/user/repo/blob/main/posts
export const fileUrl = `https://github.com/${owner}/${repo}/blob/main/posts`;

// https://raw.githubusercontent.com/user/repo/main/posts/post-slug/images/image.webp
export const imagesUrl = `https://raw.githubusercontent.com/${owner}/${repo}/main/posts`;
